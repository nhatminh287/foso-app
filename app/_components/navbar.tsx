import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full h-[127.41px] flex justify-center items-center">
      <div
        className="sticky top-[84px] w-[1280px] h-[79.41px] rounded-[40px] 
                      pt-3 pr-9 pb-3 pl-9 
                      flex items-center justify-between
                      gap-16
                      backdrop-blur-[24.997px]
                      bg-[#FFFFFFA6]
                      shadow-[0px_2px_83.99px_0px_#00000005_inset,_-9px_20px_59.99px_-24px_#0000000D,_1px_-1px_0px_0px_#FFFFFF,_-1px_1px_0px_0px_#F0F0F0]
                      z-50"
      >
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/foso.png"
              alt="Next.js Logo"
              width={134}
              height={55.41}
            />
          </Link>
        </div>
        <div className="hidden sm:flex items-center space-x-2 w-[405px] h-[55.41px] gap-[8px]">
          <Link
            href="/about"
            className="hover:underline hover:underline-offset-4"
          >
            <span className="font-raleway font-medium text-[14px] leading-[150%] tracking-[0%] align-middle text-[#25272A]">
              Về chúng tôi
            </span>
          </Link>
          <Link
            href="/solutions"
            className="flex gap-2 hover:underline hover:underline-offset-4"
          >
            <span className="font-raleway font-medium text-[14px] leading-[150%] tracking-[0%] align-middle text-[#25272A]">
              Giải pháp
            </span>
            <Image
              src="/icons/arrow-down.svg"
              alt="Icon"
              width={16}
              height={16}
            />
          </Link>
          <Link
            href="/resources"
            className="relative flex gap-2 hover:underline hover:underline-offset-4"
          >
            <span className="font-raleway font-bold text-[14px] leading-[150%] tracking-[0%] align-middle text-[#25272A]">
              Tài nguyên
            </span>
            <Image
              src="/icons/arrow-down.svg"
              alt="Icon"
              width={16}
              height={16}
            />
            <div className="absolute top-[30.79px] left-[40%] bg-[#1AD598] w-[6px] h-[6px] rounded-full"></div>
          </Link>
          <Link
            href="/contact"
            className="hover:underline hover:underline-offset-4"
          >
            <span className="font-raleway font-medium text-[14px] leading-[150%] tracking-[0%] align-middle text-[#25272A]">
              Liên hệ
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex w-[94px] h-[40px] rounded-[40px] pt-2 pr-3 pb-2 pl-3 gap-[12px] border border-solid border-[rgba(9,9,11,0.1)] bg-gradient-to-b from-[rgba(9,9,11,0.05)] to-[rgba(9,9,11,0.1)]">
            <Image src="/icons/vietnam.svg" alt="Icon" width={24} height={24} />
            <button className="flex items-center gap-2">
              <span className="w-[14px] h-[21px] font-raleway font-medium text-[14px] leading-[150%] tracking-[0%] align-middle text-[#25272A]">
                VI
              </span>
              <Image
                src="/icons/arrow-down.svg"
                alt="Icon"
                width={16}
                height={16}
              />
            </button>
          </div>

          <button className=" h-[38px] rounded-[40px] pt-2 pr-3 pb-2 pl-3 gap-[12px] border border-solid bg-gradient-to-b from-[#1AD598] to-[#1AD598] border-image-[radial-gradient(50%_93.75%_at_50%_6.25%,_#A3EED6_0%,_rgba(255,255,255,0)_100%)] border-image-slice-[1] items-center flex justify-between">
            <span className="w-[152px] h-[21px] font-raleway font-bold text-[14px] leading-[150%] tracking-[0%] align-middle capitalize text-[#052B1E]">
              Trở thành khách hàng
            </span>
            <Image 
                src="/icons/up-right-icon.svg" 
                alt="Icon" 
                width={22} 
                height={22}
             />

          </button>
        </div>
      </div>
    </header>
  );
}
