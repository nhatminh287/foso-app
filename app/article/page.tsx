"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import MenuBanner1 from "../home/_components/menu-banner-1";
import MenuBanner2 from "../home/_components/menu-banner-2";
import RelatedArticles from "./_components/related-articles";
import ArticleContent from "./_components/article-content";

export default function ArticlePage() {

  const [showTableOfContents, setShowTableOfContents] = useState(true);
  
  const toggleTableOfContents = () => {
    setShowTableOfContents(prev => !prev);
  };
  
  return (
    <div className="w-full min-h-screen pb-16">

      {/* Content Area */}
      <div className="w-full px-[120px] xl:px-[240px] flex justify-center mx-auto mt-12">
        <div className="w-full flex gap-8">
          {/* Left Column - Article Content */}
          <div className="w-[64%] flex flex-col gap-8">
            <p className="font-raleway font-normal text-[14px] leading-[150%] tracking-[0] align-middle text-[#050505]">
              Trang chủ &gt; Tài nguyên &gt; Blog &gt;{" "}
              <span className="font-bold capitalize">
                Quản lý sản xuất
              </span>
            </p>

            {/* Main Article Content */}
            <ArticleContent />

            {/* Related Articles */}
            <RelatedArticles />
          </div>

          {/* Right Column - Menu */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className="font-raleway font-extrabold text-[24px] leading-[200%] tracking-[0%] align-middle capitalize text-[#050505]">
                Nội dung bài viết
              </span>
              <button 
                onClick={toggleTableOfContents}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label={showTableOfContents ? "Thu gọn mục lục" : "Mở rộng mục lục"}
              >
                {showTableOfContents ? (
                  <ChevronUp size={24} className="text-[#15AA7A]" />
                ) : (
                  <ChevronDown size={24} className="text-[#15AA7A]" />
                )}
              </button>
            </div>

            {/* Table of Contents - Collapsible */}
            {showTableOfContents && (
              <div className="bg-gray-50 rounded-lg p-6 transition-all duration-300">
                <ul className="flex flex-col gap-3">
                  <li className="text-[#33404A] hover:text-[#15AA7A] cursor-pointer transition-colors">
                    <a href="#section-1" className="flex items-center gap-2">
                      <span className="font-medium">1. Quy trình 5S là gì?</span>
                    </a>
                  </li>
                  <li className="text-[#33404A] hover:text-[#15AA7A] cursor-pointer transition-colors">
                    <a href="#section-2" className="flex items-center gap-2">
                      <span className="font-medium">
                        2. Lợi ích quy trình 5S đem lại
                      </span>
                    </a>
                  </li>
                  <li className="text-[#33404A] hover:text-[#15AA7A] cursor-pointer transition-colors">
                    <a href="#section-3" className="flex items-center gap-2">
                      <span className="font-medium">
                        3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
                      </span>
                    </a>
                    <ul className="ml-6 mt-2 flex flex-col gap-2">
                      <li className="text-[#33404A] hover:text-[#15AA7A] cursor-pointer transition-colors">
                        <a href="#section-3-1" className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#15AA7A]"></span>
                          <span className="font-normal">3.1 Cải thiện rõ nét môi trường làm việc</span>
                        </a>
                      </li>
                      <li className="text-[#33404A] hover:text-[#15AA7A] cursor-pointer transition-colors">
                        <a href="#section-3-2" className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#15AA7A]"></span>
                          <span className="font-normal">3.2 Tiết kiệm thời gian đáng kể</span>
                        </a>
                      </li>
                      <li className="text-[#33404A] hover:text-[#15AA7A] cursor-pointer transition-colors">
                        <a href="#section-3-3" className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#15AA7A]"></span>
                          <span className="font-normal">3.3 Tăng năng suất làm việc</span>
                        </a>
                      </li>
                      <li className="text-[#33404A] hover:text-[#15AA7A] cursor-pointer transition-colors">
                        <a href="#section-3-4" className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#15AA7A]"></span>
                          <span className="font-normal">3.4 Tiết kiệm chi phí</span>
                        </a>
                      </li>
                      <li className="text-[#33404A] hover:text-[#15AA7A] cursor-pointer transition-colors">
                        <a href="#section-3-5" className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#15AA7A]"></span>
                          <span className="font-normal">3.5 Tăng chất lượng sản phẩm</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="text-[#33404A] hover:text-[#15AA7A] cursor-pointer transition-colors">
                    <a href="#section-4" className="flex items-center gap-2">
                      <span className="font-medium">
                        4. Quy trình 5S gồm các bước
                      </span>
                    </a>
                    <ul className="ml-6 mt-2 flex flex-col gap-2">
                      <li className="text-[#33404A] hover:text-[#15AA7A] cursor-pointer transition-colors">
                        <a href="#section-4-1" className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#15AA7A]"></span>
                          <span className="font-normal">4.1 Seiri (Ngăn nắp)</span>
                        </a>
                      </li>
                      <li className="text-[#33404A] hover:text-[#15AA7A] cursor-pointer transition-colors">
                        <a href="#section-4-2" className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#15AA7A]"></span>
                          <span className="font-normal">4.2 Seiton (Sắp xếp)</span>
                        </a>
                      </li>
                      <li className="text-[#33404A] hover:text-[#15AA7A] cursor-pointer transition-colors">
                        <a href="#section-4-3" className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#15AA7A]"></span>
                          <span className="font-normal">4.3 Seiso (Vệ sinh)</span>
                        </a>
                      </li>
                      <li className="text-[#33404A] hover:text-[#15AA7A] cursor-pointer transition-colors">
                        <a href="#section-4-4" className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#15AA7A]"></span>
                          <span className="font-normal">4.4 Seiketsu (Tiêu chuẩn hóa)</span>
                        </a>
                      </li>
                      <li className="text-[#33404A] hover:text-[#15AA7A] cursor-pointer transition-colors">
                        <a href="#section-4-5" className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#15AA7A]"></span>
                          <span className="font-normal">4.5 Shitsuke (Kỷ luật)</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="text-[#33404A] hover:text-[#15AA7A] cursor-pointer transition-colors">
                    <a href="#section-5" className="flex items-center gap-2">
                      <span className="font-medium">
                        5. Quy trình được thực hiện như sau
                      </span>
                    </a>
                    <ul className="ml-6 mt-2 flex flex-col gap-2">
                      <li className="text-[#33404A] hover:text-[#15AA7A] cursor-pointer transition-colors">
                        <a href="#section-5-1" className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#15AA7A]"></span>
                          <span className="font-normal">5.1 Giai đoạn chuẩn bị</span>
                        </a>
                      </li>
                      <li className="text-[#33404A] hover:text-[#15AA7A] cursor-pointer transition-colors">
                        <a href="#section-5-2" className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#15AA7A]"></span>
                          <span className="font-normal">5.2 Triển khai rộng rãi</span>
                        </a>
                      </li>
                      <li className="text-[#33404A] hover:text-[#15AA7A] cursor-pointer transition-colors">
                        <a href="#section-5-3" className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#15AA7A]"></span>
                          <span className="font-normal">5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp</span>
                        </a>
                      </li>
                      <li className="text-[#33404A] hover:text-[#15AA7A] cursor-pointer transition-colors">
                        <a href="#section-5-4" className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#15AA7A]"></span>
                          <span className="font-normal">5.4 Sàng lọc, sắp xếp và đánh giá</span>
                        </a>
                      </li>
                      <li className="text-[#33404A] hover:text-[#15AA7A] cursor-pointer transition-colors">
                        <a href="#section-5-5" className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#15AA7A]"></span>
                          <span className="font-normal">5.5 Đánh giá</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="text-[#33404A] hover:text-[#15AA7A] cursor-pointer transition-colors">
                    <a href="#section-6" className="flex items-center gap-2">
                      <span className="font-medium">
                        6. Quy trình 5S có giống với Kaizen?
                      </span>
                    </a>
                  </li>
                  <li className="text-[#33404A] hover:text-[#15AA7A] cursor-pointer transition-colors">
                    <a href="#section-7" className="flex items-center gap-2">
                      <span className="font-medium">
                        7. Đối tượng nào nên áp dụng 5S?
                      </span>
                    </a>
                  </li>
                  <li className="text-[#33404A] hover:text-[#15AA7A] cursor-pointer transition-colors">
                    <a href="#section-8" className="flex items-center gap-2">
                      <span className="font-medium">
                        8. Các yếu tố tạo nên thành công cho quy trình 5S
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            )}

            <MenuBanner1 />
            <MenuBanner2 />
          </div>
        </div>
      </div>
    </div>
  );
}
