import React from "react";
import Image from 'next/image';

export default function Pin() {
  return (
    <div className="font-sans flex-col">
      {/* Background Section */}
      <div>
        <section
          className="absolute top-0 left-0 w-full h-[40rem] bg-cover bg-center"
          style={{
            backgroundImage: "url('/hop-quy.jpg')",
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
          <p className="text-xl">SERVICES {">"} COMFORMITY DECLARATION CONSULTING SERVICES </p>
          <h1 className="text-3xl font-bold mt-2">COMFORMITY DECLARATION CONSULTING SERVICES</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Column */}
          <div className="flex flex-col gap-4 w-full lg:w-2/3">
            {/* Left Info Box */}
            <div className="bg-gray-100 p-6 shadow-md rounded">
              <p className="font-semibold">
                PSI is proud to be a leading entity in battery testing, equipped
                with modern facilities and a team of highly trained and
                experienced experts.
              </p>
            </div>
            {/* Additional Content */}
            <div className="text-base leading-relaxed">
              <p className="mt-5">
                PSI has been designated by the Ministry of Information and
                Communications (MIC) to perform safety and electrical
                characteristic testing for Lithium batteries used in handheld
                devices such as phones, tablets, and laptops, in accordance with
                the corresponding national standards and technical regulations:
                QCVN 101:2020/BTTTT, IEC 62133-2:2017, IEC 62133-2:2017 + AMD
                1:2021, IEC 61960-3:2017.
              </p>
              <p className="mt-5">
                To better meet customer testing needs, in addition to the
                aforementioned national standards and technical regulations,
                PSI's Electrical-Electronics Testing Laboratory has expanded its
                testing scope for Lithium batteries/accumulators to include
                other standards such as IEC 62619, IEC 62620, TCVN 11919-2:2017,
                TCVN 12240/IEC 62281, TCVN 12241/IEC 62660, UN38.3, UL 1642, UL
                2054, and more.
              </p>
              <p className="mt-5">
                PSI also provides testing services for batteries/accumulators
                used in personal electric vehicles such as e-bikes, electric
                motorcycles, and scooters, as well as batteries/accumulators for
                industrial equipment such as forklifts and mining carts.
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
            SERVICES BY TARGET AUDIENCE
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="p-4 shadow-md rounded bg-[#f0eeee] text-left">
              <Image
                src="/pin-service-1.png"
                alt="Pin Lithium"
                className="mx-auto mb-4"
              />
              <h3 className="font-bold text-2xl pb-5 text-[#0079a8]">
                Lithium Batteries for Handheld Devices
              </h3>
              <p>
                Safety testing in compliance with QCVN 101 issued by the
                Ministry of Information and Communications
              </p>
            </div>
            <div className="p-4 shadow-md rounded bg-[#f0eeee] text-left">
              <Image
                src="/pin-service-2.png"
                alt="Pin/Ắc quy xe điện"
                className="mx-auto mb-4"
              />
              <h3 className="font-bold text-2xl pb-5 text-[#0079a8]">
                Batteries/Accumulators for Electric Vehicles
              </h3>
              <p>
                Safety testing in compliance with QCVN 76 & 91 issued by the
                Ministry of Transport
              </p>
            </div>
            <div className="p-4 shadow-md rounded bg-[#f0eeee] text-left">
              <Image
                src="/pin-service-3.png"
                alt="Pin/Ắc quy khác"
                className="mx-auto mb-4"
              />
              <h3 className="font-bold text-2xl pb-5 text-[#0079a8]">
                Other Batteries/Accumulators
              </h3>
              <p>Safety testing in compliance with other current standards</p>
            </div>
          </div>
        </div>

        {/* Services by Purpose */}
        <div className="mt-10">
          <h2 className="font-bold text-2xl text-[#0079a8]">
            SERVICES BY PURPOSE
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="p-4 shadow-md rounded bg-[#f0eeee] text-left">
              <Image
                src="/pin-service-4.png"
                alt="Phục vụ nhập khẩu"
                className="mx-auto mb-4"
              />
              <h3 className="font-bold text-2xl pb-5 text-[#0079a8]">
                For Importation
              </h3>
              <p>
                Testing and consultation for declarations according to
                applicable technical regulations, meeting the requirements of
                import procedures
              </p>
            </div>
            <div className="p-4 shadow-md rounded bg-[#f0eeee] text-left">
              <Image
                src="/pin-service-5.png"
                alt="Phục vụ nghiên cứu"
                className="mx-auto mb-4"
              />
              <h3 className="font-bold text-2xl pb-5 text-[#0079a8]">
                For Research & Development (R&D)
              </h3>
              <p>
                Testing and evaluation to support product R&D based on relevant
                standards
              </p>
            </div>
            <div className="p-4 shadow-md rounded bg-[#f0eeee] text-left">
              <Image
                src="/pin-service-6.png"
                alt="Phục vụ Marketing"
                className="mx-auto mb-4"
              />
              <h3 className="font-bold text-2xl pb-5 text-[#0079a8]">
                For Marketing
              </h3>
              <p>
                Product quality evaluation to promote products and attract
                customers
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
                src="/PSI-man.png"
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
