"use client";

import Image from "next/image";
import CardItem from "../../_components/card-item";
import { mockArticles } from "../_data/mock-articles";
import MenuBanner1 from "../_components/menu-banner-1";
import MenuBanner2 from "../_components/menu-banner-2";

interface FeatureProps {
  currentPage: number;
  itemsPerPage: number;
}

const Feature = ({ currentPage, itemsPerPage }: FeatureProps) => {
  // Get current page's articles
  const indexOfLastArticle = currentPage * itemsPerPage;
  const indexOfFirstArticle = indexOfLastArticle - itemsPerPage;
  const currentArticles = mockArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  return (
    <section className="w-full px-[120px] xl:px-[240px] flex justify-center mx-auto">
      <div className="w-full flex gap-8">
        {/* first column */}
        <div className="w-[72%] flex flex-col gap-6">
          <p className="font-raleway font-extrabold text-[36px] leading-[200%] tracking-[0%] align-middle capitalize">
            Tất cả bài viết
          </p>
          <div
            className="w-full h-[318px] rounded-[40px] bg-banner-custom-gradient relative flex items-center"
            style={{
              background:
                "linear-gradient(77.74deg, #013DA0 11.85%, #0142A9 20.65%, #0148B3 29.45%, #024EBC 38.25%, #0254C5 47.05%, #025ACE 55.84%, #0261D7 64.64%, #0267E1 73.44%, #036EEA 82.24%, #0375F3 91.04%)",
            }}
          >
            <div className="absolute w-[53%] left-[59px] flex flex-col gap-8 top-1/2 -translate-y-1/2 z-10">
              <span className="w-[376px] font-raleway font-bold text-[36px] leading-[100%] tracking-[0%] text-[#FFFFFF]">
                Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!
              </span>
              <button className="w-fit flex gap-8 h-[50px] rounded-[40px] border-2 px-6 py-2 border-[#FFFFFF] items-center">
                <span className="font-raleway font-bold text-[14px] leading-[150%] tracking-[0%] capitalize text-[#FFFFFF]">
                  Tham gia ngay
                </span>
                <Image
                  src="/icons/up-arrow-icon-white.svg"
                  alt="icon"
                  width={34}
                  height={34}
                />
              </button>
            </div>
            <div className="absolute right-[2.49%] bottom-0">
              <Image
                src="/icons/banner.svg"
                alt="icon"
                width={472}
                height={399}
              />
            </div>
          </div>
          <div>
            {/* Grid with paginated articles */}
            <div className="grid grid-cols-2 gap-8">
              {currentArticles.map((article, index) => (
                <CardItem
                  key={`${currentPage}-${index}`}
                  width="100%"
                  height="717px"
                  article={article}
                />
              ))}
            </div>
            
            {/* Pagination component moved to parent */}
          </div>
        </div>
        {/* second column */}
        <div className="flex-1 flex flex-col gap-8">
          <span className="font-raleway font-extrabold text-[24px] leading-[200%] tracking-[0%] align-middle capitalize text-[#050505]">
            Tìm kiếm
          </span>
          <form className="w-full h-[72px] flex items-center rounded-[12px] bg-white shadow-lg">
            <input
              type="text"
              placeholder="Tìm kiếm bài viết"
              className="flex-1 h-full pl-6 pr-2 py-3 rounded-[12px] bg-transparent outline-none
                font-raleway font-medium text-base leading-[150%] text-[#ACB3C7]"
            />
            <button
              type="submit"
              className="w-12 h-12 rounded-xl p-3 mr-2 bg-[#15AA7A]"
            >
              <Image
                src="/icons/magnify.svg"
                alt="icon"
                width={24}
                height={24}
              />
            </button>
          </form>
          <span className="font-raleway font-extrabold text-[24px] leading-[200%] tracking-[0%] align-middle capitalize text-[#050505]">
            Danh mục
          </span>
          <div className="w-full flex flex-col gap-4">
            <div className="w-full h-[35px] flex justify-between pb-2 border-b border-[#F1F5F7]">
              <span className="font-raleway font-medium text-[18px] leading-[150%] text-[#33404A]">
                Tất cả
              </span>
              <span className="font-raleway font-medium text-[18px] leading-[150%] text-[#667F93]">
                108
              </span>
            </div>
            <div className="w-full h-[35px] flex justify-between pb-2 border-b border-[#F1F5F7]">
              <span className="font-raleway font-medium text-[18px] leading-[150%] text-[#33404A]">
                Thiết Kế Website
              </span>
              <span className="font-raleway font-medium text-[18px] leading-[150%] text-[#667F93]">
                36
              </span>
            </div>
            <div className="w-full h-[35px] flex justify-between pb-2 border-b border-[#F1F5F7]">
              <span className="font-raleway font-medium text-[18px] leading-[150%] text-[#33404A]">
                Thiết Kế App Mobile
              </span>
              <span className="font-raleway font-medium text-[18px] leading-[150%] text-[#667F93]">
                13
              </span>
            </div>
            <div className="w-full h-[35px] flex justify-between pb-2 border-b border-[#F1F5F7]">
              <span className="font-raleway font-medium text-[18px] leading-[150%] text-[#33404A]">
                Quản Lý Sản Xuất
              </span>
              <span className="font-raleway font-medium text-[18px] leading-[150%] text-[#667F93]">
                25
              </span>
            </div>
            <div className="w-full h-[35px] flex justify-between pb-2 border-b border-[#F1F5F7]">
              <span className="font-raleway font-medium text-[18px] leading-[150%] text-[#33404A]">
                Quản Lý Bán Hàng
              </span>
              <span className="font-raleway font-medium text-[18px] leading-[150%] text-[#667F93]">
                22
              </span>
            </div>
            <div className="w-full h-[35px] flex justify-between pb-2 border-b border-[#F1F5F7]">
              <span className="font-raleway font-medium text-[18px] leading-[150%] text-[#33404A]">
                Báo Chí Nói Về FOSO
              </span>
              <span className="font-raleway font-medium text-[18px] leading-[150%] text-[#667F93]">
                7
              </span>
            </div>
            <div className="w-full h-[35px] flex justify-between pb-2 border-b border-[#F1F5F7]">
              <span className="font-raleway font-medium text-[18px] leading-[150%] text-[#33404A]">
                Tin Tức FOSO
              </span>
              <span className="font-raleway font-medium text-[18px] leading-[150%] text-[#667F93]">
                5
              </span>
            </div>
          </div>
          <MenuBanner1 />
          <MenuBanner2 />
        </div>
      </div>
    </section>
  );
};

export default Feature;
