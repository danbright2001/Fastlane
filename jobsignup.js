import { form, input__element} from './shared.js';

// Parse the jobTitle and jobDescription from the URL query string
const params = new URLSearchParams(window.location.search);
const jobTitle = params.get("jobTitle");
const jobDescription = params.get("jobDescription");

// Import the jobs array
import { jobs } from '../data/jobs.js';

// Find the job in the jobs array (optional validation)
const jobj = jobs.find(jobj => jobj.jobTitle === jobTitle && jobj.jobDescription === jobDescription);

// Select the container to display job details
const jobSignupContainer = document.querySelector('.services');

// Display the job details if found
if (jobj) {
  jobSignupContainer.innerHTML = `
    <div class="service">
        <div class="service__title">
            <img src="${jobj.jobIcon}" alt="">
            <h3>${jobj.jobTitle}</h3>
        </div>
        <div class="service__title">
            <p>${jobj.jobDescription}</p>
        </div>

        <form class="form__element" action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="e5e5453d-4239-433b-92c9-cfcb7f7cce95">
        <label class="label__element" for="email">Email:</label>
        <input class="input__element" type="email" id="email" name="jemail" placeholder="Enter your email" required>

        <label class="label__element" for="phone">Phone Number:</label>
        <input class="input__element" type="tel" id="phone" name="jphone" placeholder="Enter your phone number" required>

        <label class="label__element" for="whatsapp">WhatsApp Number:</label>
        <input class="input__element" type="tel" id="whatsapp" name="jwhatsapp" placeholder="Enter your WhatsApp number" required>

        <button class="submit-btn" type="submit">Submit</button>
      </form>

        
    </div>

  `;
} else {
  // Display an error message if no matching job is found
  jobSignupContainer.textContent = "Job details not found or invalid.";
}

