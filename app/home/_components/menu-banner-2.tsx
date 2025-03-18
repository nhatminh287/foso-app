import Image from "next/image";
const MenuBanner2 = () => {
  return (
    <div
      className="w-full h-[650px] rounded-3xl relative"
      style={{
        background:
          "linear-gradient(357.92deg, #013DA0 2.23%, #0142A9 12.81%, #0148B3 23.39%, #024EBC 33.96%, #0254C5 44.54%, #025ACE 55.12%, #0261D7 65.7%, #0267E1 76.28%, #036EEA 86.86%, #0375F3 97.44%)",
      }}
    >
      <Image
        src={"/images/image-banner2.svg"}
        width={472.09320068359375}
        height={399.3992614746094}
        objectFit="cover"
        alt=""
        className="absolute top-[37px] "
      />
      <span className="absolute top-[460px] left-1/2 transform -translate-x-1/2 font-raleway font-bold text-[20px] leading-[150%] w-[319px] h-[60px] text-white">
        Gia nhập cộng đồng FMRP Việt – Kết nối, chia sẻ, cùng phát triển!
      </span>
      <button className="w-[318px] absolute bottom-[56px] h-[50px] flex justify-between p-[8px_24px] rounded-[40px] border-[1.5px] border-white left-1/2 transform -translate-x-1/2 items-center">
        <span className="font-raleway font-bold text-[14px] leading-[150%] capitalize text-[#ffff]">
          tham gia ngay
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

export default MenuBanner2;
