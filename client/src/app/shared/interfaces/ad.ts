import { IUser } from "./user";

export interface IAd {
    _id: string;
    title: string;
    category: string;
    imageUrl: string;
    price: number;
    description: string;
    _ownerId: IUser;
    location: string;
    contact: string;

    __v: number;
}

