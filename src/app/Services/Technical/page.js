import React from "react";

export default function Technical() {
  return (
    <div className="font-sans flex-col">
      {/* Background Section */}
      <div>
        <section
          className="absolute top-0 left-0 w-full h-[40rem] bg-cover bg-center"
          style={{
            backgroundImage: "url('/background-technical-service.jpg')",
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
          <p className="text-xl">DỊCH VỤ {">"} DỊCH VỤ TƯ VẤN KỸ THUẬT </p>
          <h1 className="text-3xl font-bold mt-2">DỊCH VỤ TƯ VẤN KỸ THUẬT </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Column */}
          <div className="flex flex-col gap-4 w-full lg:w-2/3">
            {/* Left Info Box */}
            <div className="bg-gray-100 p-6 shadow-md rounded">
              <p className="font-semibold">
                Bạn đang lúng túng khi lập phòng thử nghiệm điện - điện tử? Bạn
                cần tư vấn hỗ trợ trong khi nghiên cứu phát triển sản phẩm? Hay
                đơn giản là bạn cần dịch thuật văn bản kĩ thuật chuyên ngành?
                Dịch vụ kỹ thuật của chúng tôi sẽ đáp ứng các yêu cầu đó!
              </p>
            </div>
            {/* Additional Content */}
            <div className="text-base leading-relaxed">
              Đội ngũ chuyên gia kỹ thuật của chúng tôi bao gồm nhiều Tiến sỹ,
              Thạc sỹ tốt nghiệp ở nước ngoài và đã được đào tạo chuyên sâu ở
              các tổ chức thử nghiệm uy tín trên thế giới như UL (Mỹ), KTR (Hàn
              Quốc)...
              <br />
              <ul className="text-base list-disc mt-5 mb-5">
                <p>
                  Với kinh nghiệm nhiều năm hoạt động trong lĩnh vực thử nghiệm
                  và làm dịch vụ liên quan, chúng tôi hỗ trợ khách hàng các nội
                  dung sau:
                </p>
                <li className="mt-2 ml-5">
                  Tư vấn set up phòng thử nghiệm điện - điện tử
                </li>
                <li className="mt-2 ml-5">Tư vấn ISO 17025</li>
                <li className="mt-2 ml-5">
                  Tư vấn Nghiên cứu Phát triển sản phẩm
                </li>
                <li className="mt-2 ml-5">
                  Tư vấn kỹ thuật theo yêu cầu đặc thù của khách hàng
                </li>
                <li className="mt-2 ml-5">
                  Dịch thuật Kỹ thuật và các văn bản tiêu chuẩn, quy chuẩn...
                </li>
              </ul>
              <div class="flex flex-row items-center mt-5">
                <div class="w-1/2 flex justify-center">
                  <img
                    src="/TS-LeNgocThuc.png"
                    alt="TS. Lê Ngọc Thức"
                    class="rounded-full w-32 h-32 sm:w-64 sm:h-64 object-cover"
                  />
                </div>
                <div class="w-1/2 flex flex-col">
                  <h3 class="text-xl font-bold">TS. Lê Ngọc Thức</h3>
                  <p class="text-gray-700">Giám đốc - Chuyên gia trưởng </p>
                </div>
              </div>
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

        {/* Services by Category */}
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="p-4 shadow-md rounded bg-[#f0eeee] text-left">
              <img
                src="/technical-service-1.png"
                alt="Pin Lithium"
                className="mx-auto h-64 mb-4"
              />
              <h3 className="font-bold text-2xl pb-5 text-[#0079a8]">
                Tư vấn Kỹ thuật PTN
              </h3>
              <p>Thử nghiệm tính an toàn theo QCVN 101 do Bộ TT&TT ban hành</p>
            </div>
            <div className="p-4 shadow-md rounded bg-[#f0eeee] text-left">
              <img
                src="/technical-service-2.png"
                alt="Pin/Ắc quy xe điện"
                className="mx-auto h-64 mb-4"
              />
              <h3 className="font-bold text-2xl pb-5 text-[#0079a8]">
                Tư vấn R&D
              </h3>
              <p>
                Thử nghiệm tính an toàn theo QCVN 76 & 91 do Bộ GTVT ban hành
              </p>
            </div>
            <div className="p-4 shadow-md rounded bg-[#f0eeee] text-left">
              <img
                src="/technical-service-3.png"
                alt="Pin/Ắc quy khác"
                className="mx-auto h-64 mb-4"
              />
              <h3 className="font-bold text-2xl pb-5 text-[#0079a8]">
                Dịch thuật Kỹ thuật
              </h3>
              <p>Thử nghiệm tính an toàn theo các tiêu chuẩn hiện hành khác </p>
            </div>
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
                src="/girl-2.png"
                alt="Support"
                className="h-[350px] md:h-[420px] w-auto"
              />
            </div>
          </div>

          {/* Left: Image */}
          <div className="md:w-1/2 mt-6 md:mt-0 md:pr-10 text-left md:text-left">
            <h2 className="text-2xl font-bold text-[#0079a8]">
              Bạn CẦN HỖ TRỢ?
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
            <p className="mt-6 text-gray-700">Hoặc qua các kênh bên dưới: </p>
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
