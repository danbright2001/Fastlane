import { forDetails} from '../data/for.js';
import { testimonials} from '../data/testimonials.js';
import { jobs} from '../data/jobs.js';




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



let detailHtml  = '';

forDetails.forEach((detail) => {
    detailHtml += `
        <div class="framer_1">
            
            <div class="framer_2">
                <img src="images/${detail.icon}" alt="">
            </div>
            <div class="framer_3">
                <div class="framer_title">${detail.title}</div>
                <div class="framer_text">${detail.text}</div>
            </div>
            
        </div>
    `
})

document.querySelector('.framer_container').innerHTML = detailHtml;




let html = '';
jobs.forEach((job) => {
    html += `
        <div class="service">
            <div class="service__title">
                <img src="${job.jobIcon}" alt="">
                <h3>${job.jobTitle}</h3>
            </div>
            <div class="service__title">
                <p>${job.jobDescription}</p>
            </div>
                
            <div class="job__image">
                <img src="images/${job.jobImage}" alt="">
            </div>  
            <a class="job__btn nav__btn" href="jobsignup.html?jobTitle=${encodeURIComponent(job.jobTitle)}&jobDescription=${encodeURIComponent(job.jobDescription)}">Apply Now</a> 
        </div>
    `
});

document.querySelector('.services').innerHTML = html;


{/* <div class="service__btn">
                    <a class="service__btnn" href="content.html?content=4">Start Working</a>
                </div> */}


let testimonialHtml = '';
testimonials.forEach((testimoniali) => {
    testimonialHtml += `
        <div class="swiper-slide testimonial-item">
            <div class="info">
                <img src="images/freepik__an_icon_of_word_nileup.png" alt="">
                <div class="text-box">
                    <h3>${testimoniali.testimonial_name}</h3>
                    <span class="job">${testimoniali.testimonial_position}</span>
                </div>

            </div>
            <p>${testimoniali.testimonial}</p>
        </div>
    `
});

document.querySelector('.js-testimonial').innerHTML = testimonialHtml;


