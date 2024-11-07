
export interface Post {
    id: number;
    userId: number;
    title: number;
    body: string;
}

export interface Comment {
    id: number;
    postId: number;
    name: number;
    email: string;
    body: string;
}