import React from "react";

export default function Recruit() {
  return (
    <div className="font-sans flex-col">
      {/* Background Section */}
      <div>
        <section
          className="absolute top-0 left-0 w-full h-[40rem] bg-cover bg-center"
          style={{
            backgroundImage: "url('/recruit.jpg')",
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
          <p className="text-xl">TUYỂN DỤNG {">"} TIN TỨC TUYỂN DỤNG </p>
          <h1 className="text-3xl font-bold mt-2">TIN TỨC TUYỂN DỤNG</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Column */}
          <div className="flex flex-col gap-4 w-full lg:w-2/3">
            {/* Left Info Box */}
            <div className="bg-gray-100 p-6 shadow-md rounded">
              <p className="font-semibold">
                Cùng khám phá cơ hội công việc và phát triển sự nghiệp tại PSI -
                Nơi bạn có cơ hội được học hỏi và toả sáng
              </p>
            </div>
            {/* Additional Content */}
            <div className="text-base leading-relaxed">
              <p>
                Phòng Thử nghiệm Điện-Điện tử của công ty PSI được trang bị đẩy
                đủ các trang thiết bị hiện đại, áp dụng hệ thống quản lý phòng
                thử nghiệm phù hợp với các chuẩn mực của ISO/IEC 17025:2017 và
                được vận hành bởi các chuyên gia hàng đầu đã được đào tạo chuyên
                sâu ở nước ngoài đồng thời có nhiều năm kinh nghiệm trong lĩnh
                vực này.
              </p>
              <h2 className="font-bold text-[#0079a8] text-2xl mt-24 mb-5">
                CON NGƯỜI & VĂN HOÁ PSI
              </h2>
              <p>
                Đến với PSI, Quý khách hàng hoàn toàn yên tâm bởi đội ngũ chuyên
                gia của PSI đều được đào tạo chuyên sâu và bài bản bởi các tổ
                chức uy tín tại nước ngoài và thường xuyên cập nhật kỹ thuật
                công nghệ mới. Chúng tôi luôn sẵn sàng phục vụ Quý khách hàng
                với tôn chỉ TIN CẬY – TẬN TÂM – CHUYÊN NGHIỆP nhằm mang đến chất
                lượng dịch vụ xuất sắc tới khách hàng.
              </p>
            </div>
          </div>
          {/* Right Info Box */}
          <div className="bg-[#0079a8] p-6 shadow-md rounded w-full h-1/2 lg:w-1/3">
            <h3 className="font-bold text-lg text-white">
              BẠN CẦN THÊM THÔNG TIN?
            </h3>
            <p className="mt-4 text-white">
              Hãy liên hệ ngay với chúng tôi để được giải đáp và hướng dẫn
            </p>
            <a
              href="tel:+84866236288"
              className="block mt-4 font-bold text-white"
            >
              +84 866 236 288
            </a>
            <button className="mt-4 bg-white text-[#0079a8] px-4 py-2 rounded">
              Chat với chúng tôi
            </button>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="bg-white w-full flex justify-center items-center relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center md:items-center max-w-4xl mx-auto relative">
          {/* Right: Support Info */}
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative z-10">
              <img
                src="/electric-man.png"
                alt="Support"
                className="h-[350px] md:h-[420px] w-auto"
              />
            </div>
          </div>

          {/* Left: Image */}
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
                <img src="/whatsapp.png" alt="Whatsapp" className="w-6 h-6" />{" "}
                Whatsapp
              </a>
              <a href="#" className="text-[#0079a8] flex items-center gap-2">
                <img src="/kakao.png" alt="Kakao" className="w-6 h-6" /> Kakao
              </a>
              <a href="#" className="text-[#0079a8] flex items-center gap-2">
                <img src="/wechat.png" alt="Wechat" className="w-6 h-6" />{" "}
                Wechat
              </a>
              <a href="#" className="text-[#0079a8] flex items-center gap-2">
                <img src="/zalo.png" alt="Zalo" className="w-6 h-6" /> Zalo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
