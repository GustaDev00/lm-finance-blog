import { type Metadata } from "next";
import listPosts from "@/api/list-posts";
import { HomeTemplate } from "@/templates/home";

export const metadata: Metadata = {
  title: "Welche Art von Service suchen Sie heute?",
  description: "Finden Sie hier den Service, den Sie bei L & M Finance benötigen",
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_URL}/`,
    title: "Welche Art von Service suchen Sie heute?",
    description: "Finden Sie hier den Service, den Sie bei L & M Finance benötigen",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/imgs/logo.png`,
        alt: "L & M Finance Logo",
      },
    ],
  },
  twitter: {
    title: "Welche Art von Service suchen Sie heute?",
    description: "Finden Sie hier den Service, den Sie bei L & M Finance benötigen",
  },
};

const Home = async () => {
  const data = await listPosts();

  if (!data.length) return null;

  return <HomeTemplate values={data} />;
};

export default Home;
