import { Header } from "@/components/Header/Header";
import { getDictionary } from "./dictionaries";
import "../../../globals.css";

export const metadata = {
  title: "Margaryta Gorbachova",
  description: "Psychiatrist",
};

export default async function RootLayout({ children, params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <html lang={lang}>
      <head />

      <body>
        <Header textTr={dict.header} />
        {children}
      </body>
    </html>
  );
}
