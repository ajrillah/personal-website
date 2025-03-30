import React from "react";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Experiences",
    href: "#experiences",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact Me",
    href: "#contacts",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ajrillah",
  },
  {
    label: "LinkedIn",
    href: "https://id.linkedin.com/in/fakhri-ajrillah",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/fakhri.ajrillah/",
  },
  {
    label: "Email",
    href: "mailto:fakhri.ajril@gmail.com",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container mx-auto max-w-screen-xl px-6 md:px-12 py-10 lg:px-18">
        <div className="w-full border border-zinc-200/10 mb-15"></div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex justify-center">
            <div className="">
              <p className="mb-2 reveal-up">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <p className="mb-2 reveal-up">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-15 mb-1 flex justify-center">
          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2024 <span className="text-zinc-200">Fakhri Ajrillah</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
