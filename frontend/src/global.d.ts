interface Article {
  author: string;
  date: string;
  text: string;
}

interface Comment {
  id: number;
  author: string;
  text: string;
  date: string;
}

declare global {
  interface Document {
    __article: Article;
    __comments: Comment[];
    __moreComments: Comment[];
  }
}

export {};
