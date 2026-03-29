import { useEffect, useState } from "react";
import type { Post } from "../types/Post";
import matter from "gray-matter";

const modules = import.meta.glob<{ default: String }>('/src/content/*.md', { 
  query: '?raw', 
  eager: true 
});

const README = import.meta.glob<{ default: String }>('/README.md', { 
  query: '?raw', 
  eager: true 
});

const usePost = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [genres, setGenres] = useState<Set<string>>(new Set())
    const [readme, setReadme] = useState<Post>();

    useEffect(() => {
        const loadedPosts = Object.keys(modules).map((path) => {
            // O conteúdo bruto agora está em .default devido ao '?raw'
            const rawContent = (modules[path] as any).default; 
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

        setGenres(new Set(loadedPosts.map(p => p.genre)))

        setPosts(loadedPosts);
    }, []);

    useEffect(() => {
        const loadedReadme = Object.keys(README).map((path) => {
            // O conteúdo bruto agora está em .default devido ao '?raw'
            const rawContent = (README[path] as any).default; 
            const { data, content: body } = matter(rawContent); 

            return {
                id: data.id,
                title: data.title || "",
                created: data.created || "",
                modified: data.modified || "",
                content: body,
                genre: data.genre || ""
            };
        });

        setReadme(loadedReadme[0]);
    }, []);

    return {posts, genres, readme}
}

export default usePost