"use client";

import "./globals.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { usePathname } from "next/navigation";

export { notFound } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const [menuOpen, setMenuOpen] = useState(false);

  // Ngăn cuộn body khi menu mobile mở
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <html lang={isEnglish ? "en" : "vi"}>
      <body className="min-h-screen flex flex-col w-full">
        {/* Navbar */}
        <nav className="w-full top-0 z-50 px-6">
          <div className="max-w-full flex-col mx-auto">
            {/* Top Bar: Language, Email, and Search */}
            <div className="flex justify-between items-center py-2 border-gray-200">
              <div className="flex items-center space-x-2"></div>
              <div className="flex items-center space-x-3">
                <span className="text-[#191938] text-xs sm:text-sm font-medium">
                  {isEnglish ? "EN" : "VN"}
                </span>
                <span className="text-[#191938] text-xs sm:text-sm font-medium">|</span>
                <button className="text-[#191938] text-xs sm:text-sm font-medium">
                  <Link
                    href={isEnglish ? "/" : "/en"}
                    onClick={() => setMenuOpen(false)}
                  >
                    {isEnglish ? "VN" : "EN"}
                  </Link>
                </button>
                <a
                  href="mailto:info@psicert.vn"
                  className="text-[#191938] sm:text-sm text-xs font-bold underline hover:no-underline"
                >
                  info@psicert.vn
                </a>
                <div className="relative ">
                  <input
                    type="text"
                    placeholder={isEnglish ? "Search..." : "Tìm kiếm..."}
                    className="pl-3 pr-8 py-1 text-sm border rounded-full border-black focus:outline-none focus:ring-1 focus:ring-[#191938]"
                  />
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black">
                    🔍
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Bar: Logo, Menu, và Toggle Mobile */}
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center space-x-4">
                <Link
                  href={isEnglish ? "/en" : "/"}
                  onClick={() => setMenuOpen(false)}
                >
                  <img
                    src="/logo.png"
                    alt="PSI logo"
                    className="w-32 h-auto object-contain"
                  />
                </Link>
                <span className="text-[#191938] ml-[-20px] text-sm sm:text-xl font-bold tracking-wide">
                  {isEnglish
                    ? "TESTING & CERTIFICATION"
                    : "THỬ NGHIỆM & CHỨNG NHẬN"}
                </span>
              </div>

              {/* Nút toggle menu mobile */}
              <button
                className="lg:hidden"
                onClick={() => setMenuOpen(true)}
              >
                <Menu size={24} />
              </button>

              {/* Menu desktop */}
              <ul className="hidden relative lg:flex text-l space-x-8">
                {(isEnglish
                  ? [
                      { label: "ABOUT", route: "/en" },
                      { label: "SERVICES", hasDropdown: true },
                      { label: "NEWS", route: "/en/" },
                      { label: "CONTACT", route: "/en/" },
                      { label: "CAREERS", route: "/en/Recruit" },
                    ]
                  : [
                      { label: "GIỚI THIỆU", route: "/" },
                      { label: "DỊCH VỤ", hasDropdown: true },
                      { label: "TIN TỨC", route: "/" },
                      { label: "LIÊN HỆ", route: "/" },
                      { label: "TUYỂN DỤNG", route: "/Recruit" },
                    ]
                ).map((item, index) => (
                  <li key={index} className="group">
                    {item.hasDropdown ? (
                      <button className="text-[#000022] flex items-center gap-1 cursor-pointer relative after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[3px] after:bg-[#0079a8] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                        {item.label}
                        <span className="text-sm">▼</span>
                      </button>
                    ) : (
                      <Link
                        href={item.route}
                        className="text-[#000022] relative after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[3px] after:bg-[#0079a8] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 flex items-center gap-1"
                      >
                        {item.label}
                      </Link>
                    )}
                    {item.hasDropdown && (
                      <ul className="hidden group-hover:flex flex-col absolute top-full left-0 w-1/2 bg-white shadow-lg py-4 z-50">
                        {isEnglish ? (
                          <>
                            <li className="border-b border-gray-200">
                              <Link
                                href="/en/Services/Pin"
                                className="block px-6 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500"
                              >
                                Battery Testing Services
                              </Link>
                            </li>
                            <li className="border-b border-gray-200">
                              <Link
                                href="/en/Services/Electric"
                                className="block px-6 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500"
                              >
                                Electrical Safety Testing (QCVN 132)
                              </Link>
                            </li>
                            <li className="border-b border-gray-200">
                              <Link
                                href="/en/Services/Conformity"
                                className="block px-6 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500"
                              >
                                Conformity Declaration Consulting Services
                              </Link>
                            </li>
                            <li className="border-b border-gray-200">
                              <Link
                                href="/en/Services/Import"
                                className="block px-6 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500"
                              >
                                Import Trustee Services
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/en/Services/Technical"
                                className="block px-6 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500"
                              >
                                Technical Consulting Services
                              </Link>
                            </li>
                          </>
                        ) : (
                          <>
                            <li className="border-b border-gray-200">
                              <Link
                                href="/Services/Pin"
                                className="block px-6 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500"
                              >
                                Dịch vụ thử nghiệm Pin
                              </Link>
                            </li>
                            <li className="border-b border-gray-200">
                              <Link
                                href="/Services/Electric"
                                className="block px-6 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500"
                              >
                                Dịch vụ thử nghiệm an toàn điện (QCVN 132)
                              </Link>
                            </li>
                            <li className="border-b border-gray-200">
                              <Link
                                href="/Services/Conformity"
                                className="block px-6 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500"
                              >
                                Dịch vụ Tư vấn Công bố Hợp quy
                              </Link>
                            </li>
                            <li className="border-b border-gray-200">
                              <Link
                                href="/Services/Import"
                                className="block px-6 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500"
                              >
                                Dịch vụ Nhập khẩu Uỷ thác
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/Services/Technical"
                                className="block px-6 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500"
                              >
                                Dịch vụ Tư vấn kỹ thuật
                              </Link>
                            </li>
                          </>
                        )}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow pt-20 px-4">{children}</main>

        {/* Footer */}
        <footer className="relative bg-[#017baa] text-white py-10 px-6">
          <div className="container mx-auto w-full max-w-full flex flex-col">
            <div className="flex justify-center md:justify-start mb-6">
              <img
                src="/footer-logo.png"
                alt="PSI Logo"
                className="w-20 h-auto object-contain"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center md:items-start">
                <p className="text-lg font-medium text-center md:text-left">
                  {isEnglish
                    ? "93 Nguyen Van Giap, Cau Dien, Nam Tu Liem, Hanoi, Vietnam"
                    : "93 Nguyễn Văn Giáp, Cầu Diễn, Nam Từ Liêm, Hà Nội, Việt Nam"}
                </p>
                <div className="flex w-full h-64 bg-white rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863855881401!2d105.744598414763!3d21.038132785994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2s93%20Nguy%E1%BB%85n%20V%C4%83n%20Gi%C3%A1p%2C%20C%E1%BA%A7u%20Di%E1%BB%85n%2C%20Nam%20T%E1%BB%AB%20Li%C3%AAm%2C%20H%C3%A0%20N%E1%BB%99i%2C%20Vietnam!5e0!3m2!1sen!2sus!4v1633024890000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h2 className="text-lg font-bold uppercase mb-2 text-center md:text-left">
                  {isEnglish
                    ? "PSI TESTING & CERTIFICATION JOINT STOCK COMPANY"
                    : "CÔNG TY CỔ PHẦN THỬ NGHIỆM & CHỨNG NHẬN PSI"}
                </h2>
                <hr className="border-t border-white mb-4 w-full" />
                <div className="space-y-2 text-sm w-full text-center md:text-left">
                  <p>
                    <span className="inline-block w-5 h-5 mr-2">📞</span>
                    0866236288
                  </p>
                  <p>
                    <span className="inline-block w-5 h-5 mr-2">🌐</span>
                    <a
                      href="http://www.psicert.vn"
                      className="underline hover:no-underline"
                    >
                      www.psicert.vn
                    </a>
                  </p>
                  <p>
                    <span className="inline-block w-5 h-5 mr-2">✉️</span>
                    <a
                      href="mailto:info@psicert.vn"
                      className="underline hover:no-underline"
                    >
                      info@psicert.vn
                    </a>
                  </p>
                  <p>
                    <span className="inline-block w-5 h-5 mr-2">📘</span>
                    <a
                      href="https://www.facebook.com/psicert"
                      className="underline hover:no-underline"
                    >
                      https://www.facebook.com/psicert
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <p className="text-lg font-bold uppercase mb-2 text-center md:text-left">
                  {isEnglish
                    ? "PSI activities are recognized by"
                    : "Hoạt động của PSI được công nhận bởi"}
                </p>
                <div className="mt-2">
                  <img
                    src="/ilac-vaci-logo.png"
                    alt="ILAC-VACI Logo"
                    className="w-64 h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 bg-white text-[#1E3A8A] p-3 rounded-full shadow-lg hover:bg-gray-200"
          >
            ⬆️
          </button>
        </footer>

        {/* Menu mobile */}
        {menuOpen && (
          <div className="fixed inset-0 bg-white bg-opacity-50 z-50"
          onClick={() => setMenuOpen(false)}>
            {/* Header của menu mobile */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <div className="relative w-full max-w-xs">
                <input
                  type="text"
                  placeholder={isEnglish ? "Search..." : "Tìm kiếm..."}
                  className="w-full pl-3 pr-8 py-1 text-sm border rounded-full border-black focus:outline-none focus:ring-1 focus:ring-[#191938]"
                />
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black">
                  🔍
                </span>
              </div>
              <button onClick={() => setMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            {/* Danh sách menu */}
            <ul className="flex flex-col items-start p-4 space-y-4">
              <li>
                <Link
                  href={isEnglish ? "/en" : "/"}
                  onClick={() => setMenuOpen(false)}
                >
                  {isEnglish ? "ABOUT" : "GIỚI THIỆU"}
                </Link>
              </li>
              <li>
                <span className="font-bold">
                  {isEnglish ? "SERVICES" : "DỊCH VỤ"}
                </span>
                <ul className="ml-4 space-y-2 mt-2">
                  {isEnglish ? (
                    <>
                      <li>
                        <Link
                          href="/en/Services/Pin"
                          onClick={() => setMenuOpen(false)}
                        >
                          Battery Testing Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/en/Services/Electric"
                          onClick={() => setMenuOpen(false)}
                        >
                          Electrical Safety Testing (QCVN 132)
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/en/Services/Conformity"
                          onClick={() => setMenuOpen(false)}
                        >
                          Consulting for Regulatory Compliance
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/en/Services/Import"
                          onClick={() => setMenuOpen(false)}
                        >
                          Import Trustee Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/en/Services/Technical"
                          onClick={() => setMenuOpen(false)}
                        >
                          Technical Consulting Services
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link
                          href="/Services/Pin"
                          onClick={() => setMenuOpen(false)}
                        >
                          Dịch vụ thử nghiệm Pin
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/Services/Electric"
                          onClick={() => setMenuOpen(false)}
                        >
                          Dịch vụ thử nghiệm an toàn điện (QCVN 132)
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/Services/Conformity"
                          onClick={() => setMenuOpen(false)}
                        >
                          Dịch vụ Tư vấn Công bố Hợp quy
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/Services/Import"
                          onClick={() => setMenuOpen(false)}
                        >
                          Dịch vụ Nhập khẩu Uỷ thác
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/Services/Technical"
                          onClick={() => setMenuOpen(false)}
                        >
                          Dịch vụ Tư vấn kỹ thuật
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </li>
              <li>
                <Link
                  href={isEnglish ? "/en/News" : "/News"}
                  onClick={() => setMenuOpen(false)}
                >
                  {isEnglish ? "NEWS" : "TIN TỨC"}
                </Link>
              </li>
              <li>
                <Link
                  href={isEnglish ? "/en/Contact" : "/Contact"}
                  onClick={() => setMenuOpen(false)}
                >
                  {isEnglish ? "CONTACT" : "LIÊN HỆ"}
                </Link>
              </li>
              <li>
                <Link
                  href={isEnglish ? "/en/Recruit" : "/Recruit"}
                  onClick={() => setMenuOpen(false)}
                >
                  {isEnglish ? "CAREERS" : "TUYỂN DỤNG"}
                </Link>
              </li>
            </ul>

            {/* Chuyển đổi ngôn ngữ */}
            <div className="p-4 border-t border-gray-200">
              <span className="mr-2">{isEnglish ? "Language:" : "Ngôn ngữ:"}</span>
              <Link
                href={isEnglish ? "/" : "/en"}
                onClick={() => setMenuOpen(false)}
              >
                {isEnglish ? "VN" : "EN"}
              </Link>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}