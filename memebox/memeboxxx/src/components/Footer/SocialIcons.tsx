import { Facebook, Instagram } from "./FooterIcons";

export const SocialIcons = () => {
  return (
    <ul className="no-bullets footer__social">
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          // href="https://www.instagram.com/nazcafashions/"
          title="MeMeBox on Instagram"
        >
          <Instagram />
          <span className="icon__fallback-text">Instagram</span>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          // href="https://www.facebook.com/Nazcafashions/"
          title="MeMeBox on Facebook"
        >
          <Facebook />
          <span className="icon__fallback-text">Facebook</span>
        </a>
      </li>
    </ul>
  );
};
