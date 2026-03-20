import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Web Development Trends for 2025",
    paragraph:
      "Explore the latest trends in web development including AI integration, advanced frameworks, and performance optimization techniques.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Actrotech Team",
      image: "/images/blog/author-03.png",
      designation: "Software Expert",
    },
    tags: ["development"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "How to Hire Remote Developers Effectively",
    paragraph:
      "Best practices for hiring and managing remote development teams globally. Learn how to build high-performing distributed teams.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Actrotech Team",
      image: "/images/blog/author-02.png",
      designation: "HR Specialist",
    },
    tags: ["staffing"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "UI/UX Best Practices for Modern Applications",
    paragraph:
      "Design principles that enhance user experience and engagement. Create intuitive interfaces that users love with proven UX strategies.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Actrotech Team",
      image: "/images/blog/author-03.png",
      designation: "Design Lead",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
