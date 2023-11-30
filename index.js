const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

function addTask(){
    if(inputBox.value === ''){
        alert('You must add something!')
    }
    else{
        // creating one html element  - and storing this element in li variable
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);  //this li will be displyed uder listContainer
        // using span tag to - add one cross tag
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);  // inside li i had appended span 
        

    }
    inputBox.value = '';
    saveData();  //calling save data again again whenever we add new data
}
// Toggle between adding and removing a class name from an element with JavaScript.

listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData(); 

    }
    else if(e.target.tagName === 'SPAN'){   //if we will cick on span it will delete parent element
        e.target.parentElement.remove();
        saveData(); 
    }
},false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

//to display data after refreshing 
//again anda again calling the function - showlist

function showlist(){
    listContainer.innerHTML = localStorage.getItem('data');
    //gitItem ->it will give all the content stored with the name item data
}
showlist()
