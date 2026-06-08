import { useEffect, useState } from "react";
import type { Page, Post } from "./types";
import { loadPosts, addPost } from "./store";
import HomePage from "./pages/HomePage";
import FoundPage from "./pages/FoundPage";
import AdoptPage from "./pages/AdoptPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  const [page, setPage] = useState<Page>(() => {
    try {
      return (localStorage.getItem("pm-page") as Page) || "home";
    } catch {
      return "home";
    }
  });

  const [posts, setPosts] = useState<Post[]>(loadPosts);

  const go = (p: Page) => {
    setPage(p);
    try {
      localStorage.setItem("pm-page", p);
    } catch {
      /* ignore */
    }
    window.scrollTo(0, 0);
  };

  const handleReport = (data: Omit<Post, "id" | "date">) => {
    const newPost = addPost(data);
    setPosts((prev) => [newPost, ...prev]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  switch (page) {
    case "found":
      return <FoundPage go={go} posts={posts} />;
    case "adopt":
      return <AdoptPage go={go} />;
    case "about":
      return <AboutPage go={go} />;
    default:
      return <HomePage go={go} onReport={handleReport} />;
  }
}
