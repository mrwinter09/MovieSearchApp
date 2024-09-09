import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ivan Winter - Movie App",
  description:
    "Sogeti Front-End Developer Assessment Movie App. Search for movie details including title, year, genre, and more, using the OMDB API.",
  keywords:
    "Sogeti, Front-end Developer, Movie App, OMDB API, Next.js, TypeScript, Ivan Winter",
  authors: [
    {
      name: "Ivan Winter",
      url: "https://www.linkedin.com/in/ivan-winter-5a470669/",
    },
  ],
};

export const viewport = "width=device-width, initial-scale=1.0";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="Sogeti, Front-end Developer, Movie App, OMDB API, Next.js, TypeScript, Ivan Winter"
        />
        <meta name="authors" content="Ivan Winter" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <title>Ivan Winter - Movie App</title>
        <meta
          name="description"
          content="Sogeti Front-End Developer Assessment Movie App. Search for movie details including title, year, genre, and more, using the OMDB API."
        />
        <link rel="icon" href={"/profile.svg"} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
