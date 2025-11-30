import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-border bg-background/50 backdrop-blur-sm relative">
      <div className="container py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* BRANDING */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-primary">Ritesh Khilari</h3>
          <p className="text-muted-foreground text-sm">
            Transforming ideas into functional, modern, and impactful web
            applications.
          </p>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="flex flex-wrap gap-6 text-sm text-foreground/80">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/skills" className="hover:text-primary transition-colors">
            Skills
          </Link>
          <Link to="/projects" className="hover:text-primary transition-colors">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Technoritesh152005"
            target="_blank"
            className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/ritesh-khilari-6882342b8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWPDnXq0rTWi3LrKVhyZEEQ%3D%3D"
            target="_blank"
            className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="mailto:ritesh@gmail.com"
            className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      {/* COPYRIGHT ROW */}
      <div className="py-4 text-center text-xs text-muted-foreground border-t border-border bg-background/60">
        © {new Date().getFullYear()} Ritesh Khilari — All rights reserved.
      </div>
    </footer>
  );
};
