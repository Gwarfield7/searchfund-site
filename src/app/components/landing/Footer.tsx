export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-wide flex-col items-center justify-between gap-4 text-sm text-ink/50 md:flex-row">
        <p>&copy; {new Date().getFullYear()} Haaga &amp; Warfield. All rights reserved.</p>
        <p className="text-xs tracking-wide">
          Confidential &nbsp;•&nbsp; No Obligation &nbsp;•&nbsp; Directly With Us
        </p>
      </div>
    </footer>
  );
}
