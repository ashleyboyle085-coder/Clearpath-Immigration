// SMOOTH SCROLL NAVIGATION

document.querySelectorAll("nav a").forEach(link => {
link.addEventListener("click", function(e) {

const targetId = this.getAttribute("href");

if(targetId.startsWith("#")){
e.preventDefault();

const section = document.querySelector(targetId);

if(section){
section.scrollIntoView({
behavior: "smooth"
});
}
}

});
});


// SCROLL ANIMATIONS (Fade In Sections)

const sections = document.querySelectorAll(".section");

const revealSection = () => {

const trigger = window.innerHeight * 0.85;

sections.forEach(section => {

const top = section.getBoundingClientRect().top;

if(top < trigger){
section.style.opacity = "1";
section.style.transform = "translateY(0)";
}

});

};

window.addEventListener("scroll", revealSection);

window.addEventListener("load", () => {

sections.forEach(section => {
section.style.opacity = "0";
section.style.transform = "translateY(40px)";
section.style.transition = "all 0.8s ease";
});

revealSection();

});


// FORM VALIDATION

const form = document.querySelector(".booking");

if(form){

form.addEventListener("submit", function(e){

const name = form.querySelector("input[type='text']").value.trim();
const email = form.querySelector("input[type='email']").value.trim();

if(name === "" || email === ""){

e.preventDefault();

alert("Please fill in your name and email before submitting.");

}

});

}


// STICKY CONSULTATION BUTTON

const consultButton = document.createElement("button");

consultButton.innerText = "Book Consultation";

consultButton.style.position = "fixed";
consultButton.style.right = "20px";
consultButton.style.bottom = "20px";
consultButton.style.padding = "14px 22px";
consultButton.style.background = "#ffcc00";
consultButton.style.border = "none";
consultButton.style.borderRadius = "6px";
consultButton.style.fontWeight = "600";
consultButton.style.cursor = "pointer";
consultButton.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
consultButton.style.zIndex = "999";

document.body.appendChild(consultButton);

consultButton.addEventListener("click", () => {

const booking = document.querySelector("#booking");

if(booking){
booking.scrollIntoView({
behavior:"smooth"
});
}

});