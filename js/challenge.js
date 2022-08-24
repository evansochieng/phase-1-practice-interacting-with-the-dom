// Interact with the simple liking application

document.addEventListener('DOMContentLoaded', () => {
    // Listen to the minus button
    const minus = document.querySelector('#minus')
    minus.addEventListener('click', decrementCounter)

    // Grab the form and listen to the form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', postComment);
})

// Decrement the counter value
function decrementCounter() {
    // Grab the counter
    const counter = document.querySelector('#counter')
    // Decrement the value by 1
    counter.textContent -= 1
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