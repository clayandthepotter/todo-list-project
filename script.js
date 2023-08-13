// Create the variable 'form' to call 'todo-form' element id from index.html
var form = document.getElementById('todo-form');

// Create the variable 'input' to call 'todo-input' element id from index.html
var input = document.getElementById('todo-input');

// Create the variable 'list' to call 'todo-list' element id from index.html
var list = document.getElementById('todo-list');

// Create an event listener for the page 'load' event
window.addEventListener('load', function() {
    console.log();
  
// As a function of this event listener, we will search localStorage and display those items in the 'todo-list'

/* In order to do that, we will nest a for loop inside the listener.
This loop will search for the items held in the localStorage directory in order for us re-call those list items.
We will use a for loop to iterate through the list items and then re-call them to the 'todo-list' using a function.

for loops repeat until the specified condition evaluates false.
 for loop syntax *
    for (initialization; condition; afterthought){
        statement
    }
For our initialization, we will declare the item variable, 'i' = 0
For our condition and statement, as long as 'i' is less than the length of our localStorage,
    our statement function will add 'i' to our 'todo-list' 
Our afterthought iterates through the entire list up to adn inclusive of the last item in localStorage */
// As long as the condition is true, the statement will continue to execute.
  
  for (var i = 0; i < localStorage.length; i++) {
    addTaskToList(localStorage.key(i));
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

