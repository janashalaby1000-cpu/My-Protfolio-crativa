
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');


contactForm.addEventListener('submit', function(event) {

    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || subject === '' || message === '') {
        formMessage.style.color = '#ffb3b3'; 
        formMessage.textContent = 'Please fill out all fields before sending.';
    } else {
        formMessage.style.color = '#b8f5c0'; 
        formMessage.textContent = 'Message sent successfully!';

        contactForm.reset();

        setTimeout(() => {
            formMessage.textContent = '';
        }, 5000);
    }
});