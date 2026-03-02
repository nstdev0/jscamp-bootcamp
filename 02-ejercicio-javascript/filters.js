/* 

Muy buena manera de resolverlo! Excelente trabajo!
Vamos a cambiar algunas cosas por el cambio que hicimos en `fetch-data.js` para que funcione correctamente el estado de los botones de "Aplicar".

*/

const filterLocation = document.getElementById("filter-location");
const filterLevel = document.getElementById("filter-experience-level");
const filterTechnology = document.getElementById("filter-technology");
const searchInput = document.getElementById("empleos-search-input");

const filterJobs = () => {
  // buscamos los jobs que tenemos en el DOM (todos, los mostrados y ocultos)
  const jobsListingCard = document.querySelectorAll(".job-listing-card")

  // valores que el usuario ingresa
  const location = filterLocation.value.toLowerCase().trim();
  const level = filterLevel.value.toLowerCase().trim();
  const technology = filterTechnology.value.toLowerCase().trim();
  const searchText = searchInput.value.toLowerCase().trim();

  jobsListingCard.forEach((job) => {
    // valores del elemento job
    const jobLocation = job.dataset.location.toLowerCase()
    const jobLevel = job.dataset.nivel.toLowerCase()
    const jobTechnology = job.dataset.technology.toLowerCase().split(',')
    const jobTitle = job.querySelector('h3').textContent.toLowerCase()

    // comparamos valores
    const matchLocation = location === "" || location === jobLocation
    const matchLevel = level === "" || jobLevel === level
    const matchTechnology = technology === "" || jobTechnology.includes(technology)
    const matchSearch = searchText === "" || jobTitle.includes(searchText);

    const isJobVisible = matchLocation && matchLevel && matchTechnology && matchSearch;
    
    job.style.display = isJobVisible ? "flex" : "none";
  });
};

filterLocation.addEventListener("change", filterJobs);
filterLevel.addEventListener("change", filterJobs);
filterTechnology.addEventListener("change", filterJobs);
searchInput.addEventListener("input", filterJobs);

/* Aquí va la lógica para filtrar los resultados de búsqueda */
/* import { jobs, renderJobs } from "./fetch-data.js";

const filterLocation = document.getElementById("filter-location");
const filterLevel = document.getElementById("filter-experience-level");
const filterTechnology = document.getElementById("filter-technology");
const searchInput = document.getElementById("empleos-search-input");

const filterJobs = () => {
  const location = filterLocation.value;
  const level = filterLevel.value;
  const technology = filterTechnology.value;
  const searchText = searchInput.value.toLowerCase().trim();

  const filteredJobs = jobs.filter((job) => {
    const matchLocation = location === "" || job.data.modalidad === location;

    const matchLevel = level === "" || job.data.nivel === level;

    const matchTechnology = technology === "" || (job.data.technology && job.data.technology.includes(technology));

    const matchSearch = searchText === "" || job.titulo.toLowerCase().includes(searchText);

    return matchLocation && matchLevel && matchTechnology && matchSearch;
  });

  renderJobs(filteredJobs);
};

filterLocation.addEventListener("change", filterJobs);
filterLevel.addEventListener("change", filterJobs);
filterTechnology.addEventListener("change", filterJobs);
searchInput.addEventListener("input", filterJobs); */
