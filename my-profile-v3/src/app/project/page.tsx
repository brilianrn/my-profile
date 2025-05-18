import ProjectsView from "@/packages/projects/presentation/view";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Projects | Brilian Rachmad",
  description:
    "Welcome to my professional profile. I am a software engineer, web developer and open-source contributor.",
  metadataBase: new URL("https://brilian-rachmad.vercel.app"),
  openGraph: {
    title: "Projects | Brilian Rachmad",
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
    title: "Projects | Brilian Rachmad",
    description:
      "Official portfolio of Brilian Rachmad Nurwachidin. Check out my experience, works, and skills in software development.",
    images: ["/og-image.png"],
  },
};

export default ProjectsView;
