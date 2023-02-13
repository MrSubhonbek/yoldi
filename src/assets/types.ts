interface IUser {
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
export interface IAuth {
  email: string;
  password: string;
  name?: string;
}
export default IUser;
