document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;


    var correctUsername = 'admin';
    var correctPassword = '001';

    if (username === correctUsername && password === correctPassword) {
        localStorage.setItem('loggedIn', 'true');
        console.log("Login successful. Redirecting to index.html...");
        window.location.href = '../App/index.html';
    } 
    else {
        document.getElementById('error-message').style.display = 'block';
        console.log("Invalid username or password");
    }
});
