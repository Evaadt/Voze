export interface Comment {
    id: number;
    author: string;
    text: string;
  }
  
  export interface Phrase {
    id: number;
    content: string;
    author: string;
    imageUrl?: string;
    likes: number;
    comments: Comment[];
  }
  