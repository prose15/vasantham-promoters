import "./globals.css";


export const metadata = {
  title: "Vasantham Promoters",
  description: "A best and affordable real estate company for you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
