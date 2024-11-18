

// Function to update the profile section based on form input
function updateProfileSection(inputId: string, profileElementId: string, label?: string) {
  const inputElement = document.getElementById(inputId) as HTMLInputElement;
  const profileElement = document.getElementById(profileElementId);

  if (inputElement.value && profileElement) {
    // Format the output, if a label is provided
    profileElement.textContent = label ? `${label}: ${inputElement.value}` : inputElement.value;
    inputElement.value = ''; // Clear the input after updating
  }
}
// Function to add the Name
function addName() {
  const nameInput = document.getElementById('name') as HTMLInputElement;
  if (nameInput.value) {
    const profileName = document.getElementById('profile-name');
    if (profileName) {
      profileName.innerHTML = `<strong>${nameInput.value}</strong> <br/> <span>Web Developer</span>`; // Updating as per your format
    }
    nameInput.value = ''; // Clear input
  }
}

// Function to add Email
function addEmail() {
  const emailInput = document.getElementById('email-input') as HTMLInputElement;
  if (emailInput && emailInput.value) {
    const resumeEmail = document.getElementById('resume-email'); // Targeting resume section
    if (resumeEmail) {
      resumeEmail.textContent = emailInput.value; // Updating the resume display
    }
    emailInput.value = ''; // Clear input
  }
}

// Function to add Phone
function addPhone() {
  const phoneInput = document.getElementById('phone-input') as HTMLInputElement;
  if (phoneInput && phoneInput.value) {
    const resumePhone = document.getElementById('resume-phone'); // Targeting resume section
    if (resumePhone) {
      resumePhone.textContent = phoneInput.value; // Updating the resume display
    }
    phoneInput.value = ''; // Clear input
  }
}

// Function to add LinkedIn URL
function addLinkedIn() {
  const linkedInInput = document.getElementById('linkedin-input') as HTMLInputElement;
  if (linkedInInput && linkedInInput.value) {
    const resumeLinkedIn = document.getElementById('resume-linkedin'); // Targeting resume section
    if (resumeLinkedIn) {
      resumeLinkedIn.textContent = linkedInInput.value; // Updating the resume display
    }
    linkedInInput.value = ''; // Clear input
  }
}

// Function to add GitHub URL
function addGitHub() {
  const githubInput = document.getElementById('github-input') as HTMLInputElement;
  if (githubInput && githubInput.value) {
    const resumeGitHub = document.getElementById('resume-github'); // Targeting resume section
    if (resumeGitHub) {
      resumeGitHub.textContent = githubInput.value; // Updating the resume display
    }
    githubInput.value = ''; // Clear input
  }
}

// Function to add About Me
function addAbout() {
  const aboutInput = document.getElementById('about') as HTMLInputElement;
  if (aboutInput.value) {
    const profileDescription = document.getElementById('profile-description');
    if (profileDescription) {
      profileDescription.textContent = aboutInput.value; // Updating profile description
    }
    aboutInput.value = ''; // Clear input
  }
}

// Function to add Education dynamically
function addEducation() {
  const degree = document.getElementById('degree') as HTMLInputElement;
  const institution = document.getElementById('institution') as HTMLInputElement;
  const year = document.getElementById('year') as HTMLInputElement;

  if (degree.value && institution.value && year.value) {
    const educationContainer = document.getElementById('education-container');
    const newEducation = document.createElement('div');
    newEducation.innerHTML = `<div><strong>${degree.value}</strong> at ${institution.value} (${year.value})</div>`;
    educationContainer?.appendChild(newEducation);

    // Clear the form fields
    degree.value = '';
    institution.value = '';
    year.value = '';
  }
}

document.getElementById('education-form')?.querySelector('button')?.addEventListener('click', addEducation);

// Function to add Experience
function addExperience() {
  const jobTitle = document.getElementById('job-title') as HTMLInputElement;
  const company = document.getElementById('company') as HTMLInputElement;
  const experienceYear = document.getElementById('experience-year') as HTMLInputElement;

  if (jobTitle.value && company.value && experienceYear.value) {
    const experienceContainer = document.getElementById('experience-container');
    const newExperience = document.createElement('div');
    newExperience.innerHTML = `<div><strong>${jobTitle.value}</strong> at ${company.value} (${experienceYear.value})</div>`;
    experienceContainer?.appendChild(newExperience);

    // Clear the form fields
    jobTitle.value = '';
    company.value = '';
    experienceYear.value = '';
  }
}


// Function to add Skills
function addSkill() {
  const skillsInput = document.getElementById('skills-input') as HTMLInputElement;

  if (skillsInput.value) {
    const skillsContainer = document.getElementById('skills-container');
    const newSkill = document.createElement('div');
    newSkill.innerHTML = `<div>${skillsInput.value}</div>`;
    skillsContainer?.appendChild(newSkill);

    // Clear the form field
    skillsInput.value = '';
  }
}

// Function to add Interests dynamically
function addInterest() {
  const interestsInput = document.getElementById('interests-input') as HTMLInputElement;

  if (interestsInput.value) {
    const interestsContainer = document.getElementById('interests');
    const newInterest = document.createElement('li');
    newInterest.textContent = interestsInput.value;
    interestsContainer?.appendChild(newInterest);

    // Clear the form field
    interestsInput.value = '';
  }
}

document.getElementById('interests')?.parentElement?.querySelector('button')?.addEventListener('click', addInterest);

// Profile Image Upload Handling
const profileImgUpload = document.getElementById('profile-img-upload') as HTMLInputElement;
const profileImg = document.getElementById('profile-img') as HTMLImageElement;

profileImgUpload.addEventListener('change', (event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profileImg.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }
});

// Function to generate and download PDF
declare const html2pdf: any;
let generatedPdfUrl: string = '';

function downloadPDF() {
  const element = document.querySelector('.container');
  if (!element) {
    alert('Content to be converted to PDF is not found!');
    return;
  }

  const options = {
    margin: 0.5,
    filename: 'resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(options).from(element).save().then(() => {
    // Clear the shareable link input before generating a new link
    shareableLinkInput.value = ''; // Clear the input field before pasting the new link
    generateUniqueUrl();
  });
}

document.getElementById('download-pdf-button')?.addEventListener('click', () => {
  downloadPDF();
});

// Generate and share link
const shareableLinkInput = document.getElementById('shareable-link') as HTMLInputElement;
const shareLinkButton = document.getElementById('share-link-button');

function generateUniqueUrl() {
  const uniqueId = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  const pdfUrl = `${window.location.origin}/resume-${uniqueId}.pdf`;

  // Set the generated PDF URL into the input field
  generatedPdfUrl = pdfUrl; // Store the generated URL
  shareableLinkInput.value = pdfUrl;  // Set the shareable link into the input field
}

function shareLink() {
  if (navigator.share) {
    navigator.share({
      title: 'My Resume',
      url: shareableLinkInput.value
    })
    .then(() => alert('Link shared successfully!'))
    .catch((error) => alert('Error sharing the link: ' + error));
  } else {
    alert('Sharing is not supported in this browser. You can copy the link instead.');
  }
}

shareLinkButton?.addEventListener('click', shareLink);