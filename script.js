const turn = document.querySelector(".turn");
const img = document.querySelector(".acc");
const aboutMeBtn = document.querySelector(".about");
const workExperienceBtn = document.querySelector(".work");
const skillsBtn = document.querySelector(".skills");
const contactBtn = document.querySelector(".contact");
const nav = document.querySelector(".nav");
const skillSet = document.querySelector(".skillSet");
const aboutMe = document.querySelector(".aboutMe");
const workExp = document.querySelector(".workExp");
const contactTo = document.querySelector(".contactTo");
const info = document.querySelector(".info");
const Surename = document.querySelector(".name");
const birth = document.querySelector(".birth");
const addres = document.querySelector(".addres");

const turnTheLight = () => {
  img.classList.toggle("effect");
  Surename.classList.toggle("show");
  birth.classList.toggle("show");
  addres.classList.toggle("show");
  if (img.classList.contains("effect")) {
    Surename.classList.add("show");
    birth.classList.add("show");
    addres.classList.add("show");
  }
  if (img.classList.contains("effect")) {
    turn.classList.add("infoEffect");
  } else {
    turn.classList.remove("infoEffect");
  }
};

const btnShow = () => {
  aboutMeBtn.classList.toggle("show");
  workExperienceBtn.classList.toggle("show");
  skillsBtn.classList.toggle("show");
  contactBtn.classList.toggle("show");
};

const turnAboutMe = () => {
  aboutMe.classList.toggle("show");
  if (aboutMe.classList.contains("show")) {
    turn.classList.add("disabled");
    turn.disabled = true;
  } else {
    turn.disabled = false;
    turn.classList.remove("disabled");
  }

  if (aboutMe.classList.contains("show")) {
    workExp.classList.remove("show");
    skillSet.classList.remove("show");
    contactTo.classList.remove("show");
    img.classList.remove("effect");
    aboutMeBtn.classList.add("infoEffect");
    workExperienceBtn.classList.remove("infoEffect");
    contactBtn.classList.remove("infoEffect");
    skillsBtn.classList.remove("infoEffect");
  } else {
    img.classList.add("effect");
    aboutMeBtn.classList.remove("infoEffect");
  }
};
const turnWork = () => {
  workExp.classList.toggle("show");
  if (workExp.classList.contains("show")) {
    turn.classList.add("disabled");
    turn.disabled = true;
  } else {
    turn.classList.remove("disabled");
    turn.disabled = false;
  }

  if (workExp.classList.contains("show")) {
    aboutMe.classList.remove("show");
    skillSet.classList.remove("show");
    contactTo.classList.remove("show");
    img.classList.remove("effect");
    workExperienceBtn.classList.add("infoEffect");
    aboutMeBtn.classList.remove("infoEffect");
    contactBtn.classList.remove("infoEffect");
    skillsBtn.classList.remove("infoEffect");
  } else {
    img.classList.add("effect");
    workExperienceBtn.classList.remove("infoEffect");
  }
};
const turnSkill = () => {
  skillSet.classList.toggle("show");
  if (skillSet.classList.contains("show")) {
    turn.classList.add("disabled");
    turn.disabled = true;
  } else {
    turn.classList.remove("disabled");
    turn.disabled = false;
  }
  if (skillSet.classList.contains("show")) {
    workExp.classList.remove("show");
    aboutMe.classList.remove("show");
    contactTo.classList.remove("show");
    img.classList.remove("effect");
    skillsBtn.classList.add("infoEffect");
    aboutMeBtn.classList.remove("infoEffect");
    workExperienceBtn.classList.remove("infoEffect");
    contactBtn.classList.remove("infoEffect");
  } else {
    turn.classList.remove("disabled");
    img.classList.add("effect");
    skillsBtn.classList.remove("infoEffect");
  }
};
const turnContact = () => {
  contactTo.classList.toggle("show");
  if (contactTo.classList.contains("show")) {
    turn.classList.add("disabled");
    turn.disabled = true;
  } else {
    turn.classList.remove("disabled");
    turn.disabled = false;
  }
  if (contactTo.classList.contains("show")) {
    workExp.classList.remove("show");
    skillSet.classList.remove("show");
    aboutMe.classList.remove("show");
    img.classList.remove("effect");
    contactBtn.classList.add("infoEffect");
    aboutMeBtn.classList.remove("infoEffect");
    workExperienceBtn.classList.remove("infoEffect");
    skillsBtn.classList.remove("infoEffect");
  } else {
    img.classList.add("effect");
    contactBtn.classList.remove("infoEffect");
  }
};

turn.addEventListener("click", turnTheLight);
turn.addEventListener("click", btnShow);
aboutMeBtn.addEventListener("click", turnAboutMe);
workExperienceBtn.addEventListener("click", turnWork);
skillsBtn.addEventListener("click", turnSkill);
contactBtn.addEventListener("click", turnContact);
