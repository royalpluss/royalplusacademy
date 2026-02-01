import { GraduationCap, BookOpen } from "lucide-react";

const teachers = [
   {
    name: "محمد الراوي",
    subjects: "لغة عربية",
    stages: "منهج مصري وخليجي",
  },
  {
    name: "فاطمة الزهراء الشناوي",
    subjects: "لغة عربية",
    stages: "ليسانس آداب – لغة عربية | دبلوم عام في التربية",
  },
  {
    name: "شهد سرور",
    subjects: "لغة إنجليزية",
    stages: "ليسانس الآداب والتربية – جامعة المنصورة",
  },
  {
    name: "مسيو علي المهياص",
    subjects: "مُحاضر ومترجم لغة فرنسية",
    stages: "الإعدادي والثانوي",
  },
  {
    name: "شهد محمد الحنطور",
    subjects: "مُعلمة لغة فرنسية – مدرسة المنصورة كولدج",
    stages: "ليسانس آداب وتربية – قسم اللغة الفرنسية | كلية التربية – جامعة المنصورة",
  }, {
    name: "آلاء محمد",
    subjects: "بكالوريوس علوم وتربيه قسم رياضيات",
    stages: "معلمة مادة رياضيات ابتدائي وإعدادى",
  },
  {
    name: "آية زيدان",
    subjects: "بكالوريوس علوم وتربيه قسم رياضيات",
    stages: "معلمة مادة رياضيات ابتدائي وإعدادى",
  },
  {
    name: "عادل ماهر",
    subjects: "علوم بيولوجية",
    stages: "كلية التربية – جامعة المنصورة | خبرة أونلاين للسعودية",
  },
  {
    name: "امتياز إبراهيم",
    subjects: "علوم وأحياء",
    stages: "بكالوريوس علوم بيولوجية وجيولوجية – المنصورة | ICDL Teacher",
  },
  {
    name: "منة عزت إبراهيم",
    subjects: "كيمياء عربي وبرنامج مميز (لغات)",
    stages: "كلية العلوم – جامعة المنصورة",
  },
  {
    name: "يمنى حجازي",
    subjects: "جغرافيا ونظم معلومات جغرافية (GIS)",
    stages: "كلية التربية – جامعة المنصورة | خبرة بالمدارس والبرايفت",
  },
  {
    name: "يمنى عصام السيد",
    subjects: "جغرافيا ونظم معلومات جغرافية (GIS)",
    stages: "كلية التربية – جامعة المنصورة | خبرة بالمدارس والبرايفت",
  },
  {
    name: "أمنية سامح",
    subjects: "كيمياء وفيزياء",
    stages: "بكالوريوس علوم – جامعة المنصورة",
  },
  {
    name: "دينا منتصر",
    subjects: "علوم",
    stages: "بكالوريوس علوم وتربية – كيمياء | ابتدائي وإعدادي",
  },
  {
    name: "نورهان وائل",
    subjects: "بيولوجي (لغات)",
    stages: "كلية التربية – جامعة المنصورة",
  },
];

const TeachersSection = () => {
  return (
    <section id="teachers" className="section-padding bg-secondary/30">
      <div className="container-academy">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            فريق المعلمين
          </span>
          <h2 className="section-title">
            نخبة من <span className="gold-text">المعلمين المتميزين</span>
          </h2>
          <p className="section-subtitle">
            فريق متخصص من المعلمين ذوي الخبرة في التدريس أونلاين عبر Zoom - Teams - Google Meet
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="card-academy text-center group hover:border-accent/30 transition-all duration-300"
            >
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-br from-primary to-deep-blue-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="font-cairo font-bold text-2xl text-primary-foreground">
                  {teacher.name.charAt(0)}
                </span>
              </div>

              {/* Info */}
              <h3 className="font-cairo font-bold text-lg text-foreground mb-2 leading-tight">
                {teacher.name}
              </h3>

              {/* Subjects */}
              <div className="flex items-center justify-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-accent shrink-0" />
                <p className="text-accent font-semibold text-sm">{teacher.subjects}</p>
              </div>

              {/* Stages Badge */}
              <div className="flex items-center justify-center gap-2">
                <GraduationCap className="w-4 h-4 text-muted-foreground shrink-0" />
                <span className="text-muted-foreground text-sm">
                  {teacher.stages}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
