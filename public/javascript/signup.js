async function signupFormHandler(event) {
    event.preventDefault();

    const band_name = document.querySelector('#bandname-signup').value.trim();
    const band_website = document.querySelector('#website-signup').value.trim();
    const genre_name = document.querySelector('#genre-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/bands/', {
            method: 'post',
            body: JSON.stringify({
                band_name,
                band_website,
                genre_name,
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}


document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);