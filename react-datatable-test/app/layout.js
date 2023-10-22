import "./globals.css";

export const metadata = {
  title: "React DataTable Interview Test",
  description: "Powered by Next 13.5",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
