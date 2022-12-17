export interface IUser {
    _id: string;
    email: string;
    hashedPassword: string;
    userAds: string[];
    tel: string;
    accessToken: string;
    __v: number;
}
