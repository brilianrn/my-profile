import "@/shared/styles/fonts.style.css";
import "@/shared/styles/globals.css";

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Brilian Rachmad | Full Stack Developer",
  description:
    "Welcome to my professional profile. I am a software engineer, web developer and open-source contributor.",
  metadataBase: new URL("https://brilian-rachmad.vercel.app"),
  openGraph: {
    title: "Brilian Rachmad | Full Stack Developer",
    description:
      "Official portfolio of Brilian Rachmad Nurwachidin. Check out my experience, works, and skills in software development.",
    url: "https://brilian-rachmad.vercel.app",
    siteName: "Brilian Rachmad",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Brilian Rachmad – Software Engineer Portfolio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brilian Rachmad | Full Stack Developer",
    description:
      "Official portfolio of Brilian Rachmad Nurwachidin. Check out my experience, works, and skills in software development.",
    images: ["/og-image.png"],
  },
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  let locale = "id";
  let messages = {};

  try {
    locale = await getLocale();
    messages = await getMessages();
  } catch (error) {
    console.error("Error loading locale/messages:", error);
  }

  return (
    <html lang={locale} className="font-regular">
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};
