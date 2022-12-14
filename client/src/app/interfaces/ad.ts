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

    _v: number;
}

// title: { type: 'string', required: true, minlength: [5, 'Title must be at least 5 characters long']},
//     category: { type: 'string', required: true, minlength: [5, 'Title must be at least 5 characters long']},
//     imageUrl: { type:'string',required: true, 
//     validate: { 
//         validator: (value) => value.startsWith('http'), 
//         message: 'Not valid URL'
//     }},
//     description: {type: 'string', required: true, minLength: [10, 'Description must be at least 10 characters long']},
//     _ownerId: {type: ObjectId, ref: 'User'},
//     location: {type: 'string', required: true},
//     contact: {type: 'string', required: true}