import React from 'react';
import Image from 'next/image';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    
    pages.push(1);
    
    // Calculate range of pages to show around current page
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    
    if (start > 2) {
      pages.push('...');
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    if (end < totalPages - 1) {
      pages.push('...');
    }
    
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <div className="w-[1542px] flex items-center justify-between gap-2 mt-12 mx-auto">
      {/* Previous button */}
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`width-[131px] flex gap-2 items-center ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-blue-600 hover:bg-blue-50"
        }`}
      >
        <Image src="/icons/left-arrow.svg" width={24} height={24} alt="Previous" />
        <span className="font-raleway font-semibold text-[16px] leading-[150%] text-[#B3C5D4]">
          Trang trước
        </span>
      </button>

      {/* Page numbers */}
      <div className="flex gap-1">
        {getPageNumbers().map((page, index) => (
          <React.Fragment key={index}>
            {page === "..." ? (
              <span className="px-3 py-1">...</span>
            ) : (
              <button
                onClick={() => typeof page === "number" && onPageChange(page)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-50"
                }`}
              >
                {page}
              </button>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Next button */}
      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className={`w-[131px] flex items-center gap-2 ${
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "text-blue-600 hover:bg-blue-50"
        }`}
      >
        <span className="font-raleway font-semibold text-[16px] leading-[150%] tracking-[0%] text-[#4D5F6E]">
          Trang kế tiếp
        </span>
        <Image src="/icons/nextpage.svg" width={24} height={24} alt="Next" />
      </button>
    </div>
  );
};

export default Pagination;
