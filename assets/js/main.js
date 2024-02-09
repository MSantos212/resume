const acordeonTriggers = document.querySelectorAll(".acordeon .trigger");

acordeonTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    const acordeon = trigger.parentElement;
    const isOpen = acordeon.classList.contains("open");

    if (isOpen) {
      acordeon.classList.remove("open");
    } else {
      acordeon.classList.add("open");
    }
  });
});

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updateLanguages(profileData);
  updateEducation(profileData);
  updatePortfolio(profileData);
  updateProfessionalExperience(profileData);
})();

function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile.photo");
  photo.src = profileData.photo;
  photo.alt = profileData.name;

  const name = document.getElementById("profile.name");
  name.innerText = profileData.name;

  const job = document.getElementById("profile.job");
  job.innerText = profileData.job;

  const location = document.getElementById("profile.location");
  location.innerText = profileData.location;

  const phone = document.getElementById("profile.phone");
  phone.innerText = profileData.phone;
  phone.href = `https://wa.me/55${profileData.phone}?text=Ol%C3%A1%2C+vi+seu+curr%C3%ADculo+online+e+gostaria+de+te+conhecer`;
  const email = document.getElementById("profile.email");
  email.innerText = profileData.email;
  email.href = `mailto:${profileData.email}`;

  const linkedin = document.getElementById("profile.linkedin");
  linkedin.innerText = profileData.linkedin;
  linkedin.href = `https://www.linkedin.com/in/${profileData.linkedin}`;
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("profile.skills.softSkills");
  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById("profile.skills.hardSkills");
  hardSkills.innerHTML = profileData.skills.hardSkills
    .map(
      (skill) => `<li>
                  <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}" />
                </li>`
    )
    .join("");
}

function updateLanguages(profileData) {
  const languages = document.getElementById("profile.languages");
  languages.innerHTML = profileData.languages
    .map((language) => `<li>${language}</li>`)
    .join("");
}

function updateEducation(profileData) {
  const education = document.getElementById("profile.education");
  education.innerHTML = profileData.education
    .map((education) => `<li>${education}</li>`)
    .join("");
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById("profile.portfolio");
  portfolio.innerHTML = profileData.portfolio
    .map((project) => {
      return `<li>
              <h3 class="subtitle ${project.github ? 'class="github"' : ""}">${
        project.name
      }</h3>
              <a
                class="link"
                href="${project.url}"
                target="_blank"
                >${project.url}</a
              >
            </li>`;
    })
    .join("");
}

function updateProfessionalExperience(profileData) {
  const professionalExperience = document.getElementById(
    "profile.professionalExperience"
  );

  professionalExperience.innerHTML = profileData.professionalExperience
    .map((experience) => {
      return `
    <li>
              <h3 class="subtitle">${experience.name}</h3>
              <p class="period">${experience.period}</p>
              <p>
                ${experience.description}
              </p>
            </li>`;
    })
    .join("");
}
