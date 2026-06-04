interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide transition-colors duration-200";

  const variants = {
    primary: "bg-navy text-cream hover:bg-[#2a3a5c]",
    secondary:
      "border border-navy text-navy bg-transparent hover:bg-navy hover:text-cream",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}
