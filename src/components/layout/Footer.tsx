export default function Footer() {
  return (
    <footer
      className="relative z-10 text-center py-8 px-10 border-t text-xs tracking-wide"
      style={{
        borderColor: "rgba(255,255,255,0.08)",
        color: "rgba(255,255,255,0.3)",
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} Zion Joy B. Barlongo &nbsp;·&nbsp;
        Built with Next.js &amp; Tailwind CSS &nbsp;·&nbsp; Hosted on Vercel
      </p>
    </footer>
  );
}
