// Select DOM Elements
const postForm = document.getElementById('post-form');
const postTitleInput = document.getElementById('post-title');
const postContentInput = document.getElementById('post-content');
const postsContainer = document.getElementById('posts-container');

// Initialize Posts Array
let posts = [];

// Load Posts from Local Storage on Page Load
window.addEventListener('DOMContentLoaded', () => {
    const storedPosts = localStorage.getItem('blogPosts');
    if (storedPosts) {
        posts = JSON.parse(storedPosts);
        renderPosts();
    }
});

// Handle Form Submission to Add New Post
postForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = postTitleInput.value.trim();
    const content = postContentInput.value.trim();

    if (title === '' || content === '') {
        alert('Please enter both title and content.');
        return;
    }

    const newPost = {
        id: Date.now(),
        title,
        content
    };

    posts.unshift(newPost); // Add to the beginning of the array
    savePosts();
    renderPosts();
    postForm.reset();
});

// Function to Save Posts to Local Storage
function savePosts() {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
}

// Function to Render Posts to the DOM
function renderPosts() {
    postsContainer.innerHTML = '';

    if (posts.length === 0) {
        postsContainer.innerHTML = '<p>No posts yet. Be the first to add one!</p>';
        return;
    }

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
            <h3>${sanitizeHTML(post.title)}</h3>
            <p>${sanitizeHTML(post.content)}</p>
            <button class="delete-btn" data-id="${post.id}">Delete</button>
        `;

        postsContainer.appendChild(postElement);
    });
}

// Handle Delete Post
postsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const postId = Number(e.target.getAttribute('data-id'));
        deletePost(postId);
    }
});

// Function to Delete a Post
function deletePost(id) {
    const confirmDelete = confirm('Are you sure you want to delete this post?');
    if (!confirmDelete) return;

    posts = posts.filter(post => post.id !== id);
    savePosts();
    renderPosts();
}

// Function to Sanitize User Input to Prevent XSS
function sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}
