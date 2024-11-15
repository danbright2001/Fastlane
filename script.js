


// The menu Navigation
const navMenu = document.querySelector(".nav__menu");
const navOpenbtn = document.querySelector(".nav__open-toggle");
const navClosebtn = document.querySelector(".nav__close-toggle");

const openNavHandler = () => {
    navMenu.style.display = 'flex';
    navOpenbtn.style.display = 'none';
    navClosebtn.style.display = 'inline-block';
}
const closeNavHandler = () => {
    navMenu.style.display = 'none';
    navOpenbtn.style.display = 'inline-block';
    navClosebtn.style.display = 'none';
}
navOpenbtn.addEventListener('click', openNavHandler);
navClosebtn.addEventListener('click', closeNavHandler);

// close nav menu onclick of nav link icon
const navItems = navMenu.querySelectorAll('a');
if(window.innerWidth < 1024) {
    navItems.forEach(item => {
        item.addEventListener('click', closeNavHandler);
    })
}


// Close nav menu when clicking outside of it
document.addEventListener('click', (event) => {
    // Check if the nav menu is open and the click was outside the nav menu and buttons
    if (navMenu.style.display === 'flex' && !navMenu.contains(event.target) && !navOpenbtn.contains(event.target)) {
        closeNavHandler();
    }
});

// Close nav menu on scroll
window.addEventListener('scroll', () => {
    if (navMenu.style.display === 'flex') {
        closeNavHandler();
    }
});




const faqs = document.querySelectorAll('.faqs');
faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        // Close all other FAQ answers
        faqs.forEach((otherFaq) => {
            if (otherFaq !== faq) {
                const otherAnswer = otherFaq.querySelector('.faqs__answers');
                const otherIcon = otherFaq.querySelector('i');
                otherAnswer.style.display = 'none'; // Close other answers
                otherIcon.classList.remove('fa-caret-up');
                otherIcon.classList.add('fa-caret-down');
            }
        });

        // Toggle the visibility of the clicked FAQ's answer
        const answer = faq.querySelector('.faqs__answers');
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

        // Toggle the caret icon (rotate it up or down) for the clicked FAQ
        const icon = faq.querySelector('i');
        icon.classList.toggle('fa-caret-up');
        icon.classList.toggle('fa-caret-down');
    });
});

