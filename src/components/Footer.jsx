import { useContent } from "../i18n";

export default function Footer() {
  const { site, ui } = useContent();
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <span>
          © {year} {site.name}
        </span>
        <span>{ui.footer.countries}</span>
      </div>
    </footer>
  );
}
