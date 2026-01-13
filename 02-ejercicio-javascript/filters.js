/* Aquí va la lógica para filtrar los resultados de búsqueda */
import { jobs, renderJobs } from "./fetch-data.js";

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
searchInput.addEventListener("input", filterJobs);
