export interface IUserState {
  name: string;
  email: string;
  role: 'admin' | 'enumerator' | null;
  phone?: string;
  address?: string;
  cnic?: string;
  token?: string;
}
