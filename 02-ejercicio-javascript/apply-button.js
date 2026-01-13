/* Aquí va la lógica para dar funcionalidad al botón de "Aplicar" */
const jobsListingCard = document.querySelector(".jobs-listings");

jobsListingCard.addEventListener("click", (e) => {
  if (e.target.classList.contains("button-apply-job")) {
    const button = e.target;
    button.textContent = "¡Aplicado!";
    button.classList.add("is-applied");
    button.disabled = true;
  }
});
