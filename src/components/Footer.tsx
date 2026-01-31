import { Facebook, Video, Users, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61584708226265", label: "Facebook" },
  { icon: MessageCircle, href: "https://chat.whatsapp.com/BfkgNXBc1aQ3Dr9gGDc4wp", label: "WhatsApp", isWhatsApp: true },
];

const quickLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "عن الأكاديمية", href: "#about" },
  { label: "المراحل التعليمية", href: "#stages" },
  { label: "فريق المعلمين", href: "#teachers" },
  { label: "آلية الدراسة", href: "#online-learning" },
  { label: "تواصل معنا", href: "#contact" },
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="relative pt-20 pb-8"
      style={{
        background: "linear-gradient(180deg, hsl(216 68% 15%) 0%, hsl(216 68% 10%) 100%)",
      }}
    >
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 55C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(216 68% 15%)"
          />
        </svg>
      </div>

      <div className="container-academy">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center">
                <img src={logo} alt="أكاديمية رويال بلس" className="w-[130%] h-[130%] object-cover" />
              </div>
              <div className="text-white">
                <span className="font-cairo font-bold text-xl block leading-tight">
                  أكاديمية رويال بلس
                </span>
                <span className="text-xs opacity-80">التعليمية</span>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed max-w-md mb-4">
              أكاديمية رويال بلس التعليمية - تعليم متميز عن بُعد عبر Zoom أو Teams أو Google Meet مع
              نخبة من أفضل المعلمين المتخصصين في جميع المواد الدراسية.
            </p>
            
            {/* Online Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-4 py-2 mb-6">
              <Video className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">تعليم أونلاين 100%</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/80 hover:bg-accent hover:text-primary transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cairo font-bold text-lg text-white mb-6">
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-cairo font-bold text-lg text-white mb-6">
              تواصل معنا
            </h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center gap-2 flex-wrap">
                <a
                  href="tel:+201001356067"
                  className="hover:text-accent transition-colors"
                  dir="ltr"
                >
                  01001356067
                </a>
                <span>-</span>
                <a
                  href="tel:+201028505335"
                  className="hover:text-accent transition-colors"
                  dir="ltr"
                >
                  01028505335
                </a>
                <span>-</span>
                <a
                  href="https://wa.me/201094070307"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#25D366] transition-colors"
                  dir="ltr"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  01094070307
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@royalplus-academy.com"
                  className="hover:text-accent transition-colors"
                >
                  info@royalplus-academy.com
                </a>
              </li>
              <li>
                <div className="text-sm mb-2">حصص مباشرة عبر</div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div className="w-5 h-5 rounded bg-[#2D8CFF] flex items-center justify-center">
                      <Video className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs">Zoom</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-5 h-5 rounded bg-[#6264A7] flex items-center justify-center">
                      <Users className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs">Teams</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-5 h-5 rounded bg-[#00897B] flex items-center justify-center">
                      <Video className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs">Meet</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} أكاديمية رويال بلس التعليمية. جميع الحقوق
              محفوظة.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/50">
              <a href="#" className="hover:text-accent transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
