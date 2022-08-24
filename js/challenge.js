// Interact with the simple liking application

document.addEventListener('DOMContentLoaded', () => {
    // Call the timer increment
    const counterIncrease = setInterval(counterIncrement, 1000);
    //const counterIncrease = start()
    window. timer = counterIncrease

    // Listen to the minus button
    const minus = document.querySelector('#minus');
    minus.addEventListener('click', decrementCounter);

    // Listen to the plus button
    const plus = document.querySelector('#plus');
    plus.addEventListener('click', incrementCounter);

    // Listen to the like button
    const heart = document.querySelector('#heart');
    heart.addEventListener('click', likeMessage);

    // Listen to the pause button
    const pause = document.querySelector('#pause');
    pause.addEventListener('click', pauseResume);

    // Grab the form and listen to the form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', postComment);

})

// function start(){
//     setInterval(counterIncrement, 1000);
// }

// Set the timer increment for counter
function counterIncrement(){
    // Grab counter
    const counter = document.querySelector('#counter');
    counter.textContent = parseInt(counter.textContent, 10) + 1; // Increase counter by 1
} 

// Decrement the counter value
function decrementCounter() {
    // Grab the counter
    const counter = document.querySelector('#counter');
    // Decrement the value by 1
    counter.textContent = parseInt(counter.textContent, 10) - 1;
}

// Increment the counter value
function incrementCounter() {
    // Grab the counter
    const counter = document.querySelector('#counter');
    // Increment the value by 1 - First convert in to number
    counter.textContent = parseInt(counter.textContent, 10) + 1;
}

// Add like message under the likes for a liked number
function likeMessage() {
    // Grab the likes section (unordered list element)
    const likes = document.querySelector('.likes');
    // Grab the counter
    const counter = document.querySelector('#counter');

    // Create a list element for the like message of the number liked
    const li = document.createElement('li');
    li.innerText = `${counter.textContent} has been liked.` //Get the value of counter

    // Append the like message to the likes section
    likes.appendChild(li);
}

// Pause and resume counter
function pauseResume(event) {
    // Create an object with the button labels
    const labels = {
        'pause': 'resume',
        'resume': 'pause'
    }
    event.target.innerText = labels[event.target.innerText] //switch the label of the button

    // Declare buttons and elements to disable
    //const counterIncrease = setInterval(counterIncrement, 1000);
    const minus = document.querySelector('#minus');
    const plus = document.querySelector('#plus');
    const heart = document.querySelector('#heart');

    // Disable all other buttons and pause counter if you click the pause button
    if (event.target.innerText === 'resume'){
        minus.disabled = true
        plus.disabled = true
        heart.disabled = true
        clearInterval(timer)
    } else {
        minus.disabled = false
        plus.disabled = false
        heart.disabled = false
    }
}

// Create a post comment function
function postComment(event) {
    // Prevent page from reloading on submitting the form
    event.preventDefault();

    // Grab the comment left on the page
    const comment = event.target["comment-input"].value;
    
    // I want to append the comment as a paragraph under the comments section
    
    // Create a p tag and add the comment as its text content
    const p = document.createElement('p');
    p.textContent = comment;

    // Grab the comments section from DOM and append the comment (p tag) as its child
    const commentsDiv = document.querySelector('.comments');
    commentsDiv.appendChild(p);

    // Reset the form
    event.target.reset();
}