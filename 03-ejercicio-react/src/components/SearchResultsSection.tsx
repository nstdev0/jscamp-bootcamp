import { useEffect, useState } from "react";
import { type Job } from "../types/job";
import JobCard from "./JobCard";
import Pagination from "./Pagination";

export default function SearchResultsSection() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const PAGE_SIZE = 5;
  const TOTAL_PAGES = Math.ceil(jobs.length / PAGE_SIZE);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await fetch("https://jscamp-api.vercel.app/api/jobs");
      const { data } = await response.json();
      setJobs(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  if (!isLoading && jobs.length <= 0) {
    return (
      <h1>
        No se han encontrado empleos que coincidan con los criterios de
        búsqueda.
      </h1>
    );
  }

  if (!isLoading && jobs) {
    return (
      <section>
        <h2 style={{ textAlign: "center" }}>Resultados de búsqueda</h2>{" "}
        <div className="jobs-listings">
          {jobs.map((job, index) => {
            return <JobCard key={index} job={job} />;
          })}{" "}
        </div>
        <Pagination totalPages={TOTAL_PAGES} />
      </section>
    );
  }
}
