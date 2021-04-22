secret_message = document.getElementById("secret-message");
secret_button = document.getElementById("secret-button");

const reveal = function() {
    secret_message.style.display = 'block';
    secret_button.style.display = 'none';
}

secret_button.addEventListener('click', reveal);