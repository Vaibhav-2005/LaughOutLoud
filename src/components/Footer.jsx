import Link from "next/link";
import { Github } from "lucide-react";

function Footer() {
  return (
    <footer className="fixed bottom-6 left-0 w-full bg-transparent">
      <div className="flex flex-col items-center gap-3">
        
        {/* GitHub Link */}
        <Link 
          href="https://github.com/Vaibhav-2005/LaughOutLoud"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-black transition-all duration-200"
        >
          <Github size={20} />
          <span className="text-sm font-medium"></span>
        </Link>

        {/* Credits */}
        <div className="text-center">
          <p className="text-sm font-bold text-gray-800 tracking-tight">
            THE LAUGH OUT LOUD
          </p>
          <p className="text-[10px] uppercase tracking-widest text-gray-700 mt-1">
            Developed by <Link className="text-blue-500 font-semibold" href="https://linkedin.com/in/vaibhavagg2005/" target="_blank">Vaibhav Aggarwal</Link> © 2026
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;