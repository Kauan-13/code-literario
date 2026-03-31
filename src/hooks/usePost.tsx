import { Buffer } from 'buffer';
window.Buffer = Buffer;

import { useMemo, useState } from "react";
import type { Post } from "../types/Post";
import matter from "gray-matter";

const modules = import.meta.glob<{ default: string }>('/src/content/*.md', { 
  query: '?raw', 
  eager: true 
});

const README = import.meta.glob<{ default: string }>('/README.md', { 
  query: '?raw', 
  eager: true 
});

const initialPosts: Post[] = Object.keys(modules).map((path) => {
    const rawContent: string = (modules[path]).default;
    const { data, content: body } = matter(rawContent);

    return {
        id: data.id,
        title: data.title || "sem_titulo",
        created: new Date(data.created || ""),
        modified: new Date(data.modified || ""),
        content: body,
        genre: data.genre || "sem_genero"
    };
});

const readmeModule = Object.values(README)[0];
const { data, content: body } = matter(readmeModule.default);

const initialReadme: Post = {
    id: data.id,
    title: data.title || "README",
    created: new Date(data.created || ""),
    modified: new Date(data.modified || ""),
    content: body,
    genre: data.genre || ""
};

export const usePost = () => {
    const [posts] = useState<Post[]>(initialPosts);
    const [readme] = useState<Post>(initialReadme);

    const genres = useMemo(() => {
        return new Set(posts.map(p => p.genre));
    }, [posts]);

    return { posts, readme, genres };
};

export default usePost