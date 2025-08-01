// Burger
  document.addEventListener("DOMContentLoaded", () => {
    let burger = document.getElementById("burger");
    let header = document.getElementById("header");

    burger.addEventListener("click", () => {
      header.classList.toggle("active");
    });
  });

// Téléchargement du CV
document.querySelector("#telechargerCV").addEventListener('click', function(){
    const LIEN = document.createElement('a');
    LIEN.href="Cv_BintouSylla.pdf";
    LIEN.download="CV_BintouSYLLA";
    LIEN.click();

});

// Barre de progession
  document.addEventListener("DOMContentLoaded", function () {
    let skillBars = document.querySelectorAll(".progress-bar");

    skillBars.forEach(bar => {
      const VALUE = bar.getAttribute("aria-valuenow");
      bar.style.width = VALUE + "%";
    });
  });

// Formuulaire
  document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector(".contact-form form");
    let loading = document.querySelector(".loading");
    let sentMessage = document.querySelector(".sent-message");
    let errorMessage = document.querySelector(".error-message");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      loading.style.display = "block";
      sentMessage.style.display = "none";
      errorMessage.style.display = "none";

      // Simulation de l'envoi
      setTimeout(() => {
        loading.style.display = "none";
        sentMessage.style.display = "block";
        form.reset();
      });
    });
  });

