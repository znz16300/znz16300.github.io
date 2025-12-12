import { useEffect } from "react";

const ExternalRedirect: React.FC<{ url: string }> = ({ url }) => {
  useEffect(() => {
    window.location.href = url;
  }, [url]);
  
  return (
    <div className="flex items-center justify-center h-screen bg-slate-900">
      <div className="text-white text-xl">Перенаправлення...</div>
    </div>
  );
};
export default ExternalRedirect;
