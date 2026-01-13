import { useState } from "react";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNxtPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <nav className="pagination">
      <a
        href="#"
        style={currentPage === 1 ? { pointerEvents: "none" } : {}}
        onClick={() => handlePrevPage()}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 6l-6 6l6 6" />
        </svg>
      </a>
      {pages.map((p) => {
        return (
          <a
            href="#"
            key={p}
            data-page={p}
            className={currentPage === p ? "is-active" : ""}
            onClick={() => handlePageChange(p)}
          >
            {p}
          </a>
        );
      })}
      <a
        href="#"
        style={currentPage === totalPages ? { pointerEvents: "none" } : {}}
        onClick={() => handleNxtPage()}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>
      </a>
    </nav>
  );
}
