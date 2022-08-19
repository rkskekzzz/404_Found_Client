import { Locker } from 'src/types/Locker';
import lockerControllerAxiosInstance from 'src/api/lockerControllerAxiosInstance';

const lockerController = {
  getLockers: async (): Promise<Locker[]> => {
    return lockerControllerAxiosInstance<Locker[]>({
      method: 'GET',
      url: '/lockers',
    });
  },
};

export default lockerController;
