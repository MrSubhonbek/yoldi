export interface IUser {
  name: string;
  email: string;
  slug: string;
  image?: IImg;
  cover?: IImg;
  description?: string;
}
interface IImg {
  id: string;
  usl: string;
  width: string;
  height: string;
}
