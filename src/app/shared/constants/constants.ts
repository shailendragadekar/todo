import { uri } from './uri-list';

export const api = {
  auth: {
    create: `${uri.auth.url}/user/Create`,
    login: `${uri.auth.url}/user/Login`,
    logout: `${uri.auth.url}/user/Logout`
  }
};
