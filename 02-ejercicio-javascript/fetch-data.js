export let jobs = [];

export async function fetchData() {
  const response = await fetch("./data.json");
  const data = await response.json();
  return data;
}

export const renderJobs = (jobsToRender) => {
  const jobsListingCard = document.querySelector(".jobs-listings");
  jobsListingCard.innerHTML = "";

  const fragment = document.createDocumentFragment();

  jobsToRender.forEach((job) => {
    const li = document.createElement("li");
    const article = document.createElement("article");
    article.classList.add("job-listing-card");

    const content = `
        <div>
          <h3>${job.titulo}</h3>
          <small>${job.empresa} | ${job.ubicacion}</small>
          <p>${job.descripcion}</p>
        </div>
    `;

    article.innerHTML = content;

    const button = document.createElement("button");
    button.classList.add("button-apply-job");
    button.dataset.id = job.id;

    if (job.applied) {
      button.textContent = "¡Aplicado!";
      button.classList.add("is-applied");
      button.disabled = true;
    } else {
      button.textContent = "Aplicar";
    }

    article.appendChild(button);
    li.appendChild(article);

    fragment.appendChild(li);
  });

  jobsListingCard.appendChild(fragment);
};

jobs = await fetchData();
renderJobs(jobs);
