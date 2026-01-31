import { Video, PlayCircle, Clock, Users, Monitor, Headphones } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "حصص مباشرة أونلاين",
    description: "حصص تفاعلية مباشرة عبر Zoom أو Teams أو Google Meet مع إمكانية طرح الأسئلة والمناقشة",
  },
  {
    icon: Users,
    title: "مجموعات صغيرة",
    description: "عدد محدود من الطلاب في كل مجموعة لضمان الاهتمام الفردي والتفاعل الفعّال",
  },
  {
    icon: PlayCircle,
    title: "تسجيل الحصص",
    description: "جميع الحصص مسجلة ومتاحة للمشاهدة في أي وقت للمراجعة والاستيعاب",
  },
  {
    icon: Clock,
    title: "مواعيد مرنة",
    description: "جدول مواعيد مرن يناسب مختلف الأوقات والمناطق الزمنية",
  },
  {
    icon: Monitor,
    title: "أدوات تفاعلية",
    description: "استخدام السبورة الذكية والعروض التقديمية والموارد التعليمية المتنوعة",
  },
  {
    icon: Headphones,
    title: "دعم فني متواصل",
    description: "فريق دعم فني متاح لحل أي مشكلات تقنية وضمان تجربة تعليمية سلسة",
  },
];

const steps = [
  {
    number: "1",
    title: "التسجيل",
    description: "تواصل معنا واختر المادة والمرحلة الدراسية",
  },
  {
    number: "2",
    title: "الانضمام",
    description: "استلم رابط الحصة عبر Zoom أو Teams أو Meet",
  },
  {
    number: "3",
    title: "التعلم",
    description: "احضر الحصص المباشرة وتفاعل مع المعلم",
  },
  {
    number: "4",
    title: "المتابعة",
    description: "راجع التسجيلات واحصل على الدعم المستمر",
  },
];

const OnlineLearningSection = () => {
  return (
    <section id="online-learning" className="section-padding">
      <div className="container-academy">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            آلية الدراسة أونلاين
          </span>
          <h2 className="section-title">
            كيف تتم <span className="gold-text">الدراسة عن بُعد</span>؟
          </h2>
          <p className="section-subtitle">
            نظام تعليمي متكامل عبر Zoom - Teams - Google Meet يضمن لك تجربة تعليمية فعّالة ومميزة
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center p-6 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors"
            >
              {/* Step Number */}
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                <span className="font-cairo font-bold text-2xl text-primary">
                  {step.number}
                </span>
              </div>
              <h3 className="font-cairo font-bold text-lg text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>

              {/* Arrow (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -left-3 -translate-y-1/2 text-accent">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="rotate-180"
                  >
                    <path
                      d="M9 18l6-6-6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-academy group hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-cairo font-bold text-lg text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Zoom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-deep-blue-light rounded-2xl p-8 shadow-xl">
            <Video className="w-12 h-12 text-accent" />
            <div className="text-right">
              <h3 className="font-cairo font-bold text-xl text-primary-foreground mb-1">
                جاهز للبدء؟
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                احجز حصتك التجريبية الآن واستمتع بتجربة التعليم عن بُعد
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineLearningSection;
