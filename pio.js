const modal = document.getElementById("registrationModal");
  const submitButton = document.querySelector(".cta-button");

  submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    modal.style.display = "block";
  });

  function closeModal() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }