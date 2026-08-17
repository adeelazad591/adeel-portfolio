import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-foreground mb-4 text-4xl font-extrabold tracking-tight">
          404
        </h1>
        <p className="text-muted-foreground mb-4 text-xl">
          Oops! Page not found
        </p>
        <Link href="/" className="text-primary underline hover:no-underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
