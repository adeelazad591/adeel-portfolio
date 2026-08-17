"use client";

// Client component so the copyright year is computed in the browser (like
// the original SPA) instead of being frozen at server build time.
export const Footer = () => {
  return (
    <footer className="text-slate border-navy-lightest flex items-center justify-center border-t px-4 py-4 text-center">
      <div className="container mx-auto">
        <p className="text-sm">
          Designed & Built by Adeel Azad &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
