// Interact with the simple liking application

document.addEventListener('DOMContentLoaded', () => {
    // Grab the form
    const form = document.querySelector('form');

    // Listen to the form submission
    form.addEventListener('submit', postComment);
})

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