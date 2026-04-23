interface BrandedLoaderProps {
  message?: string;
  className?: string;
}

const BrandedLoader = ({ message, className = "" }: BrandedLoaderProps) => {
  return (
    <div className={`flex flex-col items-center justify-center min-h-[60vh] py-20 ${className}`}>
      <div className="flex flex-col items-center gap-6 animate-in fade-in duration-500">
        {/* Logo Section */}
        <div className="flex items-center justify-center">
          <img
            src="/assets/new-logo/logo-blue.png"
            alt="Dexterz Technologies"
            className="h-12"
          />
        </div>
        
        {/* Animated Bar Loader */}
        <div className="w-40 h-1 bg-gray-100 overflow-hidden relative">
          <div 
            className="absolute top-0 h-full bg-brand-teal" 
            style={{
              width: '40%',
              animation: 'loading-bar 1.5s infinite ease-in-out'
            }}
          />
          <style>{`
            @keyframes loading-bar {
              0% { left: -40%; }
              50% { left: 30%; }
              100% { left: 100%; }
            }
          `}</style>
        </div>
        
        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest animate-pulse">
          {message || "LOADING..."}
        </p>
      </div>
    </div>
  );
};

export default BrandedLoader;
