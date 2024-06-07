import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import { Header } from "./components/Header/Header";
import { Providers } from './redux/provider';

export const metadata = {
  title: "Solar Future",
  description: "Автоматизация инфраструктуры для солнечной энергетики просто",
  keywords: "Solar Future",
  author: "Denis Amirov",
  icons: [
    {
      rel: 'icon',
      sizes: '128x128',
      url: './sun.ico',
    }]
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
