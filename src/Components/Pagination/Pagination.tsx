import "./style.css";
type PaginationProps = {
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  paginate,
}) => {
  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {[...Array(totalPages).keys()].map((number) => (
        <button
          key={number + 1}
          onClick={() => paginate(number + 1)}
          className={`pagination-number ${
            currentPage === number + 1 ? "active" : ""
          }`}
        >
          {number + 1}
        </button>
      ))}
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
