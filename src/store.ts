import type { Post } from "./types";
import { SAMPLE_POSTS } from "./data";

const POSTS_KEY = "pm-posts";

export function loadPosts(): Post[] {
  try {
    const raw = localStorage.getItem(POSTS_KEY);
    if (raw) return JSON.parse(raw) as Post[];
  } catch {
    /* ignore */
  }
  return [...SAMPLE_POSTS];
}

export function savePosts(posts: Post[]) {
  try {
    localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
  } catch {
    /* storage full */
  }
}

export function addPost(post: Omit<Post, "id" | "date">): Post {
  const posts = loadPosts();
  const newPost: Post = {
    ...post,
    id: crypto.randomUUID(),
    date: new Date().toISOString().slice(0, 10),
  };
  posts.unshift(newPost);
  savePosts(posts);
  return newPost;
}
