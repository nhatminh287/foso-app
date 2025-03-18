import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface Article {
  title: string;
  publishDate: string;
  readingMinutes: number;
}

interface CardItemProps {
  width?: string | number;
  height?: string | number;
  article: Article;
}

const CardItem: FC<CardItemProps> = ({
  width = '100%',
  height = 'auto',
  article,
}) => {
  const { title, publishDate, readingMinutes } = article;
  
  return (
    <Link href="/article" className="block">
      <div
        className="bg-white rounded-3xl overflow-hidden"
        style={{ width, height }}
      >
        <div
          className="w-full rounded-3xl overflow-hidden"
          style={{
            backgroundImage: "url('/images/product-item.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "475px", 
          }}
        />
        <div className="flex flex-col gap-4 pt-6">
          <div className="w-[114px] h-[26px] gap-[10px] pt-1 pr-2 pb-1 pl-2 rounded-lg bg-[#E2F0FE] flex items-center justify-center">
            <span className="font-raleway font-medium text-[12px] leading-[150%] tracking-[0%] text-[#0F4F9E]">
              Quản Lý Sản Xuất
            </span>
          </div>
          <h3 className="font-raleway font-extrabold text-[24px] leading-[150%] tracking-[0%] align-middle text-[#33404A] mb-2">
            {title}
          </h3>
          <div className="flex items-center font-raleway font-medium text-[16px] leading-[150%] tracking-[0%] text-[#667F93]">
            <div className="flex gap-2">
              <Image src="/icons/calendar.svg" width={24} height={24} alt="" />
              <span>{publishDate}</span>
            </div>
            <div className="w-6 -rotate-90 border border-[#D9E1E7]" />
            <div className="flex gap-2">
              <Image src="/icons/clock.svg" width={24} height={24} alt="" />
              <span>{readingMinutes} phút đọc</span>
            </div>
          </div> 
          <div className="w-[200px] h-[48px] flex items-center gap-4">
            <span className="font-raleway font-semibold text-[18px] leading-[150%] tracking-[0%] text-[#667F93]">
              Khám phá thêm
            </span>
            <Image src="/icons/arrow-right.svg" width={48} height={48} alt="" />
          </div>
        </div>
      </div>
    </Link>
  );
}
 
export default CardItem;