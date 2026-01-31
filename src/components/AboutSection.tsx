import { Video, Users, Monitor, Headphones } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const features = [
  {
    icon: Video,
    title: "حصص مباشرة أونلاين",
    description: "شرح تفاعلي مباشر عبر Zoom أو Teams أو Google Meet",
  },
  {
    icon: Users,
    title: "تفاعل مع الطالب",
    description: "مجموعات صغيرة لضمان التفاعل الفعّال",
  },
  {
    icon: Monitor,
    title: "تسجيل الحصص",
    description: "إمكانية مشاهدة الحصص المسجلة في أي وقت",
  },
  {
    icon: Headphones,
    title: "متابعة مستمرة",
    description: "دعم فني ومتابعة أكاديمية على مدار الساعة",
  },
];

// Academy course images with titles
const academyImages = [
  {
    src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop",
    alt: "كورسات اللغات الأجنبية واللغة العربية",
  },
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    alt: "كورسات البرمجة",
  },
  {
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    alt: "كورسات الذكاء الاصطناعي",
  },
  {
    src: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=800&h=600&fit=crop",
    alt: "كورسات ICDL (ورد - إكسل - بوربوينت)",
  },
  {
    src: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&h=600&fit=crop",
    alt: "كورسات العبقري الصغير (فيدا / يوسي ماث)",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    alt: "كورسات التقوية الدراسية",
  },
];

const AboutSection = () => {
  const [api, setApi] = useState<any>();

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-academy">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              عن الأكاديمية
            </span>
            <h2 className="section-title mb-6">
              تعليم <span className="gold-text">أونلاين</span> بجودة عالية
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              أكاديمية رويال بلس التعليمية متخصصة في التعليم عن بُعد عبر Zoom أو Teams أو Google Meet.
              نقدم حصصاً تفاعلية مباشرة مع أفضل المعلمين المتخصصين في جميع المواد
              الدراسية للمناهج المصرية والخليجية.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              نوفر بيئة تعليمية افتراضية محفزة تجمع بين التفاعل المباشر مع المعلم
              والتقنيات الحديثة، مع متابعة مستمرة لمستوى الطلاب وتقديم الدعم
              اللازم لتحقيق التفوق الدراسي من أي مكان في العالم.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-background shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-cairo font-bold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Carousel Side */}
          <div className="relative">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
                direction: "rtl",
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {academyImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <div className="aspect-[4/3]">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                        <div className="absolute bottom-4 right-4 left-4 text-center">
                          <p className="text-primary-foreground font-cairo font-semibold text-lg">
                            {image.alt}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-background/80 hover:bg-background" />
              <CarouselNext className="right-4 bg-background/80 hover:bg-background" />
            </Carousel>

            {/* Card Below Carousel */}
            <div className="mt-6 bg-background rounded-2xl p-5 shadow-xl border border-accent/20">
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-lg">
                  <span className="font-cairo font-bold text-xl text-primary">+19</span>
                </div>
                <div>
                  <div className="font-cairo font-bold text-lg text-foreground">
                    معلم متخصص
                  </div>
                  <div className="text-muted-foreground text-sm">
                    في جميع المواد الدراسية
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
