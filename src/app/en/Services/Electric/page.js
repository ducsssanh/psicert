import React from "react";
import Image from 'next/image';

export default function Electric() {
  return (
    <div className="font-sans flex-col">
      {/* Background Section */}
      <div>
        <section
          className="absolute top-0 left-0 w-full h-[40rem] bg-cover bg-center"
          style={{
            backgroundImage: "url('/background-electric-service.jpg')",
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
          <p className="text-xl">SERVICES {">"} ELECTRICAL SAFETY TESTING </p>
          <h1 className="text-3xl font-bold mt-2">
            ELECTRICAL SAFETY TESTING {"("} QCVN 132 {")"}{" "}
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Column */}
          <div className="flex flex-col gap-4 w-full lg:w-2/3">
            {/* Left Info Box */}
            <div className="bg-gray-100 p-6 shadow-md rounded">
              <p className="font-semibold">
                We have received the necessary designations to perform
                electrical safety testing for telecommunications and audiovisual
                (ITAV) terminal equipment in compliance with QCVN
                132:2022/BTTTT, ensuring optimal efficiency and cost.
              </p>
            </div>
            {/* Additional Content */}
            <div className="text-base leading-relaxed">
              <div class="flex flex-row items-center mt-5">
                <div class="w-1/2 flex justify-center">
                  <Image
                    src="/pham-vi.jpg"
                    alt="Phạm vi"
                    class=" w-64 h-80 object-cover"
                  />
                </div>
                <div class="w-1/2 flex flex-col">
                  <p class="text-gray-700">
                    PSI has been designated by the Ministry of Information and
                    Communications (MIC) to conduct electrical safety testing
                    for telecommunications and audiovisual terminal devices,
                    such as desktop computers, laptops, tablets, TVs, DECT
                    phones, and set-top boxes, under QCVN 132:2022/BTTTT (IEC
                    62368-1:2018).
                  </p>
                </div>
              </div>
              <p className="mt-4">
                Additionally, PSI's laboratory has been accredited for
                conformity with the ISO 17025 standard by VACI. This
                accreditation is globally recognized under the ILAC-MRA
                framework.
              </p>
            </div>
          </div>
          {/* Right Info Box */}
          <div className="bg-[#0079a8] p-6 shadow-md rounded w-full h-1/2 lg:w-1/3">
            <h3 className="font-bold text-lg text-white">
              NEED MORE INFORMATION?
            </h3>
            <p className="mt-4 text-white">
              Please contact us for more information about our services:
            </p>
            <a
              href="tel:+84866236288"
              className="block mt-4 font-bold text-white"
            >
              +84 866 236 288
            </a>
            <button className="mt-4 bg-white text-[#0079a8] px-4 py-2 rounded">
              Contact Us!
            </button>
          </div>
        </div>

        {/* Services by Category */}
        <div className="mt-10">
          <h2 className="font-bold text-[#0079a8] text-2xl">
            RELATED SERVICES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="p-4 shadow-md rounded bg-[#f0eeee] text-left">
              <Image
                src="/electric-1.jpg"
                alt="Pin Lithium"
                className="mx-auto h-64 mb-4"
              />
              <h3 className="font-bold text-2xl pb-5 text-[#0079a8]">
                Electrical Safety Testing
              </h3>
              <p>
                Safety testing in compliance with QCVN 101 issued by the
                Ministry of Information and Communications
              </p>
            </div>
            <div className="p-4 shadow-md rounded bg-[#f0eeee] text-left">
              <Image
                src="/electric-2.jpg"
                alt="Pin/Ắc quy xe điện"
                className="mx-auto h-64 mb-4"
              />
              <h3 className="font-bold text-2xl pb-5 text-[#0079a8]">
                SAR Testing
              </h3>
              <p>
                Safety testing for Specific Absorption Rate (SAR) in compliance
                with QCVN 134 issued by the Ministry of Information and
                Communications
              </p>
            </div>
            <div className="p-4 shadow-md rounded bg-[#f0eeee] text-left">
              <Image
                src="/electric-3.jpg"
                alt="Pin/Ắc quy khác"
                className="mx-auto h-64 mb-4"
              />
              <h3 className="font-bold text-2xl pb-5 text-[#0079a8]">
                Energy Efficiency
              </h3>
              <p>
                Energy performance testing in accordance with current standards{" "}
              </p>
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
              <Image
                src="/electric-man.png"
                alt="Support"
                className="h-[350px] md:h-[420px] w-auto"
              />
            </div>
          </div>

          {/* Left: Image */}
          <div className="md:w-1/2 mt-6 md:mt-0 md:pr-10 text-left md:text-left">
            <h2 className="text-2xl font-bold text-[#0079a8]">NEED SUPPORT?</h2>
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
        </div>
      </div>
    </div>
  );
}
