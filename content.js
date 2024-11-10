// content.js

// Function to get URL parameter
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Content data
const contentData = {
    1: `
        <div class="service__title">
            <img src="https://framerusercontent.com/images/qA0uC358aXdWAfo2I4Op5FbtnoY.svg" alt="">
            <h3>COPYWRITING</h3>
        </div>
        <p>Copywriting is the art of creating engaging text that persuades readers to take action, such as making a purchase or subscribing to a service.</p><br>

        <p class="t__coo">Login/Sign up and start doing copywriting tasks to get paid today!</p>
        <br>
    `
    ,
    
    2: `
        <div class="service__title">
            <img src="https://framerusercontent.com/images/3zej97IIW4iboGwUh4ah7MlRzBw.svg" alt="">
            <h3>TRANSCRIPTION</h3>
        </div>
        <p>Transcription involves listening to audio or video recordings and converting them into written text.</p><br>

        <p class="t__coo">Sign up and start doing Transcription tasks to get paid today!</p>
        <br>
    `
    ,

    3:`
        <div class="service__title">
            <img src="https://framerusercontent.com/images/iMoSMCXp3TxaY7IKLuU1aJlf3k.svg" alt="">
            <h3>SOCIAL MEDIA</h3>
        </div>

        <p>Social media management involves creating, scheduling, and analyzing content posted on social media platforms to engage with and grow an audience.</p>

        <p class="t__coo">Login/Sign up and start doing Managing Social Media tasks to get paid today!</p>
        <br>
    `
    ,

    4:`
        <div class="service__title">
            <img src="https://framerusercontent.com/images/iMoSMCXp3TxaY7IKLuU1aJlf3k.svg" alt="">
            <h3>CRYPTO TRADING</h3>
        </div>

        <p>
            Crypto trading is the practice of buying and selling digital currencies to make a profit.
        </p>

        <p class="t__coo">Login/Sign up and start Trading tasks to get paid today!</p>
        <br>
        
    `

};

// Get the specific content ID from the URL
const contentId = getUrlParameter('content');

// Display content based on URL parameter
const contentDiv = document.getElementById('content');
contentDiv.innerHTML = `
    <p>${contentData[contentId] || "Content not found."}</p>
    <form id="signup">
        <label for="username">Username:</label>
        <input type="text" id="username" placeholder="Enter Your Email" name="username" required>
        <label for="password">Password:</label>
        <input type="password" id="password" placeholder="Enter Your Password" name="password" required>
        <a href="">Forgotten/Reset Password</a>
        <button class="submit-btn" type="submit">Log In</button>
    </form>
`;

// Prevent form submission
document.getElementById('signup').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents page reload
    alert("Form submitted!"); // This message simulates form submission for testing


    // Clear the input fields after submission
    event.target.reset();
});
