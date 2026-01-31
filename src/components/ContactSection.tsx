import { useState } from "react";
import { Send, Phone, Mail, Video, Users, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const stages = [
  { value: "primary", label: "المرحلة الابتدائية" },
  { value: "preparatory", label: "المرحلة الإعدادية" },
  { value: "secondary", label: "المرحلة الثانوية" },
];

const subjects = [
  { value: "arabic", label: "لغة عربية" },
  { value: "french", label: "لغة فرنسية" },
  { value: "math", label: "رياضيات" },
  { value: "science", label: "علوم" },
  { value: "chemistry", label: "كيمياء" },
  { value: "physics", label: "فيزياء" },
  { value: "biology", label: "أحياء" },
  { value: "social", label: "دراسات اجتماعية" },
  { value: "quran", label: "قرآن كريم" },
  { value: "other", label: "أخرى" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    stage: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get display labels for stage and subject
    const stageLabel = stages.find(s => s.value === formData.stage)?.label || formData.stage;
    const subjectLabel = subjects.find(s => s.value === formData.subject)?.label || formData.subject;

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwyqsx903sLqcTpcYBDB17dZ66h65_sYcO-L6GAXejm1QaYeBYrkJ6u6tGGMq9LYCPU5g/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            phone: formData.phone.trim(),
            stage: stageLabel,
            subject: subjectLabel,
            message: formData.message.trim(),
          }),
        }
      );

      toast({
        title: "تم إرسال طلبك بنجاح!",
        description: "سنتواصل معك في أقرب وقت لتحديد موعد الحصة.",
      });

      setFormData({ name: "", phone: "", stage: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-academy">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info Side */}
          <div>
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              تواصل معنا
            </span>
            <h2 className="section-title mb-6">
              احجز <span className="gold-text">حصتك الآن</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              تواصل معنا لحجز حصتك التجريبية أونلاين أو للاستفسار عن برامجنا
              التعليمية. فريقنا جاهز للرد على جميع استفساراتكم.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">اتصل بنا</div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <a
                      href="tel:+201001356067"
                      className="font-cairo font-bold text-lg text-foreground hover:text-accent transition-colors"
                      dir="ltr"
                    >
                      01001356067
                    </a>
                    <span className="text-muted-foreground">-</span>
                    <a
                      href="tel:+201028505335"
                      className="font-cairo font-bold text-lg text-foreground hover:text-accent transition-colors"
                      dir="ltr"
                    >
                      01028505335
                    </a>
                    <span className="text-muted-foreground">-</span>
                    <a
                      href="https://wa.me/201094070307"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-cairo font-bold text-lg text-foreground hover:text-[#25D366] transition-colors"
                      dir="ltr"
                    >
                      <MessageCircle className="w-5 h-5 text-[#25D366]" />
                      01094070307
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">البريد الإلكتروني</div>
                  <a
                    href="mailto:info@royalplus-academy.com"
                    className="font-cairo font-bold text-lg text-foreground hover:text-accent transition-colors"
                  >
                    info@royalplus-academy.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Video className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">طريقة التعليم</div>
                  <div className="font-cairo font-bold text-foreground">
                    <span className="text-lg">أونلاين عبر</span>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <div className="w-6 h-6 rounded bg-[#2D8CFF] flex items-center justify-center">
                          <Video className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm">Zoom</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-6 h-6 rounded bg-[#6264A7] flex items-center justify-center">
                          <Users className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm">Teams</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-6 h-6 rounded bg-[#00897B] flex items-center justify-center">
                          <Video className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm">Meet</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-secondary/50 rounded-3xl p-8 md:p-10">
            <h3 className="font-cairo font-bold text-2xl text-foreground mb-6">
              احجز حصتك التجريبية
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="أدخل اسمك الكامل"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  رقم الهاتف / واتساب
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="01xxxxxxxxx"
                  dir="ltr"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-right"
                />
              </div>

              {/* Stage */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  المرحلة التعليمية
                </label>
                <select
                  name="stage"
                  value={formData.stage}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all appearance-none"
                >
                  <option value="" disabled>
                    اختر المرحلة التعليمية
                  </option>
                  {stages.map((stage) => (
                    <option key={stage.value} value={stage.value}>
                      {stage.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  المادة المطلوبة
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all appearance-none"
                >
                  <option value="" disabled>
                    اختر المادة
                  </option>
                  {subjects.map((subject) => (
                    <option key={subject.value} value={subject.value}>
                      {subject.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  ملاحظات إضافية (اختياري)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="أي تفاصيل إضافية تود مشاركتها..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gold w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">جاري الإرسال...</span>
                ) : (
                  <>
                    <Send size={20} />
                    احجز الآن
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
