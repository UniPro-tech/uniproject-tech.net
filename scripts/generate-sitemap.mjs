import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { create } from "xmlbuilder";

const postsDirectory = join(process.cwd(), "_posts");

const getPosts = () => {
  const fileNames = readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    const fullPath = join(postsDirectory, fileName);
    const fileContents = readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return {
      ...data,
      slug: fileName.replace(/\.md$/, ""),
    };
  });
  return posts;
};

const generateSitemapXml = (posts) => {
  const root = create("urlset", { version: "1.0", encoding: "UTF-8" });
  root.attribute("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");

  posts.forEach((post) => {
    const url = root.ele("url");
    url.ele("loc", `https://uniproject-tech.net/posts/${post.slug}`);
    url.ele("lastmod", post.date);
    url.ele("changefreq", "monthly");
    url.ele("priority", "0.8");
  });

  let url = root.ele("url");
  url.ele("loc", `https://uniproject-tech.net/`);
  url.ele("lastmod", posts[posts.length - 1].date);
  url.ele("priority", "1.0");

  return root.end({ pretty: true });
};

const main = () => {
  const posts = getPosts();
  const sitemapXml = generateSitemapXml(posts);
  writeFileSync("public/maps.xml", sitemapXml, "utf8");
  console.log("Sitemap generated successfully!");
};

main();
