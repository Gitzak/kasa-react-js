import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
    const renderPageButtons = () => {
        const pageButtons = [];

        const maxPagesToShow = 5; // Number of pages to display

        const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

        for (let i = startPage; i <= endPage; i++) {
            pageButtons.push(
                <button key={i} className={`btn btn-dark btn-lg px-4 ${currentPage === i ? "active" : ""}`} onClick={() => onPageChange(i)}>
                    {i}
                </button>
            );
        }

        return pageButtons;
    };

    return (
        <div className="row">
            <div className="col-12 d-flex justify-content-center">
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group me-2 shadow" role="group" aria-label="First group">
                        {currentPage > 1 && (
                            <button className="btn btn-dark btn-lg px-4" onClick={() => onPageChange(currentPage - 1)}>
                                Prev
                            </button>
                        )}
                        {renderPageButtons()}
                        {currentPage < totalPages && (
                            <button className="btn btn-dark btn-lg px-4" onClick={() => onPageChange(currentPage + 1)}>
                                Next
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pagination;
