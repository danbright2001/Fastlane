class MyHead extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <head>
                <meta name="google-site-verification" content="8bWw4f_ilpzg5W3ZC4PE18dqZD-YaRqP68zmaokIPeY" />

                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                

                    <!-- Meta Description -->
                <meta name="description" content="NileUp connects you to flexible online jobs in transcription, online Surveys, content writing, data entry, social media engagement, and more. Start earning today!">

                <!-- Meta Keywords -->
                <meta name="keywords" content="online jobs, online surveys, remote work, flexible jobs, transcription, content writing, surveys, data entry, social media, earn money online">

                <!-- Meta Author -->
                <meta name="author" content="NileUp Team">

                <title>NileUp</title>


                <!--Fontawesome-->
                <script type="module" src="https://kit.fontawesome.com/5a5ffd6d29.js" crossorigin="anonymous"></script>
                
                <link rel="icon" href="images/best_of_logo.png" type="image/png">

                
                
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">

                

                <!-- swiper js -->
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
                

                <link rel="stylesheet" href="style.css">
                <link rel="stylesheet" href="jobsignup.css">
                <link rel="stylesheet" href="getstarted.css">
                

                
            </head>
        `
    };
};

customElements.define('my-head', MyHead);


class MyNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav>
                <div class="container nav__container">
                <a href="index.html" class="logo__holder">
                    <img class="logo__image" src="images/nu_logo.png" alt="">
                    
                </a>
                <ul class="nav__menu">
                    <li><a href="index.html#about">About</a></li>
                    <li><a href="index.html#services">Jobs</a></li>
                    <li><a href="index.html#resources">Resources</a></li>
                    <li><a href="index.html#testimonials">Testimonials</a></li>
                    <li><a href="index.html#faqs">FAQs</a></li>
                    <li><a href="index.html#contact">Contact Us</a></li>
                </ul>
                
                <button class="nav__btns nav__open-toggle"><i class="fa-solid fa-bars"></i></button>
                <button class="nav__btns nav__close-toggle"><i class="fa-solid fa-xmark"></i></button>
                
                </div>
            </nav>
        `
    };
};

customElements.define('my-nav', MyNav);


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="footer__container container">
                    <div class="footer__1">
                        <div class="logo__holder">
                            <img class="logo__image" src="images/best_of_logo.png" alt="">
                            <p class="logo__text">NileUp</p>
                        </div>

                        <p>Kickstart your career! Subscribe with your email for exclusive entry-level job updates.</p>

                            
                        <div class="subscribe_input">
                            <input type="email" placeholder="Enter Your Email" required>
                            <button type="submit"><i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    
                    </div>
                    <div class="footer__2">
                        <h3>Company</h3>
                        <ul class="footer__menu">
                            <li><a href="index.html#about">About</a></li>
                            <li><a href="index.html#services">jobs</a></li>
                            <li><a href="index.html#resources">Resources</a></li>
                            <li><a href="index.html#faqs">FAQ</a></li>
                            <li><a href="index.html#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer__3">
                        <h3>Resources</h3>
                        <ul class="footer__menu">
                            <li><a href="index.html#resources">Blog</a></li>
                            <li><a href="#about">Career Guide</a></li>
                            <li><a href="index.html#contact">Customer Support</a></li>
                            <li><a class="btn" href="getstarted.html">Freelancer</a></li>
                        </ul>
                    </div>
                    <div class="footer__4">
                        <h3>Help & Connect</h3>
                        <ul class="footer__menu">
                            <li><a href="mailto:netchucker254@gmail.com">netchucker254@gmail.com</a></li>
                            <li><a href="tel:+254 751305530">+254 751305530</a></li>
                        </ul>
                        <ul class="footer__socials">
                            <li><a target="_blank" href="https://t.me/jobHatch"><i class="fa-brands fa-telegram"></i></a></li>
                            <li><a target="_blank" href="https://www.facebook.com/SitzsFleisch"><i class="fa-brands fa-facebook"></i></a></li>
                            <li><a target="_blank" href="mailto:netchucker254@gmail.com"><i class="fa-regular fa-envelope"></i></a></li>
                            <li><a target="_blank" href="https://www.instagram.com/insane_dantel_mad/"><i class="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="copyright__container">
                    <p>NileUp &copy; All Rights Reserved 2024</p>
                </div>
            </footer>
        `
    };
};

customElements.define('my-footer', MyFooter);