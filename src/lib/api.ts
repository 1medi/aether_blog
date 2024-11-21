import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

// Get all slugs in the directory
export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

// Get a single post by slug
export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.(md|mdx)$/, ""); // Remove both .md and .mdx extensions
  let fullPath = join(postsDirectory, `${realSlug}.md`);
  
  // Check if the file is an .mdx file instead
  if (!fs.existsSync(fullPath)) {
    fullPath = join(postsDirectory, `${realSlug}.mdx`);
  }

  // Read file content
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

// Get all posts in the directory
export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .filter((slug) => slug.endsWith(".md") || slug.endsWith(".mdx")) // Filter for .md and .mdx files
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1)); // Sort by date
  return posts;
}
