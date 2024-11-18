var _a, _b, _c, _d, _e, _f;
// Function to update the profile section based on form input
function updateProfileSection(inputId, profileElementId, label) {
    var inputElement = document.getElementById(inputId);
    var profileElement = document.getElementById(profileElementId);
    if (inputElement.value && profileElement) {
        // Format the output, if a label is provided
        profileElement.textContent = label ? "".concat(label, ": ").concat(inputElement.value) : inputElement.value;
        inputElement.value = ''; // Clear the input after updating
    }
}
// Function to add the Name
function addName() {
    var nameInput = document.getElementById('name');
    if (nameInput.value) {
        var profileName = document.getElementById('profile-name');
        if (profileName) {
            profileName.innerHTML = "<strong>".concat(nameInput.value, "</strong> <br/> <span>Web Developer</span>"); // Updating as per your format
        }
        nameInput.value = ''; // Clear input
    }
}
// Function to add Email
function addEmail() {
    var emailInput = document.getElementById('email-input');
    if (emailInput && emailInput.value) {
        var resumeEmail = document.getElementById('resume-email'); // Targeting resume section
        if (resumeEmail) {
            resumeEmail.textContent = emailInput.value; // Updating the resume display
        }
        emailInput.value = ''; // Clear input
    }
}
// Function to add Phone
function addPhone() {
    var phoneInput = document.getElementById('phone-input');
    if (phoneInput && phoneInput.value) {
        var resumePhone = document.getElementById('resume-phone'); // Targeting resume section
        if (resumePhone) {
            resumePhone.textContent = phoneInput.value; // Updating the resume display
        }
        phoneInput.value = ''; // Clear input
    }
}
// Function to add LinkedIn URL
function addLinkedIn() {
    var linkedInInput = document.getElementById('linkedin-input');
    if (linkedInInput && linkedInInput.value) {
        var resumeLinkedIn = document.getElementById('resume-linkedin'); // Targeting resume section
        if (resumeLinkedIn) {
            resumeLinkedIn.textContent = linkedInInput.value; // Updating the resume display
        }
        linkedInInput.value = ''; // Clear input
    }
}
// Function to add GitHub URL
function addGitHub() {
    var githubInput = document.getElementById('github-input');
    if (githubInput && githubInput.value) {
        var resumeGitHub = document.getElementById('resume-github'); // Targeting resume section
        if (resumeGitHub) {
            resumeGitHub.textContent = githubInput.value; // Updating the resume display
        }
        githubInput.value = ''; // Clear input
    }
}
// Function to add About Me
function addAbout() {
    var aboutInput = document.getElementById('about');
    if (aboutInput.value) {
        var profileDescription = document.getElementById('profile-description');
        if (profileDescription) {
            profileDescription.textContent = aboutInput.value; // Updating profile description
        }
        aboutInput.value = ''; // Clear input
    }
}
// Function to add Education dynamically
function addEducation() {
    var degree = document.getElementById('degree');
    var institution = document.getElementById('institution');
    var year = document.getElementById('year');
    if (degree.value && institution.value && year.value) {
        var educationContainer = document.getElementById('education-container');
        var newEducation = document.createElement('div');
        newEducation.innerHTML = "<div><strong>".concat(degree.value, "</strong> at ").concat(institution.value, " (").concat(year.value, ")</div>");
        educationContainer === null || educationContainer === void 0 ? void 0 : educationContainer.appendChild(newEducation);
        // Clear the form fields
        degree.value = '';
        institution.value = '';
        year.value = '';
    }
}
(_b = (_a = document.getElementById('education-form')) === null || _a === void 0 ? void 0 : _a.querySelector('button')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', addEducation);
// Function to add Experience
function addExperience() {
    var jobTitle = document.getElementById('job-title');
    var company = document.getElementById('company');
    var experienceYear = document.getElementById('experience-year');
    if (jobTitle.value && company.value && experienceYear.value) {
        var experienceContainer = document.getElementById('experience-container');
        var newExperience = document.createElement('div');
        newExperience.innerHTML = "<div><strong>".concat(jobTitle.value, "</strong> at ").concat(company.value, " (").concat(experienceYear.value, ")</div>");
        experienceContainer === null || experienceContainer === void 0 ? void 0 : experienceContainer.appendChild(newExperience);
        // Clear the form fields
        jobTitle.value = '';
        company.value = '';
        experienceYear.value = '';
    }
}
// Function to add Skills
function addSkill() {
    var skillsInput = document.getElementById('skills-input');
    if (skillsInput.value) {
        var skillsContainer = document.getElementById('skills-container');
        var newSkill = document.createElement('div');
        newSkill.innerHTML = "<div>".concat(skillsInput.value, "</div>");
        skillsContainer === null || skillsContainer === void 0 ? void 0 : skillsContainer.appendChild(newSkill);
        // Clear the form field
        skillsInput.value = '';
    }
}
// Function to add Interests dynamically
function addInterest() {
    var interestsInput = document.getElementById('interests-input');
    if (interestsInput.value) {
        var interestsContainer = document.getElementById('interests');
        var newInterest = document.createElement('li');
        newInterest.textContent = interestsInput.value;
        interestsContainer === null || interestsContainer === void 0 ? void 0 : interestsContainer.appendChild(newInterest);
        // Clear the form field
        interestsInput.value = '';
    }
}
(_e = (_d = (_c = document.getElementById('interests')) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.querySelector('button')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', addInterest);
// Profile Image Upload Handling
var profileImgUpload = document.getElementById('profile-img-upload');
var profileImg = document.getElementById('profile-img');
profileImgUpload.addEventListener('change', function (event) {
    var _a;
    var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profileImg.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(file);
    }
});
var generatedPdfUrl = '';
function downloadPDF() {
    var element = document.querySelector('.container');
    if (!element) {
        alert('Content to be converted to PDF is not found!');
        return;
    }
    var options = {
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(options).from(element).save().then(function () {
        // Clear the shareable link input before generating a new link
        shareableLinkInput.value = ''; // Clear the input field before pasting the new link
        generateUniqueUrl();
    });
}
(_f = document.getElementById('download-pdf-button')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', function () {
    downloadPDF();
});
// Generate and share link
var shareableLinkInput = document.getElementById('shareable-link');
var shareLinkButton = document.getElementById('share-link-button');
function generateUniqueUrl() {
    var uniqueId = "".concat(Date.now(), "-").concat(Math.floor(Math.random() * 10000));
    var pdfUrl = "".concat(window.location.origin, "/resume-").concat(uniqueId, ".pdf");
    // Set the generated PDF URL into the input field
    generatedPdfUrl = pdfUrl; // Store the generated URL
    shareableLinkInput.value = pdfUrl; // Set the shareable link into the input field
}
function shareLink() {
    if (navigator.share) {
        navigator.share({
            title: 'My Resume',
            url: shareableLinkInput.value
        })
            .then(function () { return alert('Link shared successfully!'); })
            .catch(function (error) { return alert('Error sharing the link: ' + error); });
    }
    else {
        alert('Sharing is not supported in this browser. You can copy the link instead.');
    }
}
shareLinkButton === null || shareLinkButton === void 0 ? void 0 : shareLinkButton.addEventListener('click', shareLink);
