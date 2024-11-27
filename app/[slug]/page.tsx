import listPosts from "@/api/list-posts";
import BlogContent from "@/templates/blog-content";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const posts = await listPosts();

  return posts.map((post) => ({
    slug: post.json.link.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const posts = await listPosts();
  const post = posts.find(({ json }) => json.link.toLowerCase() === slug);

  if (!post) {
    return {
      title: "Post não encontrado",
      description: "O post que você está procurando não foi encontrado.",
    };
  }

  return {
    title: post.json.title,
    description: post.json.text,
    openGraph: {
      url: `${process.env.NEXT_PUBLIC_URL}/${slug}`,
      title: post.json.title,
      description: post.json.text,
      type: "article",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_URL}/imgs/logo.png`,
          alt: "L & M Finance Logo",
        },
      ],
    },
    twitter: {
      title: post.json.title,
      description: post.json.text,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const posts = await listPosts();
  const post = posts.find(({ json }) => json.link.toLowerCase() === slug);

  if (!post) {
    return <p>Post não encontrado</p>;
  }

  return <BlogContent post={post} posts={posts} />;
}
