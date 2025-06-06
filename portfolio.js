//^ Splash
const splash = document.querySelector(".splash");
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    splash.style.display = "none";
  }, 3000);
});

//^ Link Tree Display
const link_box = document.querySelector(".link-box");
const link_tree = document.querySelector(".link-tree");
const exit = document.querySelector(".exit");
const resume = document.querySelector(".resume");
link_tree.addEventListener("click", () => {
  link_box.style.display = "flex";
});
exit.addEventListener("click", () => {
  link_box.style.display = "none";
});
//^ Link Tree Contacts
const emailLinkDiv = document.querySelector("#link-tree-email");
const phoneLinkDiv = document.querySelector("#link-tree-phone");
const linkedinLinkDiv = document.querySelector("#link-tree-linkedin");

//^ Email Link Tree
emailLinkDiv.addEventListener("click", function () {
  window.open(
    "https://mail.google.com/mail/?view=cm&fs=1&to=bhavikavgiyanani@gmail.com&"
  );
});

//^ Phone Link Tree
if (window.innerWidth < 769) {
  phoneLinkDiv.addEventListener("click", function () {
    window.location.href = "tel:+919723130460";
  });
} else {
  tippy("#link-tree-phone", {
    content: "Please Dial +91 9723130460 on phone",
    placement: "top",
  });
  phoneLinkDiv.addEventListener("click", function () {
    alert("Please dial this number on phone: +91 9723130460");
  });
}

//^ LinkedIn Link Tree
linkedinLinkDiv.addEventListener("click", function () {
  window.open("https://www.linkedin.com/in/bhavika-giyanani", "_blank");
});

//^ Contact Page5 (footer)
const emailDiv = document.querySelector("#email");

const phoneDiv = document.querySelector("#phone");

if (window.innerWidth < 769) {
  phoneDiv.addEventListener("click", function () {
    window.location.href = "tel:+919723130460";
  });
} else {
  tippy("#phone", {
    content: "Please Dial +91 9723130460 on phone",
    placement: "top",
  });
  phoneDiv.addEventListener("click", function () {
    alert("Please dial this number on phone: +91 9723130460");
  });
}

const linkedinDiv = document.querySelector("#linkedIn");

linkedinDiv.addEventListener("click", function () {
  window.open("https://www.linkedin.com/in/bhavika-giyanani", "_blank");
});

resume.addEventListener("click", () => {
  window.open(
    "https://drive.google.com/file/d/1JRUPfM70-2keMyLSKjd6ByxP5bB0RL8W/view?usp=sharing",
    "_blank"
  );
});

//^ Page4 Skills

const skill_items = document.querySelectorAll(".page4 .skill-item");
skill_items.forEach((skill_item) => {
  const skill_item_p = skill_item.querySelector("p");
  skill_item.addEventListener("mouseover", () => {
    skill_item_p.style.opacity = "1";
    skill_item_p.style.display = "block";
  });
  skill_item.addEventListener("mouseleave", () => {
    skill_item_p.style.display = "none";
  });
});

const skillColorMap = {
  html: "#E44D26",
  css: "#1572B6",
  javascript: "#F0DB4F",
  jquery: "#0868AC",
  sass: "#CB6699",
  tailwind: "#38BDF8",
  mongodb: "#439934",
  oracle: "red",
  python: "#FFDF59",
  illustrator: "#FF9A00",
  vite: "#646CFF",
  github: "#181717",
  json: "#ffffff",
  git: "#F34F29",
  github: "#ffffff",
  postman: "#F37036",
  java: "#0074BD",
  bash: "#4EAA25",
  bootstrap: "#8812FC",
  photoshop: "#31A8FF",
  express: "#f0f0f0",
  react: "#61DAFB",
  c: "#03599C",
  cpp: "#659AD2",
  node: "#83CD29",
};

function applyGlowEffect(skillItem, skillName) {
  const color = skillColorMap[skillName] || "#ffffff";

  skillItem.addEventListener("mouseover", () => {
    skillItem.style.transition = "box-shadow 1s ease-in-out";
    skillItem.style.boxShadow = `0 0 50px ${color}`;
  });

  skillItem.addEventListener("mouseleave", () => {
    skillItem.style.transition = "box-shadow 6s ease-in-out";
    skillItem.style.boxShadow = "none";
  });
}

document.querySelectorAll(".skill-item svg").forEach((svg) => {
  const skillItem = svg.parentElement;
  const skillName = skillItem.classList[1];
  applyGlowEffect(skillItem, skillName);
});

//^ Tippy JS

tippy(".git-link", {
  content: "View Source Code",
  placement: "top",
  arrow: true,
  animation: "fade",
});
tippy(".demo-link", {
  content: "View Demo",
  placement: "top",
  arrow: true,
  animation: "fade",
});
tippy(".live-link", {
  content: "View Live",
  placement: "top",
  arrow: true,
  animation: "fade",
});
if (window.innerWidth < 768) {
  tippy("#link-tree-email", {
    content: "bhavikavgiyanani@gmail.com",
    placement: "top",
    arrow: true,
    animation: "fade",
  });
  tippy("#email", {
    content: "bhavikavgiyanani@gmail.com",
    placement: "top",
    arrow: true,
    animation: "fade",
  });
  emailDiv.addEventListener("click", () => {
    window.location.href = "mailto:bhavikavgiyanani@gmail.com";
  });
} else {
  emailDiv.addEventListener("click", function () {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=bhavikavgiyanani@gmail.com&",
      "_blank"
    );
  });
}
