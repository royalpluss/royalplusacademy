import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import logo from "@/assets/logo.jpeg";
const navItems = [{
  label: "الرئيسية",
  href: "#home"
}, {
  label: "عن الأكاديمية",
  href: "#about"
}, {
  label: "المراحل التعليمية",
  href: "#stages"
}, {
  label: "فريق المعلمين",
  href: "#teachers"
}, {
  label: "آلية الدراسة",
  href: "#online-learning"
}, {
  label: "تواصل معنا",
  href: "#contact"
}];
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || !savedTheme && prefersDark) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);
  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="container-academy">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={e => {
          e.preventDefault();
          scrollToSection("#home");
        }} className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center">
              <img src={logo} alt="أكاديمية رويال بلس" className="w-[130%] h-[130%] object-cover" />
            </div>
            <div className={`transition-colors duration-300 ${isScrolled ? "text-primary dark:text-white" : "text-white"}`}>
              <span className="font-bold text-xl block leading-tight font-sans text-inherit">أكاديمية رويال بلس</span>
              <span className="text-xs opacity-80 text-inherit">التعليمية</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map(item => <li key={item.href}>
                <a href={item.href} onClick={e => {
              e.preventDefault();
              scrollToSection(item.href);
            }} className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-accent/10 ${isScrolled ? "text-foreground hover:text-accent dark:text-white" : "text-white/90 hover:text-white"}`}>
                  {item.label}
                </a>
              </li>)}
          </ul>

          {/* CTA Button - Desktop */}
          <a href="#contact" onClick={e => {
          e.preventDefault();
          scrollToSection("#contact");
        }} className="hidden lg:inline-flex btn-gold text-sm py-3 px-6">
            احجز الآن
          </a>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Dark Mode Toggle */}
            <button onClick={toggleDarkMode} className={`p-2 rounded-lg transition-colors ${isScrolled ? "text-primary hover:bg-accent/10 dark:text-white" : "text-white hover:bg-white/10"}`} aria-label="تبديل الوضع الداكن">
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-primary dark:text-white" : "text-white"}`} aria-label="Toggle menu">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-background shadow-lg transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
          <ul className="py-4 px-4 space-y-1">
            {navItems.map(item => <li key={item.href}>
                <a href={item.href} onClick={e => {
              e.preventDefault();
              scrollToSection(item.href);
            }} className="block px-4 py-3 rounded-lg font-medium text-foreground hover:bg-secondary hover:text-accent transition-colors">
                  {item.label}
                </a>
              </li>)}
            <li className="pt-2">
              <a href="#contact" onClick={e => {
              e.preventDefault();
              scrollToSection("#contact");
            }} className="btn-gold w-full text-center text-sm py-3">
                احجز الآن
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>;
};
export default Header;