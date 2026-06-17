import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "PRESTIJ",
  description: "Secure Digital Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <nav className="flex justify-between items-center p-4 border-b">

          <Link href="/" className="font-bold text-xl">
            PRESTIJ
          </Link>

          <div className="space-x-4">
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </div>

        </nav>

        {children}

      </body>
    </html>
  );
}