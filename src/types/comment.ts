import { User } from './user';

export interface CommemtDate {
  postId: number;
  comments: Comment[];
  pageInfo: Page;
}

export interface Comment {
  commentId: number;
  content: string;
  createdAt: Date;
  user: User;
}

export interface Page {
  pageIndex: number;
  done: true;
}