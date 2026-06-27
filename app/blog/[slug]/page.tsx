import { Button } from "@/components/ui/button";
import MarkdownRender from "@/components/markdown-render";
import prisma from "@/lib/db";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";


interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  //

  const { slug } = await params;

  const post = await prisma.blogPost.findUnique({
    where: { slug },
  });
if (!post){
  notFound();
}



  return (
    <main className="min-h-screen py-16 px-4">
      <article className="max-w-3xl mx-auto ">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back To Blog
          </Link>
        </Button>

        <h1 className="text-3xl font-bold mb-4">{post?.title}</h1>
        <p className="text-muted-foreground mb-8">
          {new Date(post?.createdat).toLocaleDateString()}
        </p>
        <div className="prose prose-neutral dark:prose-invert max-w-none:">
        <MarkdownRender content={post.content}/>
      
        </div>
      </article>
    </main>
  );
}
