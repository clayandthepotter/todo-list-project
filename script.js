// We will create the variable 'form' to call the 'todo-form' element id from index.html
let form = document.getElementById('todo-form');
// We will create the variable 'input' to call the 'todo-input' element id from index.html
let input = document.getElementById('todo-input');
// We will create the variable 'list' to call the 'todo-list' element id from index.html
let list = document.getElementById('todo-list');


// We will define a function called addTaskToList() so we can add our user generated inputs to the 'todo-list'
function addTaskToList(task) {
    // With document.createElement('li'), we will create a new list item and store it in the variable named listItem 
    let listItem = document.createElement('li');    
    /* To display the user-generated textContent in the listItem,
    we will set the listItem.textContent to our task parameter */
    listItem.textContent = task;
    // To make list interactive, we will add a 'click' event listener to the listItem
    listItem.addEventListener('click', function() {
        // We want to remove listItem from list and from localStorage when they are clicked
        listItem.remove();
        localStorage.removeItem(task);
    });
    /* To make the new listItem appear in list, we will use the appendChild() method
    and define the listItem as the child element*/
    list.appendChild(listItem);
}


// We will create an event listener for the page 'load' event
window.addEventListener('load', function() {
    console.log();

  for (let i = 0; i < localStorage.length; i++) {
    // Our statement funtion will add each item from localStorage to our 'todo-list' 
    addTaskToList(localStorage.key(i));
    // We will define this function later
    }
});


//We will add an event listener to the form element to listen for the 'submit' event
form.addEventListener('submit', function(event) {
    // We will use the preventDefault method to cancel the default reload action after the 'submit' event occurs
    event.preventDefault();
    // We will store the user generated value from the 'input' field into the 'task' variable
    let task = input.value;
    // We will reset the content of the 'input' element to a blank string after the 'submit' event
    input.value = '';
    //We will add the 'task' to both to the 'task-list' and localStorage
    addTaskToList(task);
    localStorage.setItem(task, task);
});
