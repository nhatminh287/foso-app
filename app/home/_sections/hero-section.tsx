import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="flex justify-center relative w-full h-[392px]">
      <div className="flex gap-12 px-[320px]">
        <Image src="/icons/note.svg" alt="Icon" width={195} height={188.19} />
        <div className="w-[1280px] h-[392px] py-12 flex flex-col gap-2">
          <div className="w-full h-[85px] flex justify-center">
            <span className="font-raleway font-normal text-[14px] leading-[150%] tracking-[0%] text-center align-middle text-[#050505] mb-auto">
              Trang chủ &gt; Tài nguyên &gt;{" "}
              <span className="font-raleway font-semibold text-[14px] leading-[150%] tracking-[0%] text-center align-middle">
                Blog
              </span>
            </span>
          </div>
          <div>
            <p className="font-raleway font-normal text-[64px] leading-[100px] tracking-[0%] text-center align-middle capitalize text-[#050505]">
              Blog{" "}
              <span
                className="font-raleway font-extrabold leading-[100px] tracking-[0%] align-middle capitalize bg-gradient-to-r from-[#53B086] to-[rgba(83,176,134,0.99)] bg-clip-text text-transparent"
                style={{
                  background:
                    "linear-gradient(90deg, #53B086 0%, rgba(83, 176, 134, 0.99) 27.5%), radial-gradient(17.7% 241.79% at 46.95% 25.05%, rgba(84, 171, 177, 0) 0%, rgba(84, 171, 177, 0.409141) 34.38%, rgba(133, 238, 179, 0.71) 51.52%, rgba(84, 171, 177, 0) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                FOSO
              </span>{" "}
              –
            </p>
            <p className="font-raleway font-normal text-[64px] leading-[100px] tracking-[0%] text-center align-middle capitalize text-[#050505]">
              Cập Nhật Tin Tức{" "}
              <span className="relative font-extrabold leading-[100px] tracking-[0%] text-center align-middle capitalize">
                Mới Nhất
                <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[273px] h-[28px] rounded-[40px] bg-[#A3EED6]"></span>
              </span>
            </p>
          </div>
          <div className="flex justify-center">
            <p className="font-raleway font-medium text-[18px] leading-[150%] tracking-[0%] align-middle text-[#33404A]">
              Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
            </p>
          </div>
        </div>
        <Image
          src="/icons/handwriting.svg"
          alt="Icon"
          width={195}
          height={158.91}
        />
      </div>
    </section>
  );
}
