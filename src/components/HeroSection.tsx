import { MessageCircle, Video } from "lucide-react";
import TwinklingStars from "./TwinklingStars";
import GalaxyBackground from "./GalaxyBackground";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
    background: "linear-gradient(180deg, hsl(216 68% 15%) 0%, hsl(216 50% 20%) 100%)"
  }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 text-white" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
        backgroundSize: "40px 40px"
      }} />
      </div>

      {/* Galaxy Background */}
      <GalaxyBackground />

      {/* Twinkling Stars */}
      <TwinklingStars />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-200" />

      <div className="container-academy relative z-10 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8 animate-fade-up">
          <Video className="w-4 h-4 text-accent" />
          <span className="text-white/90 text-sm font-medium">
            تعليم أونلاين عبر Zoom - Teams - Google Meet
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-cairo font-bold text-white leading-tight mb-6 animate-fade-up animation-delay-100">
          تعليم متميز{" "}
          <span className="gold-text">عن بُعد</span>
          <br />
          من أي مكان في العالم
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-up animation-delay-200">
          أكاديمية رويال بلس التعليمية تقدم لأبنائكم تعليماً متميزاً عبر الإنترنت
          بحصص مباشرة على Zoom أو Teams أو Google Meet مع نخبة من أفضل المعلمين المتخصصين
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-300">
          <button onClick={scrollToContact} className="btn-gold">
            <Video size={22} />
            احجز حصتك الآن
          </button>
          <a href="https://wa.me/201094070307" target="_blank" rel="noopener noreferrer" className="btn-outline-white">
            <MessageCircle size={22} />
            الانضمام عبر واتساب
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10 animate-fade-up animation-delay-400">
          {[{
          number: "+500",
          label: "طالب مشترك"
        }, {
          number: "+19",
          label: "معلم متخصص"
        }, {
          number: "Live",
          label: "حصص مباشرة"
        }, {
          number: "24/7",
          label: "دعم متواصل"
        }].map((stat, index) => <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-cairo font-bold gold-text mb-1">
                {stat.number}
              </div>
              <div className="text-white/70 text-sm md:text-base">
                {stat.label}
              </div>
            </div>)}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>;
};
export default HeroSection;