import React from "react";

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
          <p className="text-xl">INTRODUCTION {">"} ABOUT US</p>
          <h1 className="text-3xl font-bold mt-2">ABOUT US</h1>
        </div>
        <div className="flex-col lg:flex-row gap-4">
          <div className="flex flex-col lg:flex-row gap-8 w-full mx-auto p-4">
            {/* Left Image Section */}
            <div className="w-full">
              <img
                src="windmill.jpg"
                alt="Wind turbines in a field"
                className="shadow-lg w-full"
              />
            </div>

            {/* Right Text Section */}
            <div className="w-full flex flex-col justify-center mt-10">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Welcome to PSI – a leading provider of testing and certification
                consultancy services with the most optimal solutions for our
                clients.
              </h1>
              <p className="text-gray-600 text-base mb-4">
                PSI's Electrical-Electronics Testing Laboratory is fully
                equipped with modern facilities, implementing a laboratory
                management system in compliance with ISO/IEC 17025:2017
                standards. It is operated by top experts who have undergone
                advanced training abroad and have extensive experience in this
                field.
              </p>
              <p className="text-gray-600 text-base">
                At PSI, you can be completely assured because our team of
                experts is highly trained and professionally developed by
                reputable international organizations. They consistently stay
                updated with the latest technological advancements. We are
                always ready to serve our clients with the guiding principles of
                RELIABILITY – DEDICATION – PROFESSIONALISM, aiming to deliver
                exceptional service quality to our customers.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 w-full mx-auto p-4 mt-15">
            {/* Left Section */}
            <div className="w-full">
              <div className="w-full flex flex-col justify-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  ABOUT US
                </h1>
                <p className="text-gray-600 text-base mb-4">
                  PSI's Electrical-Electronics Testing Laboratory is fully
                  equipped with modern facilities, implementing a laboratory
                  management system that meets the standards of ISO/IEC
                  17025:2017. It is operated by leading experts who have
                  undergone advanced training abroad and have years of
                  experience in this field.
                </p>
                <p className="text-gray-600 text-base">
                  At PSI, clients can rest assured as our team of experts is
                  professionally trained and developed by reputable
                  international organizations. They regularly update their
                  knowledge with the latest technological advancements. We are
                  always ready to serve our clients with the principles of
                  RELIABILITY – DEDICATION – PROFESSIONALISM, aiming to deliver
                  exceptional service quality.
                </p>
              </div>
            </div>

            {/* Right Section */}
            <img
              src="handshake.jpg"
              alt="Wind turbines in a field"
              className="shadow-lg w-full sm:w-2/5 h-auto"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-8 w-full mx-auto p-4 mt-15">
            {/* Left Section */}
            <img
              src="nhieu-nguoi.jpg"
              alt="Wind turbines in a field"
              className="shadow-lg w-full sm:w-2/5 h-auto"
            />

            {/* Right Section */}
            <div className="w-full">
              <div className="w-full flex flex-col justify-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  DEVELOPMENT HISTORY
                </h1>
                <p className="text-gray-600 text-base mb-4">
                  PSI's Electrical-Electronics Testing Laboratory is fully
                  equipped with modern facilities, implementing a laboratory
                  management system that adheres to the standards of ISO/IEC
                  17025:2017. The lab is operated by leading experts who have
                  undergone advanced training abroad and possess many years of
                  experience in the field.
                </p>
                <p className="text-gray-600 text-base">
                  At PSI, clients can have complete peace of mind knowing that
                  our team of experts is professionally trained and certified by
                  reputable international organizations. They continuously
                  update their skills with the latest technological
                  advancements. We are always ready to serve our clients with
                  the guiding principles of RELIABILITY – DEDICATION –
                  PROFESSIONALISM, ensuring the delivery of exceptional service
                  quality.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center p-6 text-gray-800 max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 w-full">
            <h1 className="text-2xl font-bold">VISION - CORE VALUES</h1>
            <p className="mt-4 text-xl bg-gray-200 p-4 shadow-md">
              With the vision of becoming the leading entity in the field of
              electrical-electronics testing in Vietnam, we continuously strive
              to exceed expectations and become a trusted partner for our
              clients, guided by the principles of
              <strong> RELIABILITY – DEDICATION – PROFESSIONALISM</strong>
            </p>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-2 gap-6 w-full">
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
              <p className="font-bold text-xl">Always do the right thing</p>
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
              <p className="font-bold text-xl">Work with complete dedication</p>
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
                Continuously learn and improve
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
                Always support and grow together
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
                <img
                  src="man.png"
                  alt="Người đàn ông"
                  className="h-60 sm:h-96 w-auto"
                />
              </div>

              {/* Phần bên phải: Quote */}
              <div className="w-3/5 h-full flex items-center justify-center px-8 text-center">
                <div>
                  <p className="text-xl font-bold text-gray-800 mb-2">
                    "Joining hands for safety and development is our mission!"
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
            NEED SUPPORT?
            </h2>
            <p className="mt-4 text-gray-700">
            Call our experts via the hotline
            </p>
            <a
              href="tel:+84866236288"
              className="block mt-2 font-bold text-[#0079a8] text-lg"
            >
              +84 866 236 288
            </a>
            <p className="mt-6 text-gray-700">Or through the channels below:</p>
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

          {/* Left: Image */}
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative z-10">
              <img
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
