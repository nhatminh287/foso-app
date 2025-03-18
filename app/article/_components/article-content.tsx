"use client";

import Image from "next/image";
import QuotationMark from "./quotation-mark";

const ArticleContent = () => {
  return (
    <div className="article-content prose prose-lg max-w-none flex flex-col gap-6 font-raleway">
      {/* Title */}
      <div className="flex flex-col gap-4">
        <div className="w-[114px] h-[26px] gap-[10px] px-2 py-[4px] rounded-lg bg-[#E2F0FE]">
          <p className="font-raleway font-medium text-[12px] leading-[150%] text-[#0F4F9E]">
            Quản lý sản xuất
          </p>
        </div>
        <p className="font-raleway font-extrabold text-[36px] leading-[100%] tracking-[0] align-middle capitalize text-[#050505]">
          Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết
        </p>
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div className="w-[64px] h-[64px] gap-[10px] px-[5px] py-[6px] rounded-[40px] border border-[#F1F5F7] bg-white items-center flex">
              <Image
                src="/icons/leaf.svg"
                width={33.69}
                height={32}
                alt=""
                className="mx-auto"
              />
            </div>
            <div>
              <span className="font-raleway font-medium text-[14px] leading-[150%] text-[#667F93]">
                Tác giả
              </span>
              <p className="font-raleway font-bold text-[16px] leading-[150%] text-[#33404A]">
                FOSO Creator
              </p>
            </div>
          </div>
          <div className="flex items-center font-raleway font-medium text-[16px] leading-[150%] tracking-[0%] text-[#667F93]">
            <div className="flex gap-2">
              <Image src="/icons/calendar.svg" width={24} height={24} alt="" />
              <span>Cập nhật vào: 17/11/2022</span>
            </div>
            <div className="w-6 -rotate-90 border border-[#D9E1E7]" />
            <div className="flex gap-2">
              <Image src="/icons/clock.svg" width={24} height={24} alt="" />
              <span>10 phút đọc</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="relative h-[600px] w-full">
          <Image
            src="/images/5s.png"
            fill
            alt=""
            className="rounded-sm object-cover"
          />
        </div>
        <div className="w-full text-center mt-2">
          <p className="font-raleway font-normal text-[16px] leading-[150%] text-[#667F93]">
            Quy trình 5s là gì?
          </p>
        </div>
      </div>
      <div className="w-full relative">
        <QuotationMark
          className="absolute -top-6 transform -rotate-180"
          color="#15AA7A"
          size={48}
        />
        <p className="3xl:w-[778px] w-full mx-auto font-raleway font-light italic text-[20px] leading-[24px] text-center text-[#33404A]">
          Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây
          dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn
          thông tin chi tiết về mô hình này cũng như yếu tố tạo nên thành công
          của quy trình bạn nhé.
        </p>
      </div>
      {/* Section 1 */}
      <section id="section-1" className="flex flex-col gap-6">
        <h2 className="text-[16px] font-raleway font-extrabold leading-[150%] tracking-[0%] text-[#15AA7A]">
          1. Quy trình 5S là gì?
        </h2>
        {/* content for Section 1 */}
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản
          xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào Nhật
          Bản. 
        </p>
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng
          bởi tính hiệu quả mà 5S mang lại. Quy trình này bao gồm 5 chữ S đầu
          trong tiếng Nhật:
        </p>{" "}
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          <ul className="list-disc list-outside ml-6">
            <li>
              <span className="font-raleway font-medium text-[16px] leading-[150%] tracking-[0] text-[#15AA7A]">
                Seiri
              </span>{" "}
              (Ngăn nắp)
            </li>
            <li>
              <span className="font-raleway font-medium text-[16px] leading-[150%] tracking-[0] text-[#15AA7A]">
                Seiso
              </span>{" "}
              (Sạch sẽ)
            </li>
            <li>
              <span className="font-raleway font-medium text-[16px] leading-[150%] tracking-[0] text-[#15AA7A]">
                Seiton
              </span>{" "}
              (Trật tự)
            </li>
            <li>
              <span className="font-raleway font-medium text-[16px] leading-[150%] tracking-[0] text-[#15AA7A]">
                Shitsuke
              </span>{" "}
              (Kỷ luật)
            </li>
            <li>
              <span className="font-raleway font-medium text-[16px] leading-[150%] tracking-[0] text-[#15AA7A]">
                Seiketsu
              </span>{" "}
              (Tiêu chuẩn hóa)
            </li>
          </ul>
        </p>
      </section>

      {/* Section 2 */}
      <section id="section-2" className="flex flex-col gap-6">
        <h2 className="text-[16px] font-raleway font-extrabold leading-[150%] tracking-[0%] text-[#15AA7A]">
          2. Lợi ích quy trình 5S đem lại
        </h2>
        {/* content for Section 2 */}
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi
          bước của quy trình với mục đích cải tiến môi trường làm việc của doanh
          nghiệp.
        </p>
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ
          tạo nên một môi trường được sắp xếp theo nguyên tắc logic. Nơi làm
          việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị
          trí quy định và dễ dàng tìm kiếm khi cần thiết.
        </p>
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen
          tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào tạo nên một văn hóa
          doanh nghiệp tích cực.
        </p>
      </section>
      {/* Image */}
      <div>
        <div className="relative h-[600px] w-full">
          <Image
            src="/images/why.png"
            fill
            alt=""
            className="rounded-sm object-cover"
          />
        </div>
        <div className="w-full text-center mt-2">
          <p className="font-raleway font-normal text-[16px] leading-[150%] text-[#667F93]">
            Tại sao doanh nghiệp cần quy trình 5S?
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <section id="section-3" className="flex flex-col gap-6">
        <h2 className="text-[16px] font-raleway font-extrabold leading-[150%] tracking-[0%] text-[#15AA7A]">
          3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
        </h2>
        {/* content Section 3 */}
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên
          toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét
          tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn
          nên lựa chọn quy trình
        </p>

        {/* Subsection 3.1 */}
        <h4
          id="section-3-1"
          className="font-raleway font-bold text-[16px] leading-[150%] tracking-[0] text-[#15AA7A]"
        >
          3.1. Cải thiện rõ nét môi trường làm việc
        </h4>
        {/* Content for Subsection 3.1 */}
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng
          hơn và có tổ chức hơn. Điều này tạo ra một không gian làm việc hiệu
          quả cho từng cá nhân trong doanh nghiệp.
        </p>

        {/* Subsection 3.2 */}
        <h4
          id="section-3-2"
          className="font-raleway font-bold text-[16px] leading-[150%] tracking-[0] text-[#15AA7A]"
        >
          3.2 Tiết kiệm thời gian đáng kể
        </h4>
        {/* Content for Subsection 3.2 */}
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời
          gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ dùng, máy
          móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự,
          mọi sự tìm kiếm đều trở nên dễ dàng.
        </p>

        {/* Subsection 3.3 */}
        <h4
          id="section-3-3"
          className="font-raleway font-bold text-[16px] leading-[150%] tracking-[0] text-[#15AA7A]"
        >
          3.3 Tăng năng suất làm việc
        </h4>
        {/* Content for Subsection 3.3 */}
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng
          cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm và sử dụng
          các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng
          năng suất làm việc.
        </p>

        {/* Subsection 3.4 */}
        <h4
          id="section-3-4"
          className="font-raleway font-bold text-[16px] leading-[150%] tracking-[0] text-[#15AA7A]"
        >
          3.4 Tiết kiệm chi phí
        </h4>
        {/* Content for Subsection 3.4 */}
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử
          dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu chi phí
          vận hành đáng kể cho doanh nghiệp của mình.
        </p>

        {/* Subsection 3.5 */}
        <h4
          id="section-3-5"
          className="font-raleway font-bold text-[16px] leading-[150%] tracking-[0] text-[#15AA7A]"
        >
          3.5 Tăng chất lượng sản phẩm
        </h4>
        {/* Content for Subsection 3.5 */}
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó,
          giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất không
          mong muốn.
        </p>
      </section>

      {/* hình minh họa */}
      <div>
        <div className="relative h-[600px] w-full">
          <Image
            src="/images/step.png"
            fill
            alt=""
            className="rounded-sm object-cover"
          />
        </div>
        <div className="w-full text-center">
          <p className="font-raleway font-normal text-[16px] leading-[150%] text-[#667F93] mt-2">
            Quy trình 5s gồm các bước
          </p>
        </div>
      </div>

      {/* Section 4 */}
      <section id="section-4" className="flex flex-col gap-6">
        <h2 className="text-[16px] font-raleway font-extrabold leading-[150%] tracking-[0%] text-[#15AA7A]">
          4. Quy trình 5S gồm các bước:
        </h2>
        {/* Introduction for Section 4 */}
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả
          làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm bước cơ
          bản sau:
        </p>
        {/* Subsection 4.1 */}
        <h4
          id="section-4-1"
          className="font-raleway font-bold text-[16px] leading-[150%] tracking-[0] text-[#15AA7A]"
        >
          4.1 Seiri (Ngăn nắp)
        </h4>
        {/* Content for Subsection 4.1 */}
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm
          tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo ra một
          không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.
        </p>

        {/* Subsection 4.2 */}
        <h4
          id="section-4-2"
          className="font-raleway font-bold text-[16px] leading-[150%] tracking-[0] text-[#15AA7A]"
        >
          4.2 Seiton (Sắp xếp)
        </h4>
        {/* Content for Subsection 4.2 */}
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài
          liệu trong doanh nghiệp một cách gọn gàng để giúp tìm kiếm và sử dụng
          chúng một cách dễ dàng.
        </p>

        {/* Subsection 4.3 */}
        <h4
          id="section-4-3"
          className="font-raleway font-bold text-[16px] leading-[150%] tracking-[0] text-[#15AA7A]"
        >
          4.3 Seiso (Vệ sinh)
        </h4>
        {/* Content for Subsection 4.3 */}
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong
          doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ. Và việc vệ
          sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và
          tăng cường sức khỏe cho mỗi nhân viên.
        </p>

        {/* Subsection 4.4 */}
        <h4
          id="section-4-4"
          className="font-raleway font-bold text-[16px] leading-[150%] tracking-[0] text-[#15AA7A]"
        >
          4.4 Seiketsu (Tiêu chuẩn hóa)
        </h4>
        {/* Content for Subsection 4.4 */}
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp
          đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử dụng các
          dụng cụ, thiết bị, tài liệu.
        </p>

        {/* Subsection 4.5 */}
        <h4
          id="section-4-5"
          className="font-raleway font-bold text-[16px] leading-[150%] tracking-[0] text-[#15AA7A]"
        >
          4.5 Shitsuke (Kỷ luật)
        </h4>
        {/* Content for Subsection 4.5 */}
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai
          trò quan trọng trong duy trì tính hiệu quả của quy tắc 5S trong dài
          hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát
          chặt chẽ để đảm bảo mọi người trong tổ chức duy trì và tuân thủ theo
          quy trình.
        </p>
      </section>
      <div>
        <div className="relative h-[600px] w-full">
          <Image
            src="/images/step-2.png"
            fill
            alt=""
            className="rounded-sm object-cover"
          />
        </div>
        <div className="w-full text-center mt-2">
          <p className="font-raleway font-normal text-[16px] leading-[150%] text-[#667F93]">
            Các bước thực hiện quy trình 5s
          </p>
        </div>
      </div>

      {/* Section 5 */}
      <section id="section-5" className="flex flex-col gap-6">
        <h2 className="text-[16px] font-raleway font-extrabold leading-[150%] tracking-[0%] text-[#15AA7A]">
          5. Quy trình được thực hiện như sau
        </h2>
        {/* Content Section 5 */}
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên
          toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét
          tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn
          nên lựa chọn quy trình.
        </p>

        {/* Subsection 5.1 */}
        <h4
          id="section-5-1"
          className="font-raleway font-bold text-[16px] leading-[150%] tracking-[0] text-[#15AA7A]"
        >
          5.1 Giai đoạn chuẩn bị
        </h4>
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra
          điều hành và quản lý quá trình thực hiện quy trình 5S. Việc phân bổ cụ
          thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S hiệu quả hơn.
        </p>

        {/* Subsection 5.2 */}
        <h4
          id="section-5-2"
          className="font-raleway font-bold text-[16px] leading-[150%] tracking-[0] text-[#15AA7A]"
        >
          5.2 Triển khai rộng rãi
        </h4>
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          Đầu tiên, doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình
          5S để tất cả mọi người trong doanh nghiệp nắm rõ và áp dụng vào công
          việc của họ.
        </p>

        {/* Subsection 5.3 */}
        <h4
          id="section-5-3"
          className="font-raleway font-bold text-[16px] leading-[150%] tracking-[0] text-[#15AA7A]"
        >
          5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp
        </h4>
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          Đây là bước có thể khiến mọi người không hào hứng nhất trong quy
          trình. Doanh nghiệp nên tuyên truyền tích cực và tạo không khí hứng
          khởi cho từng cá nhân.
        </p>

        {/* Subsection 5.4 */}
        <h4
          id="section-5-4"
          className="font-raleway font-bold text-[16px] leading-[150%] tracking-[0] text-[#15AA7A]"
        >
          5.4 Sàng lọc, sắp xếp và đánh giá
        </h4>
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          Sau khi đã vệ sinh toàn bộ doanh nghiệp, doanh nghiệp cần đưa ra tiêu
          chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học
          hơn, hiệu quả hơn và dễ dàng tìm kiếm sau này.
        </p>

        {/* Subsection 5.5 */}
        <h4
          id="section-5-5"
          className="font-raleway font-bold text-[16px] leading-[150%] tracking-[0] text-[#15AA7A]"
        >
          5.5 Đánh giá
        </h4>
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          Sau khi hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải
          tiến và xem xét liệu có cần cải tiến phương diện nào trong quy trình
          5S hay không.
        </p>
      </section>

      {/* Section 6 */}
      <section id="section-6" className="flex flex-col gap-6">
        <h2 className="text-[16px] font-raleway font-extrabold leading-[150%] tracking-[0%] text-[#15AA7A]">
          6. Quy trình 5S có giống với Kaizen?
        </h2>
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay
          không? Quy trình 5S với Kaizen là hai khái niệm khác nhau, nhưng giữa
          chúng có mối quan hệ chặt chẽ với nhau.
        </p>
        <div className="3xl:w-[900px] w-full h-[76px] gap-[10px] p-[12px_16px_8px_36px] border-l-[3px] border-[#15AA7A]">
          <p className="text-[20px] font-raleway font-light italic leading-[28px] tracking-[0%] text-[#33404A]">
            Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong
            doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang
            tính liên tục và bền vững. 
          </p>
        </div>
        <div className="3xl:w-[900px] w-full h-[76px] gap-[10px] p-[12px_16px_8px_36px] border-l-[3px] border-[#15AA7A]">
          <p className="text-[20px] font-raleway font-light italic leading-[28px] tracking-[0%] text-[#33404A]">
            Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến
            trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt,
            tiêu chuẩn hóa và kỷ luật trong môi trường làm việc. 
          </p>
        </div>
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc
          này đóng vai trò quan trọng trong việc tạo ra môi trường làm việc sạch
          sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong
          quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền
          tảng vững chắc cho các hoạt động cải tiến tiếp theo. 
        </p>
      </section>

      {/* Section 7 */}
      <section id="section-7" className="flex flex-col gap-6">
        <h2 className="text-[16px] font-raleway font-extrabold leading-[150%] tracking-[0%] text-[#15AA7A]">
          7. Đối tượng nào nên áp dụng 5S?
        </h2>
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở
          nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy nhiên,
          5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành
          chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ.
        </p>
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp,
          các trang thiết bị và vật dụng phải được quản lý và sử dụng hiệu quả.
        </p>
      </section>
      <div>
        <div className="relative h-[600px] w-full">
          <Image
            src="/images/factor.png"
            fill
            alt=""
            className="rounded-sm object-cover"
          />
        </div>
        <div className="w-full text-center mt-2">
          <p className="font-raleway font-normal text-[16px] leading-[150%] text-[#667F93]">
            Tại sao doanh nghiệp cần quy trình 5S?
          </p>
        </div>
      </div>
      {/* Section 8 */}
      <section id="section-8" className="flex flex-col gap-6">
        <h2 className="text-[16px] font-raleway font-extrabold leading-[150%] tracking-[0%] text-[#15AA7A]">
          8. Các yếu tố tạo nên thành công cho quy trình 5S
        </h2>
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          Và những nhân tố quyết định đến quá trình thành công của quy trình
          nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:
        </p>
        <ul className="list-disc font-light list-outside ml-6">
          <li>
            <span className="font-raleway text-[16px] leading-[150%] tracking-[0] ">
              Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp.
            </span>{" "}
            Bởi đây yếu tố quan trọng nhất để quyết định doanh nghiệp có áp dụng
            quy tắc này hay không.
          </li>
          <li>
            <span className="font-raleway text-[16px] leading-[150%] tracking-[0] ">
              Chương trình, kế hoạch thực hiện quy trình:
            </span>{" "}
            Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý
            tưởng, kế hoạch thực hiện triển khai 5S.
          </li>
          <li>
            <span className="font-raleway text-[16px] leading-[150%] tracking-[0] ">
              Sự tự nguyện tham gia của toàn thể nhân viên:
            </span>{" "}
            Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện thực
            hiện vì lợi ích chung của tổ chức, của doanh nghiệp.
          </li>
        </ul>
        <p className="font-raleway font-light text-[16px] leading-[150%]">
          Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là
          các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay vào triển
          khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ
          ích như trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn
          phát triển, cải tiến vượt bậc trong tương lai.
        </p>
      </section>

      {/* emotion section*/}
      <div
        className="flex justify-center py-6 rounded-3xl"
        style={{
          boxShadow:
            "0px 1px 2px 0px rgba(18, 18, 23, 0.06), 0px 1px 3px 0px rgba(18, 18, 23, 0.10)",
        }}
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 mx-auto">
            <p className="font-raleway font-extrabold text-[20px] leading-[150%] text-center">
              Bạn thấy bài viết như thế nào?
            </p>
            <span className="font-raleway font-medium text-[16px] leading-[150%] text-center">
              4 phản hồi
            </span>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col w-[90px] h-[109px] gap-[4px] rounded-[4px] border-[#10805B] p-[4px]">
              <Image
                src="/images/thumb.png"
                width={48}
                height={48}
                alt=""
                className="mx-auto"
              />
              <span className="mx-auto font-raleway text-[16px] font-bold leading-[150%] text-center text-[#10805B]">
                1
              </span>
              <span className="mx-auto font-raleway text-[14px] font-medium leading-[150%] text-center text-[#10805B]">
                Hữu ích
              </span>
            </div>
            <div className="flex flex-col w-[90px] h-[109px] gap-[4px] rounded-[4px] p-[4px]">
              <Image src="/images/heart.png" width={48} height={48} alt="" className="mx-auto" />
              <span className="mx-auto font-raleway text-[16px] font-bold leading-[150%] text-center text-[#33404A]">
                2
              </span>
              <span className="mx-auto font-raleway text-[14px] font-medium leading-[150%] text-center text-[#33404A]">
                Yêu thích
              </span>
            </div>
            <div className="flex flex-col w-[90px] h-[109px] gap-[4px] rounded-[4px] p-[4px]">
              <Image
                src="/images/star-struck.png"
                width={48}
                height={48}
                alt=""
              />
              <span className="mx-auto font-raleway text-[16px] font-bold leading-[150%] text-center text-[#33404A]">
                0
              </span>
              <span className="mx-auto font-raleway text-[14px] font-medium leading-[150%] text-center text-[#33404A]">
                Thú vị
              </span>
            </div>
            <div className="flex flex-col w-[90px] h-[109px] gap-[4px] rounded-[4px] p-[4px]">
              <Image src="/images/husted.png" width={48} height={48} alt="" className="mx-auto" />
              <span className="mx-auto font-raleway text-[16px] font-bold leading-[150%] text-center text-[#33404A]">
                1
              </span>
              <span className="mx-auto font-raleway text-[14px] font-medium leading-[150%] text-center text-[#33404A]">
                Bất ngờ
              </span>
            </div>
            <div className="flex flex-col w-[90px] h-[109px] gap-[4px] rounded-[4px] p-[4px]">
              <Image src="/images/boring.png" width={48} height={48} alt="" className="mx-auto" />
              <span className="mx-auto font-raleway text-[16px] font-bold leading-[150%] text-center text-[#33404A]">
                0
              </span>
              <span className="mx-auto font-raleway text-[14px] font-medium leading-[150%] text-center text-[#33404A]">
                Nhàm chán
              </span>
            </div>
            <div className="flex flex-col w-[90px] h-[109px] gap-[4px] rounded-[4px] p-[4px]">
              <Image src="/images/angry.png" width={48} height={48} alt="" className="mx-auto" />
              <span className="mx-auto font-raleway text-[16px] font-bold leading-[150%] text-center text-[#33404A]">
                0
              </span>
              <span className="mx-auto font-raleway text-[14px] font-medium leading-[150%] text-center text-[#33404A]">
                Tức giận
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleContent;
