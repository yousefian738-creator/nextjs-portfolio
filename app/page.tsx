import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import prisma from "@/lib/db";
import { ArrowRight, MessageCircle } from "lucide-react";
// import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const posts = await prisma.blogPost.findMany({
    orderBy : {createdat : "desc"},
    take : 3,
  }) 

  return (
    <main className=" min-h-screen">
      {/* Hero section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className=" text-4xl font-bold mb-4">
          Hi , I&apos;m Alireza Yousefian
        </h1>
        <p className=" text-muted-foreground text-lg max-w-md mb-6">
          A full-stack develpor passionate about building great web experiences.
        </p>
        <div className=" flex gap-4">
          <Button asChild>
            <Link href="/blog">Read Blog</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/comments">
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact Me
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className=" text-2xl font-bold mb-4">About Me</h2>
        <p className=" text-muted-foreground">
          I specialize in React,Next.js ,TyperScript. with years of experience
          building scalable applications, Ilove turning ideas into reality.
        </p>
      </section>

      {/* Recent Posts  */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className=" text-2xl font-bold mb-4">Recent Posts</h2>
        <div>

        {posts.length > 0 ? (
          <div className=" flex flex-col gap-4">
            {posts.map((post) => (
              <Card
                key={post.id}
                className=" hover:bg-accent transition-colors"
                >
                <Link href={`/blog/${post.slug}`}>
                  <CardContent  className="p-4">
                    <h3 className="font-semibold">{post.title}</h3>
                    <p className="text-sm to-muted-foreground">
                    {new Date(post.createdat).toLocaleDateString()}
                  </p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        ) : (
          <p className=" text-muted-foreground"> No Posts yet. </p>
        )}
        </div>
        <Button variant="ghost" asChild className="mt-4 px-0">
          <Link href="/blog">
          View all posts <ArrowRight className="w-4 h-4 ml-1"/>
          </Link>
        </Button>
      </section>
    </main>
  );
}
