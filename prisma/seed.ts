import prisma from "@/lib/prisma";

async function main() {
    const blogPosts = [
        {
            slug: "learn-react-basics",
            title: "Learn React Basics",
            content: `# Learn React Basics\n\n## ⚛️ Core Concepts\n- **Components** - Build UI using reusable functions.\n- **JSX Syntax** - Mix HTML with JavaScript logic easily.\n- **State & Props** - Manage dynamic data and pass it between components.\n\n## 🚀 Performance\n- **Virtual DOM** - Efficient UI rendering for better performance.\n- **Hooks** - Simplify logic with useState, useEffect, and custom hooks.\n- **Lazy Loading** - Load components on demand for faster apps.\n\n## 🧰 Developer Experience\n- **Create React App (Vite)** - Quick setup without complex config.\n- **TypeScript Support** - Add type safety and autocompletion.\n- **React DevTools** - Inspect components and track state changes with ease.`
        },
        {
            slug: "mastering-nextjs-app-router",
            title: "Mastering Next.js App Router",
            content: `# Mastering Next.js App Router\n\n## 🌐 Server-First Routing\nNext.js App Router introduces a powerful system built on React Server Components.\n\n### Key Features:\n1. **Server Components by Default**: Less JavaScript sent to the client.\n2. **Nested Layouts**: Share UI across multiple routes easily.\n3. **Streaming & Suspense**: Display instant loading states while data fetches.`
        },
        {
            slug: "why-you-should-use-typescript",
            title: "Why You Should Use TypeScript",
            content: `# Why You Should Use TypeScript\n\n## 🛡️ Type Safety in JavaScript\nTypeScript adds optional static typing to JavaScript, catching bugs before your code runs.\n\n- **Catch Errors Early**: Find type mismatches during development.\n- **Rich IDE Support**: Enjoy powerful autocomplete and refactoring tools.\n- **Self-Documenting Code**: Types make it clear what data structures look like.`
        },
        {
            slug: "styling-with-tailwind-css",
            title: "Styling with Tailwind CSS",
            content: `# Styling with Tailwind CSS\n\n## 🎨 Utility-First Framework\nTailwind CSS allows you to build modern websites without ever leaving your HTML/JSX.\n\n- **No Custom CSS Needed**: Use classes like \`flex\`, \`pt-4\`, and \`text-center\`.\n- **Responsive Design**: Add mobile-first prefixes like \`md:\` and \`lg:\`.\n- **Highly Customizable**: Easily extend the theme in \`tailwind.config.js\`.`
        },
        {
            slug: "introduction-to-prisma-orm",
            title: "Introduction to Prisma ORM",
            content: `# Introduction to Prisma ORM\n\n## 🗄️ Next-Generation Database Toolkit\nPrisma makes database access easy and type-safe for Node.js and TypeScript.\n\n### Advantages:\n- **Type-Safe Queries**: Auto-generated client based on your schema.\n- **Prisma Schema**: Define your models in a clean, readable language.\n- **Easy Migrations**: Track database changes effortlessly using Prisma Migrate.`
        },
        {
            slug: "understanding-rest-vs-graphql",
            title: "Understanding REST vs GraphQL",
            content: `# Understanding REST vs GraphQL\n\n## 🔄 API Architectural Styles\nChoosing the right API design can significantly impact your application's architecture.\n\n### REST (Representational State Transfer)\n- Multiple endpoints (\`/users\`, \`/posts\`).\n- Over-fetching or under-fetching data can sometimes be an issue.\n\n### GraphQL\n- Single endpoint query language.\n- Ask for exactly what you need, nothing more, nothing less.`
        },
        {
            slug: "git-best-practices-for-teams",
            title: "Git Best Practices for Teams",
            content: `# Git Best Practices for Teams\n\n## 🌿 Clean Version Control Workflow\nWorking smoothly in a team requires discipline and clear conventions.\n\n- **Write Good Commit Messages**: Use imperative mood (e.g., "Fix auth bug").\n- **Feature Branching**: Never push directly to main/master.\n- **Pull Requests**: Code review is key to maintaining quality and sharing knowledge.`
        },
        {
            slug: "the-future-of-ai-in-web-dev",
            title: "The Future of AI in Web Development",
            content: `# The Future of AI in Web Development\n\n## 🤖 Copilots and Beyond\nAI is changing how developers write code, test applications, and design user experiences.\n\n- **AI Assistants**: Tools like GitHub Copilot accelerate writing boilerplate.\n- **Vercel v0**: Generating UI components from text prompts.\n- **The Human Element**: AI is a tool; critical thinking and architecture remain human skills.`
        }
    ];

    console.log("Starting seeding with upsert...");

    for (const post of blogPosts) {
        await prisma.blogPost.upsert({
            where: { slug: post.slug },
            update: post,
            create: post,
        });
    }

    console.log('Seed data has been inserted or updated successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });