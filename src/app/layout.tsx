import "./globals.css";
import { Saira_Stencil_One, Pathway_Gothic_One ,Kanit} from "next/font/google";

const saira_Stencil_One = Saira_Stencil_One({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Saira-Stencil-One",
  weight: "400",
});

const pathway_Gothic_One = Pathway_Gothic_One({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Pathway-Gothic-One",
  weight: "400",
});

const kanit = Kanit({
  subsets: ["latin", "thai"], // นอกจาก latin คุณอาจจะต้องการใส่ "thai" สำหรับภาษาไทยด้วย
  display: "swap",
  variable: "--font-Kanit",
  weight: "400",
});

export const metadata = {
  title: "EAST",
  description: "This work was created by KRIT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${pathway_Gothic_One.variable} ${saira_Stencil_One.variable} ${kanit.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
