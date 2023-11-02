import "./globals.css";
import Footer from "./UI/Footer/footer";
import Header from "./UI/header/header";

export const metadata = {
  title: "Petara Corp",
  description: "Corporate Gifting | Bouncy & Inflatables Provider",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="page-offset min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
