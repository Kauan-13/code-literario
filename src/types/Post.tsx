interface Post {
    id: number;
    title: string;
    created: Date;
    modified: Date;
    content: string;
    genre: string;
    completed: boolean;
}

export type {Post}