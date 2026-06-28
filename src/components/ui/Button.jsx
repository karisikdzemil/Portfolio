import Link from "next/link";

const variants = {
  solid: "border-2 border-accent bg-accent text-ink hover:bg-ink hover:text-accent",
  outline: "border-2 border-white text-white hover:bg-white hover:text-ink",
  "outline-dark": "border-2 border-ink text-ink hover:bg-ink hover:text-paper",
};

export default function Button({ href, children, variant = "solid", external = false, className = "" }) {
  const classes = `inline-flex items-center gap-2 px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider transition-colors ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
