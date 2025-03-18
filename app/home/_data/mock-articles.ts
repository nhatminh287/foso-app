import { Article } from '../_components/card-item';

// Generate random reading minutes between 1 and 20
const getRandomReadingMinutes = () => Math.floor(Math.random() * 20) + 1;

// Generate a random date in the last 60 days
const getRandomDate = () => {
  const today = new Date();
  const randomDaysAgo = Math.floor(Math.random() * 60);
  const date = new Date(today);
  date.setDate(today.getDate() - randomDaysAgo);
  
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

// List of random article titles
const articleTitles = [
  "Cách tối ưu hóa hiệu suất ứng dụng React",
  "Tìm hiểu về Next.js 14 và SSR",
  "TypeScript: Tips và tricks cho developer",
  "Tailwind CSS: Xây dựng giao diện hiện đại",
  "GraphQL vs REST: Phân tích chi tiết",
  "Docker cho developer front-end",
  "CI/CD với GitHub Actions",
  "Responsive Design: Các nguyên tắc cơ bản",
  "State Management trong React: Context API vs Redux",
  "Accessibility trong phát triển web",
  "Tối ưu SEO cho ứng dụng JavaScript",
  "Sử dụng Hooks trong React hiệu quả",
  "Micro-Frontend: Kiến trúc và triển khai",
  "Testing trong React với Jest và React Testing Library",
  "Serverless Functions và ứng dụng thực tế",
  "Authentication và Authorization với JWT",
  "Tích hợp thanh toán với Stripe",
  "Progressive Web Apps (PWA): Hướng dẫn toàn diện",
  "CSS Grid và Flexbox: Khi nào sử dụng?",
  "Web Performance: Các kỹ thuật tối ưu"
];

// Generate 50 mock articles
export const mockArticles: Article[] = Array.from({ length: 50 }, (_, index) => {
  // Use modulo to cycle through the titles (to avoid creating 50 unique titles)
  const titleIndex = index % articleTitles.length;
  
  return {
    title: articleTitles[titleIndex],
    publishDate: getRandomDate(),
    readingMinutes: getRandomReadingMinutes(),
  };
});
