export interface SignUp {
  email: string;
  nickname: string;
  password: string;
  checkPassword: string;
  github?: string;
  blog?: string;
  introduce?: string;
}

export interface Login {
  email: string;
  password: string;
}
