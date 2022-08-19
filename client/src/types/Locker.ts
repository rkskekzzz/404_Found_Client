export type Locker = {
  id: number;
  location: string;
  start_time: number;
  end_time: number;
  small_price: number;
  mid_price: number | null;
  big_price: number | null;
  image: string;
  latitude: string;
  longitude: string;
};
