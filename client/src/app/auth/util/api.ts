import { IUser } from 'src/app/shared/interfaces/user';

export function setSession(data: IUser) {
  localStorage.setItem('currentUser', JSON.stringify(data));
}

export function getSession() {
  const local = localStorage.getItem('currentUser');

  return local ? JSON.parse(local) : null;
}
