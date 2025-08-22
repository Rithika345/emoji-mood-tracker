//getting references to elements on the page 
//finding all buttons elements inside the div with id emoji-buttons
const buttons = document.querySelectorAll('#emoji-buttons button');
//grabs the empty <ul> where moods will be displayed 
const historyList= document.getElementById('mood-history');

//load moods from localStrorage
let moods = JSON.parse(localStorage.getItem('moods')) || [];

//show existing mood history
renderMoods();

buttons.forEach(button => { 
    button.addEventListener('click', () =>{
        const mood = button.textContent;// the emoji user clicked on

        const now = new Date(); //current date and time
        const timestamp = now.toLocaleString();//formatted string
        moods.push({emoji: mood, timestamp: timestamp}); // saves as an object
        localStorage.setItem('moods',JSON.stringify(moods));
        renderMoods();
    });
});

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
    moods =[];
    localStorage.removeItem('moods');
    renderMoods();
});
    
function renderMoods() {
    historyList.innerHTML = '';//clearing the old list
    moods.forEach(mood => {
        const li = document.createElement('li');// new list item
        li.textContent = `${mood.emoji} - ${mood.timestamp}`;
        historyList.appendChild(li);// add to list
    });
}  