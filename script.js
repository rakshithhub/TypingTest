const msg = document.getElementById('msg');
const myWord = document.getElementById('myWord');
const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');

const makeString = ["Your use of this software is subject to the terms and conditions of the license agreement by which you acquired this software.", "If you are a volume license customer, use of this software is subject to your volume license agreement." , "You may not use this software if you have not validly acquired a license for the software from Microsoft or its licensed distributors"];

let startTime,endTime;

const playGame = () =>{
    let randomNumber = Math.floor(Math.random() * makeString.length);
    msg.innerHTML = makeString[randomNumber];
    btn.innerText = 'Done';
    let date = new Date();
    startTime = date.getTime();
}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    return response;
}

const compareWord = (str1,str2) =>{
    let word1 = str1.split(" ");
    let word2 = str2.split(" ");
    let count = 0;

    word1.forEach(function(value,index){
        if(value == word2[index]){
            count++;
        }
    })

    let errorWord = (word1.length - count);

    return (count + " Correct out of " +word1.length+ " Words are the total number of error are " +errorWord+".");
}

const endGame = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);

    let totalStr = myWord.value;
    let wordCount = wordCounter(totalStr);
    let speed = Math.floor((wordCount/totalTime)*60);
    let finalMsg = "You typed total at " +speed+ " word per minutes ";
    finalMsg += compareWord(msg.innerText,totalStr);
    msg.innerText = finalMsg;
    //btn.innerText = 'Start';
}

btn.addEventListener('click',function(){
    if(this.innerText == 'Start'){
        myWord.disabled = false;
        myWord.focus();
        playGame();
    }else if(this.innerText == 'Done'){
        if(myWord.value == ''){
            alert('First Enter the Sentence!!');
            myWord.focus();
            return;
        }
        myWord.disabled = false;
        endGame();
    }
})

btn2.addEventListener('click',function(){
        myWord.focus();
        myWord.value = "";
        playGame();
    })