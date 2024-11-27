import listPosts from "@/api/list-posts";
import BlogContent from "@/templates/blog-content";

export async function generateStaticParams() {
  const posts = await listPosts();

  return posts.map((post) => ({
    slug: post.json.link.toLowerCase(),
  }));
}

export default async function Page({ params }: any) {
  const { slug } = await params;

  const posts = await listPosts();
  const post = posts.find(({ json }) => json.link.toLowerCase() === slug);

  if (!post) {
    return <p>Post não encontrado</p>;
  }

  return <BlogContent post={post} posts={posts} />;
}
