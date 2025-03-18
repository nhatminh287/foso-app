import Image from "next/image";
const MenuBanner1 = () => {
  return (
    <div
      className="w-full h-[650px] rounded-3xl relative"
      style={{
        background:
          "linear-gradient(36.82deg, #013DA0 2.16%, #0142A9 12.83%, #0148B3 23.51%, #024EBC 34.18%, #0254C5 44.85%, #025ACE 55.53%, #0261D7 66.2%, #0267E1 76.87%, #036EEA 87.55%, #0375F3 98.22%)",
      }}
    >
      <Image
        src={"/images/dashboard.png"}
        width={425.76}
        height={262}
        objectFit="cover"
        alt=""
        className="absolute top-[53px] left-[8.06px]"
      />
      <div className="absolute top-[345.13px] left-[18px] scale-x-[-1] w-[136px] h-[123px] bg-transparent">
        <Image
          src={"/images/robo-remove-background.png"}
          width={136}
          height={123}
          objectFit="cover"
          alt=""
          className="w-full h-full"
        />
      </div>
      <Image
        src={"/icons/mrp.svg"}
        width={117.13}
        height={45.28}
        objectFit="cover"
        alt=""
        className="absolute top-[420.78px] right-[61.74px]"
      />
      <div
        className="w-[36px] h-[20px] absolute top-[420.78px] right-6 gap-[10px] p-[2px_4px] rounded-[2px] shadow-md text-center items-center flex"
        style={{
          background:
            "radial-gradient(45.83% 94.64% at 93.75% 3.57%, #1FC583 0%, #1F9285 100%)",
          boxShadow: "1px 1px 2px 0px #00000040",
        }}
      >
        <span className="font-lexend font-semibold text-[12px] leading-[16px] text-white align-middle">
          Beta
        </span>
      </div>
      <span className="absolute right-6 top-[378.78px] font-raleway font-bold text-[20px] leading-[150%] text-white">
        Miễn phí dùng thử
      </span>
      <button className="w-[318px] absolute bottom-[61.41px] h-[50px] flex justify-between p-[8px_24px] rounded-[40px] border-[1.5px] border-white left-1/2 transform -translate-x-1/2 items-center">
        <span className="font-raleway font-bold text-[14px] leading-[150%] capitalize text-[#ffff]">
          Trải nghiệm ngay
        </span>
        <Image
          src="/icons/up-arrow-icon-white.svg"
          alt="icon"
          width={34}
          height={34}
        />
      </button>
    </div>
  );
};

export default MenuBanner1;
