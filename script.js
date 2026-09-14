const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");
const repairForm = document.getElementById("repairForm");
const formMessage = document.getElementById("formMessage");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});

repairForm.addEventListener("submit", function(event) {
    event.preventDefault();

    ``
    `
const name = document.getElementById("name").value;
const phone = document.getElementById("phone").value;
const device = document.getElementById("device").value;
const problem = document.getElementById("problem").value;

if (!name || !phone || !device || !problem) {
    formMessage.textContent = "Please fill in all fields.";
    return;
}

formMessage.textContent = "Repair request sent successfully! We'll contact you soon.";

repairForm.reset();
`
    ``

});

document.querySelectorAll(".service-card a").forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();


        document.querySelector("#repair").scrollIntoView({
            behavior: "smooth"
        });
    });



});

document.querySelector(".contact-section .btn").addEventListener("click", function(event) {
    event.preventDefault();



    document.querySelector("#repair").scrollIntoView({
        behavior: "smooth"
    });


});