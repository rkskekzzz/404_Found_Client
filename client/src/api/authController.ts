import { AuthResponse } from 'src/types/Auth';
import authControllerAxiosInstance from './authControllerAxiosInstance';

const authController = {
  register: async (nickname: string, email: string, password: string, password2: string): Promise<AuthResponse> => {
    return authControllerAxiosInstance<AuthResponse>({
      method: 'POST',
      data: { nickname, email, password, password2 },
      url: '/users/register',
    });
  },
  login: async (email: string, password: string): Promise<AuthResponse> => {
    return authControllerAxiosInstance<AuthResponse>({
      method: 'POST',
      data: { email, password },
      url: '/users/login',
    });
  },
};

export default authController;
