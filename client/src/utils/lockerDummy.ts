import { Locker } from 'src/types/Locker';

// export type Locker = {
//   id: number;
//   location: string;
//   start_time: number;
//   end_time: number;
//   small_price: number;
//   mid_price: number | null;
//   big_price: number | null;
//   image: string;
//   latitude: string;
//   longitude: string;
// };
export const createDummyLocker = (data: Partial<Locker>): Locker => {
  return {
    id: data.id?.toString() ?? Math.random().toString(),
    location: data.location ?? 'location',
    start_time: data.start_time ?? Date.now(),
    end_time: data.end_time ?? Date.now(),
    small_price: data.small_price ?? 1000,
    mid_price: data.mid_price ?? 2000,
    big_price: data.big_price ?? 3000,
    image: data.image ?? 'image',
    latitude: data.latitude ?? '33.33',
    longitude: data.longitude ?? '127.127',
  };
};

export const createDummyLockers = (numbers: number): Locker[] => {
  return Array.from(Array(numbers), () => createDummyLocker({}));
};
