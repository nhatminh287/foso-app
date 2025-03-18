"use client";

import CardItem from '../../_components/card-item';

const RelatedArticles = () => {
  
  const relatedArticles = [
    {
      title: "10 Nguyên tắc UX/UI hiệu quả cho website thương mại điện tử",
      publishDate: "02/06/2023",
      readingMinutes: 8,
    },
    {
      title: "Tối ưu hóa tốc độ website: Các kỹ thuật và công cụ mới nhất",
      publishDate: "28/05/2023",
      readingMinutes: 12,
    },
    {
      title: "Thiết kế website thân thiện với mobile: Sự chuyển đổi từ desktop-first",
      publishDate: "20/05/2023",
      readingMinutes: 10,
    }
  ];

  return (
    <div className="related-articles my-12">
      <h2 className="font-raleway font-extrabold text-[28px] mb-8">
        Bài viết liên quan
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedArticles.map((article, index) => (
          <CardItem
            key={index}
            width="100%"
            height="auto" /* Changed from fixed height to auto */
            article={article}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
