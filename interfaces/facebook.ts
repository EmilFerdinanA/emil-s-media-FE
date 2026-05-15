export interface IFanspagesDAO {
  name: string;
  access_token: string;
  about: string;
  username?: string;
  picture: Picture;
  id: string;
}

interface Picture {
  data: PictureData;
}

interface PictureData {
  url: string;
}
