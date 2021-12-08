async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
        console.log (email, password)
    }
}



document.querySelector('.login-form').addEventListener('submit', loginFormHandler);