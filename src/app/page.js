import React from "react";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-sans flex-col">
      {/* Background Section */}
      <div>
        <section
          className="absolute top-0 left-0 w-full h-[40rem] bg-cover bg-center"
          style={{
            backgroundImage: "url('/background-introduction.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        ></section>
        <div className="absolute top-0 left-0 w-full h-full bg-white/50 backdrop-blur-[0.5px]"></div>
      </div>

      {/* Content Section */}
      <div className="relative flex-col mt-[13rem] px-4 lg:px-20 py-10">
        <div className="flex flex-col gap-6 translate-y-[-40px] mb-12">
          <p className="text-xl">GIỚI THIỆU {">"} VỀ CHÚNG TÔI</p>
          <h1 className="text-3xl font-bold mt-2">VỀ CHÚNG TÔI</h1>
        </div>
        <div className="flex-col lg:flex-row gap-4">
          <div className="flex flex-col lg:flex-row gap-8 w-full mx-auto p-4">
            {/* Left Image Section */}
            <div className="w-full">
              <Image
                src="windmill.jpg"
                alt="Wind turbines in a field"
                className="shadow-lg w-full"
              />
            </div>

            {/* Right Text Section */}
            <div className="w-full flex flex-col justify-center mt-10">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Chào mừng bạn đến với PSI - Nơi cung cấp dịch vụ thử nghiệm và
                tư vấn chứng nhận hàng đầu với giải pháp tối ưu nhất cho khách
                hàng.
              </h1>
              <p className="text-gray-600 text-base mb-4">
                Phòng Thử nghiệm Điện-Điện tử của công ty PSI được trang bị đầy
                đủ các trang thiết bị hiện đại, áp dụng hệ thống quản lý phòng
                thử nghiệm phù hợp với các chuẩn mực của ISO/IEC 17025:2017 và
                được vận hành bởi các chuyên gia hàng đầu đã được đào tạo chuyên
                sâu ở nước ngoài đồng thời có nhiều năm kinh nghiệm trong lĩnh
                vực này.
              </p>
              <p className="text-gray-600 text-base">
                Đến với PSI, Quý khách hàng hoàn toàn yên tâm bởi đội ngũ chuyên
                gia của PSI đều được đào tạo chuyên sâu và bài bản bởi các tổ
                chức uy tín tại nước ngoài và thường xuyên cập nhật kỹ thuật
                công nghệ mới. Chúng tôi luôn sẵn sàng phục vụ Quý khách hàng
                với tôn chỉ TIN CẬY - TẬN TÂM - CHUYÊN NGHIỆP nhằm mang đến chất
                lượng dịch vụ xuất sắc tới khách hàng.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 w-full mx-auto p-4 mt-15">
            {/* Left Section */}
            <div className="w-full">
              <div className="w-full flex flex-col justify-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  VỀ CHÚNG TÔI
                </h1>
                <p className="text-gray-600 text-base mb-4">
                  Phòng Thử nghiệm Điện-Điện tử của công ty PSI được trang bị
                  đẩy đủ các trang thiết bị hiện đại, áp dụng hệ thống quản lý
                  phòng thử nghiệm phù hợp với các chuẩn mực của ISO/IEC
                  17025:2017 và được vận hành bởi các chuyên gia hàng đầu đã
                  được đào tạo chuyên sâu ở nước ngoài đồng thời có nhiều năm
                  kinh nghiệm trong lĩnh vực này.
                </p>
                <p className="text-gray-600 text-base">
                  Đến với PSI, Quý khách hàng hoàn toàn yên tâm bởi đội ngũ
                  chuyên gia của PSI đều được đào tạo chuyên sâu và bài bản bởi
                  các tổ chức uy tín tại nước ngoài và thường xuyên cập nhật kỹ
                  thuật công nghệ mới. Chúng tôi luôn sẵn sàng phục vụ Quý khách
                  hàng với tôn chỉ TIN CẬY - TẬN TÂM - CHUYÊN NGHIỆP nhằm mang
                  đến chất lượng dịch vụ xuất sắc tới khách hàng.
                </p>
              </div>
            </div>

            {/* Right Section */}
            <Image
              src="handshake.jpg"
              alt="Wind turbines in a field"
              className="shadow-lg w-full sm:w-2/5 h-auto"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-8 w-full mx-auto p-4 mt-15">
            {/* Left Section */}
            <Image
              src="nhieu-nguoi.jpg"
              alt="Wind turbines in a field"
              className="shadow-lg w-full sm:w-2/5 h-auto"
            />

            {/* Right Section */}
            <div className="w-full">
              <div className="w-full flex flex-col justify-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  LỊCH SỬ PHÁT TRIỂN
                </h1>
                <p className="text-gray-600 text-base mb-4">
                  Phòng Thử nghiệm Điện-Điện tử của công ty PSI được trang bị
                  đẩy đủ các trang thiết bị hiện đại, áp dụng hệ thống quản lý
                  phòng thử nghiệm phù hợp với các chuẩn mực của ISO/IEC
                  17025:2017 và được vận hành bởi các chuyên gia hàng đầu đã
                  được đào tạo chuyên sâu ở nước ngoài đồng thời có nhiều năm
                  kinh nghiệm trong lĩnh vực này.
                </p>
                <p className="text-gray-600 text-base">
                  Đến với PSI, Quý khách hàng hoàn toàn yên tâm bởi đội ngũ
                  chuyên gia của PSI đều được đào tạo chuyên sâu và bài bản bởi
                  các tổ chức uy tín tại nước ngoài và thường xuyên cập nhật kỹ
                  thuật công nghệ mới. Chúng tôi luôn sẵn sàng phục vụ Quý khách
                  hàng với tôn chỉ TIN CẬY - TẬN TÂM - CHUYÊN NGHIỆP nhằm mang
                  đến chất lượng dịch vụ xuất sắc tới khách hàng.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center p-6 text-gray-800 max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 w-full">
            <h1 className="text-2xl font-bold">TẦM NHÌN - GIÁ TRỊ CỐT LÕI</h1>
            <p className="mt-4 text-xl bg-gray-200 p-4 shadow-md">
              Với tầm nhìn trở thành đơn vị dẫn đầu trong lĩnh vực thử nghiệm
              điện - điện tử tại Việt Nam, chúng tôi luôn nỗ lực vượt lên trên
              kỳ vọng và trở thành đối tác tin cậy của khách hàng với tôn chỉ
              <strong> TIN CẬY - TẬN TÂM - CHUYÊN NGHIỆP.</strong>
            </p>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {/* Value 1 */}
            <div className="flex items-center gap-4 bg-blue-100 min-h-32 p-4 shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="font-bold text-xl">Luôn làm điều đúng đắn</p>
            </div>

            {/* Value 2 */}
            <div className="flex items-center gap-4 bg-yellow-100 min-h-32 p-4 shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-500 text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c1.657 0 3-1.567 3-3.5S13.657 1 12 1s-3 1.567-3 3.5S10.343 8 12 8z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10.5v10.5"
                  />
                </svg>
              </div>
              <p className="font-bold text-xl">
                Làm việc với tất cả sự tận tâm
              </p>
            </div>

            {/* Value 3 */}
            <div className="flex items-center gap-4 bg-gray-200 min-h-32 p-4 shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-500 text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <p className="font-bold text-xl">
                Không ngừng học hỏi và cải tiến
              </p>
            </div>

            {/* Value 4 */}
            <div className="flex items-center gap-4 bg-blue-50 min-h-32 p-4 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-400 text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 9l4 4m0 0l-4 4m4-4H7"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 15l-4-4m0 0l4-4m-4 4h14"
                  />
                </svg>
              </div>
              <p className="font-bold text-xl">
                Luôn hỗ trợ và cùng nhau phát triển
              </p>
            </div>
          </div>
          <div className="relative flex items-center gap-6 mt-6 bg-gray-200 shadow-md w-full h-60 sm:h-96 overflow-hidden">
            {/* Nền logo mờ */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('logo.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.05,
              }}
            ></div>

            {/* Overlay để làm mờ hoặc thêm màu sắc nếu cần */}
            <div className="absolute inset-0"></div>

            {/* Nội dung */}
            <div className="relative flex w-full h-full">
              {/* Phần bên trái: Hình ảnh */}
              <div className="w-2/5 h-full flex items-center justify-center">
                <Image
                  src="man.png"
                  alt="Người đàn ông"
                  className="h-60 sm:h-96 w-auto"
                />
              </div>

              {/* Phần bên phải: Quote */}
              <div className="w-3/5 h-full flex items-center justify-center px-8 text-center">
                <div>
                  <p className="text-xl font-bold text-gray-800 mb-2">
                    "Cùng chung tay vì sự an toàn & phát triển chính là sứ mệnh
                    của chúng tôi!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="bg-white w-full flex justify-center items-center relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center md:items-center max-w-4xl mx-auto relative">
          {/* Right: Support Info */}
          <div className="md:w-1/2 mt-6 md:mt-0 md:pr-10 text-left md:text-left">
            <h2 className="text-2xl font-bold text-[#0079a8]">
              BẠN CẦN HỖ TRỢ?
            </h2>
            <p className="mt-4 text-gray-700">
              Hãy gọi cho chuyên gia của chúng tôi qua số hotline
            </p>
            <a
              href="tel:+84866236288"
              className="block mt-2 font-bold text-[#0079a8] text-lg"
            >
              +84 866 236 288
            </a>
            <p className="mt-6 text-gray-700">Hoặc qua các kênh bên dưới:</p>
            <div className="mt-4 flex justify-center md:justify-start gap-6">
              <a href="#" className="text-[#0079a8] flex items-center gap-2">
                <Image src="/whatsapp.png" alt="Whatsapp" className="w-6 h-6" />{" "}
                Whatsapp
              </a>
              <a href="#" className="text-[#0079a8] flex items-center gap-2">
                <Image src="/kakao.png" alt="Kakao" className="w-6 h-6" /> Kakao
              </a>
              <a href="#" className="text-[#0079a8] flex items-center gap-2">
                <Image src="/wechat.png" alt="Wechat" className="w-6 h-6" />{" "}
                Wechat
              </a>
              <a href="#" className="text-[#0079a8] flex items-center gap-2">
                <Image src="/zalo.png" alt="Zalo" className="w-6 h-6" /> Zalo
              </a>
            </div>
          </div>

          {/* Left: Image */}
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative z-10">
              <Image
                src="/girl.png"
                alt="Support"
                className="h-[350px] md:h-[420px] w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
