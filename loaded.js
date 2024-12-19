class MyNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav>
                <div class="container nav__container">
                <a href="index.html" class="logo__holder">
                    <img class="logo__image" src="images/NileUp_logo.png" alt="">
                    
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