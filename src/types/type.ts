export type CardProps = {
  id: number;
  title: string;
  img: string;
  way: string;
  recycle: string[];
  contents: string;
  reload?: boolean;
};

export type MapCards = {
  id: number;
  title: string;
  img: string;
  way: string;
  recycle: string[];
  contents: string;
  latitude: number;
  longitude: number;
};
