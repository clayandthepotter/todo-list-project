// We will create the variable 'form' to call the 'todo-form' element id from index.html
var form = document.getElementById('todo-form');

// We will create the variable 'input' to call the 'todo-input' element id from index.html
var input = document.getElementById('todo-input');

// We will create the variable 'list' to call the 'todo-list' element id from index.html
var list = document.getElementById('todo-list');

// We will create an event listener for the page 'load' event
window.addEventListener('load', function() {
    console.log();
  
// As a function of this event listener, we will search localStorage and display those items in the 'todo-list'

/* In order to do that, we will nest a for loop inside the listener.
In order for us re-call those list items, this loop will search for the items held in the localStorage directory,
and we will use a for loop to iterate through the list items and then re-call them to the 'todo-list' using a function.

for loops repeat until the specified condition evaluates false.
 the for loop syntax *
    for (initialization; condition; afterthought){
        statement
    }
For our initialization, we will declare the item variable, 'i' = 0
For our condition and statement, as long as 'i' is less than the length of our localStorage,
    our statement function will add 'i' to our 'todo-list' 
Our afterthought iterates through the entire list up to and inclusive of the last item in localStorage */
  
  for (var i = 0; i < localStorage.length; i++) {
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
    var task = input.value;
    // We will reset the content of the 'input' element to a blank string after the 'submit' event
    input.value = '';
    //We will add the 'task' to both to the 'task-list' and localStorage
    addTaskToList(task);
    localStorage.setItem(task, task);
});
