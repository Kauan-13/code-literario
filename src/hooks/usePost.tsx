import { useEffect, useState } from "react";
import type { Post } from "../types/Post";
import matter from "gray-matter";

const modules = import.meta.glob<{ default: String }>('/src/content/*.md', { 
  query: '?raw', 
  eager: true 
});

const usePost = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [genres, setGenres] = useState<Set<string>>(new Set())

    useEffect(() => {
        const loadedPosts = Object.keys(modules).map((path) => {
            // O conteúdo bruto agora está em .default devido ao '?raw'
            const rawContent = (modules[path] as any).default; 
            const { data, content: body } = matter(rawContent); 

            return {
                id: data.id,
                title: data.title || 'Sem título',
                date: data.date || '',
                content: body,
                genre: data.genre
            };
        });

        setGenres(new Set(loadedPosts.map(p => p.genre)))

        setPosts(loadedPosts);
    }, []);



    return {posts, genres}
}

export default usePost