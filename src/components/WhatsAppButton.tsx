import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/201094070307?text=مرحباً، أريد الاستفسار عن برامج أكاديمية رويال بلس التعليمية"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle className="w-6 h-6 fill-white" />
      <span className="font-medium hidden sm:inline">تواصل عبر واتساب</span>
    </a>
  );
};

export default WhatsAppButton;
