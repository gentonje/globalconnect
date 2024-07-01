import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { QuizProvider } from "./components/main/Content/QuizContext";




// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Global Connect Services",
  description:
    "Access education services,ecommerce,travel,logistic,personal services,consultancy all at the click of a button",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className="font-sans text-ellipsis text-[17px]">
          {/* className={inter.className}  */}
          
          <QuizProvider>
         
            {children}
            </QuizProvider>
          <Toaster position="top-center" richColors />
        </body>
      </html>
    </>
  );
}
