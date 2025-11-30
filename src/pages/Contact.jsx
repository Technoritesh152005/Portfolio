import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
  Code2,
} from "lucide-react";

import { cn } from "../lib/util";
import { useToast } from "../../hooks/use-toast";
import { useState } from "react";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out — I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-secondary/20 flex justify-center"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl font-bold text-center mb-4">
          Let’s <span className="text-primary">Connect</span>
        </h2>

        <p className="text-center text-muted-foreground mb-14 max-w-3xl mx-auto leading-relaxed">
          Transforming ideas into performant digital experiences. If you're
          looking for a Full Stack Web Developer who writes clean code,
          understands systems deeply, and solves problems at scale — I'm just a
          message away.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* LEFT COLUMN */}
          <div className="space-y-10">
            {/* CONTACT INFO */}
            <div className="space-y-6">
              <InfoItem
                icon={<Mail />}
                label="Email"
                value="riteshkhilari4@gmail.com"
                link="mailto:riteshkhilari4@gmail.com"
              />
              <InfoItem
                icon={<Phone />}
                label="Phone"
                value="+91 8431398279"
                link="tel:+918431398279"
              />
              <InfoItem
                icon={<MapPin />}
                label="Location"
                value="Shenwadi, At Post Varkute, Taluka Man, Satara, Maharashtra, India"
              />
            </div>

            {/* SOCIAL SECTION FIXED */}
            <div className="pt-4">
              <div className="flex space-x-5 text-primary text-2xl">
                <a
                  href="https://leetcode.com/u/riteshkhilari15/"
                  target="_blank"
                >
                  <Code2 className="hover:scale-110 transition cursor-pointer" />
                </a>
                <a>
                  <Linkedin
                    className="hover:scale-110 transition cursor-pointer"
                    href="https://www.linkedin.com/in/ritesh-khilari-6882342b8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIdXU%2Fn2UQ9uIzRpNA6cvaA%3D%3D"
                  />
                </a>
                <Twitter className="hover:scale-110 transition cursor-pointer" />
                <Instagram className="hover:scale-110 transition cursor-pointer" />
                <Twitch className="hover:scale-110 transition cursor-pointer" />
              </div>
            </div>
          </div>{" "}
          {/* LEFT COLUMN ENDS */}
          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-card p-10 shadow-lg rounded-xl space-y-6 border border-border"
          >
            <TextField
              id="name"
              label="Your Name"
              placeholder="Ritesh Khilari"
            />
            <TextField
              id="email"
              type="email"
              label="Your Email"
              placeholder="riteshkhilari@gmail.com"
            />
            <TextArea
              id="message"
              label="Your Message"
              placeholder="Tell me about your project, collaboration, or idea..."
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "cosmic-button w-full flex items-center justify-center gap-2"
              )}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

/* === COMPONENTS === */

const InfoItem = ({ icon, label, value, link }) => (
  <div className="flex items-start gap-4">
    <div className="p-3 rounded-full bg-primary/10 text-primary">{icon}</div>
    <div>
      <h4 className="font-semibold">{label}</h4>
      {link ? (
        <a
          href={link}
          className="text-muted-foreground hover:text-primary transition"
        >
          {value}
        </a>
      ) : (
        <p className="text-muted-foreground">{value}</p>
      )}
    </div>
  </div>
);

const TextField = ({ id, label, placeholder, type = "text" }) => (
  <div className="space-y-1">
    <label htmlFor={id} className="text-sm font-medium">
      {label}
    </label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      required
      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none"
    />
  </div>
);

const TextArea = ({ id, label, placeholder }) => (
  <div className="space-y-1">
    <label htmlFor={id} className="text-sm font-medium">
      {label}
    </label>
    <textarea
      id={id}
      rows="5"
      placeholder={placeholder}
      required
      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary resize-none outline-none"
    />
  </div>
);
