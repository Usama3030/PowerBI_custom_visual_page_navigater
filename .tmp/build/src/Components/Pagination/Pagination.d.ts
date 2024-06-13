/// <reference types="react" />
import "./style.css";
type PaginationProps = {
    currentPage: number;
    totalPages: number;
    paginate: (pageNumber: number) => void;
};
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
