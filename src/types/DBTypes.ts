type User = {
  user_id: number;
  user_name: string;
  email: string;
  role: 'user' | 'admin';
  password: string;
};

type Cat = {
  cat_id: number;
  cat_name: string;
  weight: number;
  owner: User | number;
  filename: string;
  birthdate: string;
  lat: number;
  lng: number;
};

export {Cat, User};
