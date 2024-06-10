document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Add your authentication logic here
    // For now, we will just assume the login is successful

    // Store user information in local storage or session (optional)
    sessionStorage.setItem('username', username);

    // Redirect to the personal page
    window.location.href = 'personal.html';
});


document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Registered with username ' + document.getElementById('username').value + '!');
});

document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const message = document.getElementById('message-input').value;
    const messagesDiv = document.getElementById('messages');
    const newMessage = document.createElement('div');
    newMessage.textContent = message;
    messagesDiv.appendChild(newMessage);
    document.getElementById('message-input').value = '';
});
