import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function Header({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <header
      className={className ? className : "bg-emerald-600 text-white py-8"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 mb-4 text-emerald-200 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Повернутися на головну</span>
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        <p className="text-emerald-200 mt-2">{description}</p>
      </div>
    </header>
  );
}

export default Header;
