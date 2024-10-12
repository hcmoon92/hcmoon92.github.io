// Simulated user data (for demonstration purposes)
const validUsers = [
    { username: 'user1', password: 'password1' },
    { username: 'admin', password: 'admin123' }
];

// Select DOM elements
const loginSection = document.getElementById('login-section');
const dashboardSection = document.getElementById('dashboard-section');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const userNameSpan = document.getElementById('user-name');
const logoutBtn = document.getElementById('logout-btn');

// Function to check if user is logged in
function checkLoginStatus() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        showDashboard(loggedInUser);
    } else {
        showLogin();
    }
}

// Function to show login section
function showLogin() {
    loginSection.classList.remove('hidden');
    dashboardSection.classList.add('hidden');
}

// Function to show dashboard section
function showDashboard(username) {
    loginSection.classList.add('hidden');
    dashboardSection.classList.remove('hidden');
    userNameSpan.textContent = username;
}

// Handle login form submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate user credentials
    const user = validUsers.find(user => user.username === username && user.password === password);

    if (user) {
        // Save user to localStorage
        localStorage.setItem('loggedInUser', user.username);
        // Show dashboard
        showDashboard(user.username);
    } else {
        // Show error message
        loginError.textContent = 'Invalid username or password.';
    }
});

// Handle logout
logoutBtn.addEventListener('click', function() {
    // Remove user from localStorage
    localStorage.removeItem('loggedInUser');
    // Show login
    showLogin();
});

// Check login status on page load
window.onload = checkLoginStatus;
