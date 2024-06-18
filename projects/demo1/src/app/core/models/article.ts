export type Article = {
  id: string;
  title: string;
  author: string;
  isPublished: boolean;
};

export type CreateArticleDTO = {
  title: string;
  author: string;
};

export type UpdateArticleDTO = {
  title?: string;
  author?: string;
  isPublished?: boolean;
};
