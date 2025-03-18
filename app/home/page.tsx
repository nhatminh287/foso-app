"use client";

import { useState } from "react";
import Feature from "./_sections/feature";
import HeroSection from "./_sections/hero-section";
import Pagination from "./_components/pagination";
import { mockArticles } from "./_data/mock-articles";

export default function HomePage() {
  // Pagination logic
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calculate total pages
  const totalPages = Math.ceil(mockArticles.length / ITEMS_PER_PAGE);
  
  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full h-full flex flex-col gap-24 min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <Feature 
        currentPage={currentPage}
        itemsPerPage={ITEMS_PER_PAGE}
      />
      
      {/* Pagination */}
      <div className="mb-16">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
