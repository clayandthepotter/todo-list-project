// Create the variable 'form' to call 'todo-form' element id from index.html
var form = document.getElementById('todo-form');

// Create the variable 'input' to call 'todo-input' element id from index.html
var input = document.getElementById('todo-input');

// Create the variable 'list' to call 'todo-list' element id from index.html
var list = document.getElementById('todo-list');

// Create an event listener for the page 'load' event
window.addEventListener('load', function() {
// Create console log ('Welcome!')
    console.log('Welcome!');
  
// If there are tasks in localStorage, we want to search localStorage and display those items in the 'todo-list'

/* Create a for loop that searches through items held in 
the localStorage directory in order to call those items
and display them in the 'todo-list' */

//The for loop will repeat until the specified condition evaluates false.
// As long as the condition is true, the statement will execute.
/* for (initialization; condition; afterthought)
    statement */
//
  
  for (var i = 0; i < localStorage.length; i++) {
  //Variable 'i' = 0,
  //If 'i' is less than the length of localStorage,
    //addTaskToList
    addTaskToList(localStorage.key(i));
  //'i' iterates until the end of localStorage.length  
    }
});
//Add event listener to the form element which listens for the 'submit' event
form.addEventListener('submit', function(event) {
    //Prevent default reload action after submit event
    event.preventDefault();

//Store the value from the 'input' element into the 'task' variable
 var task = input.value;
 //Reset the content of the 'input' element to a blank string
 input.value = '';

//Add the 'task' variable to the 'task-list'
 addTaskToList(task);
 localStorage.setItem(task, task);
});

