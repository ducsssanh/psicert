import React from "react";

export default function Import() {
  return (
    <div className="font-sans flex-col">
      {/* Background Section */}
      <div>
        <section
          className="absolute top-0 left-0 w-full h-[40rem] bg-cover bg-center"
          style={{
            backgroundImage: "url('/background-import.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
            transform: "scaleX(-1)",
          }}
        ></section>
        <div className="absolute top-0 left-0 w-full h-full bg-white/50 backdrop-blur-[0.5px]"></div>
      </div>

      {/* Content Section */}
      <div className="relative flex-col mt-[13rem] px-4 lg:px-20 py-10">
        <div className="flex flex-col gap-6 translate-y-[-40px] mb-12">
          <p className="text-xl">DỊCH VỤ {">"} DỊCH VỤ NHẬP KHẨU UỶ THÁC </p>
          <h1 className="text-3xl font-bold mt-2">
            DỊCH VỤ NHẬP KHẨU UỶ THÁC{" "}
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Column */}
          <div className="flex flex-col gap-4 w-full lg:w-2/3">
            {/* Left Info Box */}
            <div className="bg-gray-100 p-6 shadow-md rounded">
              <p className="font-semibold">
                PSI tự hào là đơn vị hàng đầu trong lĩnh vực thử nghiệm pin với
                trang thiết bị hiện đại và đội ngũ chuyên gia được đào tạo
                chuyên sâu & giàu kinh nghiệm
              </p>
            </div>
            {/* Additional Content */}
            <div className="text-base leading-relaxed">
              PSI đã được Bộ Thông tin và Truyền thông (Bộ TT&TT) chỉ định thực
              hiện việc thử nghiệm an toàn điện điện cho các thiết bị đầu cuối
              viễn thông và thiết bị nghe nhìn, như Máy tính cá nhân để bàn, máy
              tính xách tay, máy tính bảng, tivi, điện thoại DECT, set-top-box…
              theo QCVN 132:2022/BTTTT (IEC 62368-1:2018).
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
                src="/import-1.jpg"
                alt="Pin Lithium"
                className="mx-auto h-64 mb-4"
              />
              <h3 className="font-bold text-2xl pb-5 text-[#0079a8]">
                Pin Lithium cho thiết bị cầm tay
              </h3>
              <p>Thử nghiệm tính an toàn theo QCVN 101 do Bộ TT&TT ban hành</p>
            </div>
            <div className="p-4 shadow-md rounded bg-[#f0eeee] text-left">
              <img
                src="/import-2.jpg"
                alt="Pin/Ắc quy xe điện"
                className="mx-auto h-64 mb-4"
              />
              <h3 className="font-bold text-2xl pb-5 text-[#0079a8]">
                Pin/ Ắc quy xe điện
              </h3>
              <p>
                Thử nghiệm tính an toàn theo QCVN 76 & 91 do Bộ GTVT ban hành
              </p>
            </div>
            <div className="p-4 shadow-md rounded bg-[#f0eeee] text-left">
              <img
                src="/import-3.jpg"
                alt="Pin/Ắc quy khác"
                className="mx-auto h-64 mb-4"
              />
              <h3 className="font-bold text-2xl pb-5 text-[#0079a8]">
                Pin/ Ắc quy khác
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
                src="/import-girl.png"
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
