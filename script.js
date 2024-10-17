document.addEventListener('DOMContentLoaded', function() {
    const introText = document.querySelector('.intro-text p');
    const hours = new Date().getHours();

    let greeting = "Welcome to my portfolio!";
    if (hours < 12) {
        greeting = "Good morning! " + greeting;
    } else if (hours < 18) {
        greeting = "Good afternoon! " + greeting;
    } else {
        greeting = "Good evening! " + greeting;
    }

    introText.textContent = greeting + " " + introText.textContent;
});
