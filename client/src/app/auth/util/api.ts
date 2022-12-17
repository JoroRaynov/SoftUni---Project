import { IUser } from "src/app/shared/interfaces/user";

export function setSession(data: IUser) {

    // const user = {
    //     _id: data._id,
    //     email: data.email,
    //     accessToken: data.accessToken
    // }

    localStorage.setItem('currentUser', JSON.stringify(data));
}


export function getSession() { 
    const local = localStorage.getItem('currentUser');

    return local ? JSON.parse(local) : null;
    // session ? JSON.parse(session) : null
}

// export const setSession = ({ _id, email, accessToken }: IUser) => {

//     const user = { _id, email, accessToken };
//     localStorage.setItem("currentUser", JSON.stringify(user));
//   }
  
//   export const getSession = () => {
//     const local = localStorage.getItem('currentUser');
//     return (
//       local ? JSON.parse(local) : null
//     );
//   }