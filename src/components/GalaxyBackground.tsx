const GalaxyBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main nebula layers */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 30%, hsla(280, 70%, 30%, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 20%, hsla(220, 80%, 40%, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse 50% 60% at 70% 70%, hsla(43, 72%, 47%, 0.2) 0%, transparent 40%),
            radial-gradient(ellipse 70% 50% at 30% 80%, hsla(200, 70%, 50%, 0.25) 0%, transparent 45%)
          `
        }}
      />
      
      {/* Secondary nebula glow */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse 40% 30% at 60% 40%, hsla(300, 60%, 40%, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse 30% 40% at 25% 50%, hsla(180, 60%, 40%, 0.2) 0%, transparent 50%)
          `
        }}
      />

      {/* Cosmic dust particles */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.8) 0%, transparent 100%),
            radial-gradient(1px 1px at 30% 40%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 50% 10%, rgba(255,255,255,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 70% 60%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 90% 30%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(2px 2px at 15% 70%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(2px 2px at 85% 80%, rgba(255,255,255,0.5) 0%, transparent 100%)
          `
        }}
      />

      {/* Animated nebula pulse */}
      <div className="nebula-pulse absolute w-[600px] h-[600px] top-[10%] left-[10%] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsla(280, 70%, 50%, 0.4) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />
      
      <div className="nebula-pulse-delayed absolute w-[500px] h-[500px] bottom-[20%] right-[5%] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, hsla(43, 72%, 47%, 0.3) 0%, transparent 70%)',
          filter: 'blur(50px)'
        }}
      />
    </div>
  );
};

export default GalaxyBackground;
