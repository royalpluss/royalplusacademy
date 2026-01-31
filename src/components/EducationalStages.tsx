import { GraduationCap, BookMarked, Award } from "lucide-react";

const stages = [
  {
    icon: BookMarked,
    title: "المرحلة الابتدائية",
    grades: "من الصف الأول إلى السادس",
    description:
      "نبني أساساً قوياً للتعلم من خلال أساليب تفاعلية ممتعة تناسب الأطفال وتحفز حب الاستكشاف والمعرفة لديهم",
    features: ["تأسيس قوي في القراءة والكتابة", "رياضيات بأسلوب ممتع", "تنمية المهارات الإبداعية"],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: GraduationCap,
    title: "المرحلة الإعدادية",
    grades: "من الصف الأول إلى الثالث",
    description:
      "نركز على تطوير مهارات التفكير النقدي والتحليلي مع تعزيز الفهم العميق للمواد الدراسية",
    features: ["شرح مفصل للمناهج", "حل نماذج امتحانات", "متابعة دورية للمستوى"],
    color: "from-emerald-500 to-emerald-600",
    featured: true,
  },
  {
    icon: Award,
    title: "المرحلة الثانوية",
    grades: "الصف الأول والثاني والثالث",
    description:
      "إعداد شامل ومكثف للثانوية العامة بأحدث أساليب المراجعة وحل النماذج مع التركيز على تحقيق أعلى الدرجات",
    features: ["مراجعات نهائية مكثفة", "بنوك أسئلة شاملة", "توقعات دقيقة للامتحانات"],
    color: "from-accent to-gold-light",
  },
];

const EducationalStages = () => {
  return (
    <section id="stages" className="section-padding">
      <div className="container-academy">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            المراحل التعليمية
          </span>
          <h2 className="section-title">
            نغطي <span className="gold-text">جميع المراحل</span> الدراسية
          </h2>
          <p className="section-subtitle">
            برامج تعليمية متخصصة لكل مرحلة دراسية مصممة بعناية لتناسب احتياجات الطلاب
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stages.map((stage, index) => (
            <div
              key={index}
              className={`card-academy relative overflow-hidden group ${
                stage.featured ? "ring-2 ring-accent" : ""
              }`}
            >
              {stage.featured && (
                <div className="absolute top-0 left-0 right-0 bg-accent text-primary text-center py-2 text-sm font-bold">
                  الأكثر طلباً
                </div>
              )}

              <div className={`${stage.featured ? "pt-8" : ""}`}>
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stage.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stage.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-cairo font-bold text-2xl text-foreground mb-2">
                  {stage.title}
                </h3>
                <p className="text-accent font-medium text-sm mb-4">{stage.grades}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {stage.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {stage.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                      </span>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationalStages;
