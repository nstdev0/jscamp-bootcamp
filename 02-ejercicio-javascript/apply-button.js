import { jobs } from "./fetch-data.js";

const jobsListingCard = document.querySelector(".jobs-listings");

jobsListingCard.addEventListener("click", (e) => {
  if (e.target.classList.contains("button-apply-job")) {
    const button = e.target;
    button.textContent = "¡Aplicado!";
    button.classList.add("is-applied");
    button.disabled = true;

    const jobId = button.dataset.id;
    const job = jobs.find(j => j.id === jobId);
    if (job) {
      job.applied = true;
    }
  }
});
