/* 


Hola! Excelente manera de resolverlo!

Hay unas cosas a tener en cuenta:
- Ejecutar una sola vez `fetchData` es lo correcto para evitar peticiones constantes, lo hiciste muy bien :)

- Usaste muy bien el método `document.createDocumentFragment(), felicidades!!

+ En donde si hay un punto a mejorar es en el método `renderJobs`. Lo ideal es poder pintar todos los `jobs` en el DOM una sola vez, y luego mediante CSS quitarlos según el filtro. Dibujar el DOM de manera constante por cada render es un trabajo complejo, por eso es mejor hacerlo una única vez y luego ocultar/mostrar los resultados por CSS. Además, lo que provoca que renderizemos constantemente los resultados de búsqueda es que perdamos el estado de `aplicado` en los botones de cada oferta. Por ejemplo: si aplico a un puesto de trabajo, luego cambio el filtro y por último vuelvo al estado inicial, ese puesto ya no estará "aplicado".

-> Vamos a mantener el código que hiciste dentro de un comentario, así no lo pierdes


*/


/* Aquí va la lógica para mostrar los resultados de búsqueda */
export let jobs = [];

// si no se usa en otro lado no es necesario exportarlo
async function fetchData() {
  const response = await fetch("./data.json");
  const data = await response.json();

  // pintamos los jobs en el DOM una sola vez
  drawJobContent(data)
}

const drawJobContent = (jobsData) => {
  const jobsListingCard = document.querySelector(".jobs-listings");
  jobsListingCard.innerHTML = "";

  const fragment = document.createDocumentFragment();

  jobsData.forEach((job) => {
    const li = document.createElement("li");  
    const article = document.createElement("article");
    article.classList.add("job-listing-card");
    article.dataset.location = job.ubicacion || '';
    article.dataset.nivel = job.data?.nivel || '';
    article.dataset.technology = job.data?.technology?.join(', ') || '';

    const content = `
        <div>
          <h3>${job.titulo}</h3>
          <small>${job.empresa} | ${job.ubicacion}</small>
          <p>${job.descripcion}</p>
        </div>
        <button class="button-apply-job" data-id="${job.id}">Aplicar</button>`;

    article.innerHTML = content;
    li.appendChild(article);
    fragment.appendChild(li);
  });

  jobsListingCard.appendChild(fragment);
}

/* export const renderJobs = (jobsToRender) => {
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
    button.textContent = "Aplicar";
    button.dataset.id = job.id;

    article.appendChild(button);
    li.appendChild(article);

    fragment.appendChild(li);
  });

  jobsListingCard.appendChild(fragment);

  jobs = await fetchData();
  renderJobs(jobs);
}; */

await fetchData();

