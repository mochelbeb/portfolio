---
title: uBay
summary: A social media platform for selling and buying second-hand items.
smallCover: /media/projects/ubay/logo.svg
largeCover: /media/projects/ubay/home.jpg
skills: React,TypeScript,Materia-UI,React Query
featured: true
rank: 2
---

## About

```tsx:App.tsx showLineNumbers {1,3-4}
export default async function Page({ params }: Props) {
 let error: any = null;
  const fileContents = readFileSync(
    getPublicPath(`md/blog/${params.slug}.md`),
    "utf8",
  );
  // Use remark to convert markdown into HTML string
  const blogPost = await serialize(fileContents, {
    parseFrontmatter: true,
    mdxOptions: { rehypePlugins: [rehypeHighlight] },
  }).catch((e) => {
    console.error(e);
    error = e;
  });

  if (error?.code === "ENOENT")
    return (
      <p className="text-center w-full mt-20 text-4xl">Project not Found</p>
    );
  if (!blogPost) throw error;

  const matter = blogMatterSchema.parse(blogPost.frontmatter);
  return (
    <>
      <article className="max-w-3xl mx-auto px-4 mt-4 sm:mt-20 flex flex-col gap-3 text-lg">
        <h1 className="text-4xl sm:text-5xl font-bold">{matter.title}</h1>
        <p>{matter.summary}</p>
        <ul className="list-none flex flex-wrap justify-end  mt-auto pt-2 gap-1  w-full">
          {matter.skills.map((skill) => (
            <li key={skill}>
              <Badge variant="outline" className="bg-muted text-sm sm:text-lg">
                {skill}
              </Badge>
            </li>
          ))}
        </ul>
        <Image
          width={1000}
          height={1000}
          priority
          className="rounded-md w-full mx-auto"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw"
          src={matter.largeCover}
          alt="project's home page"
        />
        <div className="max-w-full prose-lg prose prose-h2:text-3xl sm:prose-h2:text-4xl prose-img:rounded-sm dark:prose-invert prose-p:text-foreground p-2">
          <MDXRemote {...blogPost} />
        </div>
      </article>
    </>
  );
}
```

This was a project in 4th year in college, which I've built with my classmates.

The platform aims to help ease selling and buying second-hand items by acting as a intermediary between users (sellers and buyers).

I've built most of the user application and dashboard.

- To review the code: [github.com/i-3b/uBay](https://github.com/i-3b/uBay)

### User Application

- Users can posts items for sell
- Comment, like on posted items and start a chat with the seller.
- Realtime chatting
- Generate QR code when handing out/receiving an item from a warehouse employee.

#### Gallery

<div className="grid md:grid-cols-2 [&_img]:m-0 gap-1">![first page](/media/projects/ubay/first-page.png)
![Home](/media/projects/ubay/home.jpg)
![Post details](/media/projects/ubay/post-details.jpg)
![Chat](/media/projects/ubay/chat.jpg)
![preferences form](/media/projects/ubay/preferences.jpg)
![user's transactions](/media/projects/ubay/transactions.png)</div>

### Dashboards

- Statistics page built with [nivo](https://nivo.rocks/)
- Tables for viewing and editing all the entities in the platform.

<div className="grid gap-1 [&_img]:m-0">![Statistics](/media/projects/ubay/statistics.png)
![Users table](/media/projects/ubay/users.jpg)</div>
