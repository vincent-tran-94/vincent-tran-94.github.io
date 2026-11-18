import { Dictionary } from "@/lib/dictionary";

interface FooterProps {
  dict: Dictionary["footer"];
}

export default function Footer({ dict }: FooterProps) {
  return (
    <footer className="site-footer">
      <p>{dict.copyright}</p>
      <a href="mailto:vincenttran94@hotmail.fr">{dict.contact}<span aria-hidden="true"> ↗</span></a>
    </footer>
  );
}
