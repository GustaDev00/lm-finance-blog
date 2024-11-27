import { type Metadata } from "next";
import listPosts from "@/api/list-posts";
import { HomeTemplate } from "@/templates/home";

export const metadata: Metadata = {
  title: "Que tipo de serviço está procurando hoje?",
  description: "Encontre o serviço que precisar aqui na Baterias Galileu",
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_API_URL}/`,
    title: "Que tipo de serviço está procurando hoje?",
    description: "Encontre o serviço que precisar aqui na Baterias Galileu",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_API_URL}/imgs/logo.png`,
        alt: "Baterias Galileu Logo",
      },
    ],
  },
  twitter: {
    title: "Que tipo de serviço está procurando hoje?",
    description: "Encontre o serviço que precisar aqui na Baterias Galileu",
  },
};

const Home = async () => {
  const data = await listPosts();

  if (!data.length) return null;

  return <HomeTemplate values={data} />;
};

export default Home;
