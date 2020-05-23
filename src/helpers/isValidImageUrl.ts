import axios from 'axios';

const mimetypesAllowed = [
  'image/bmp',
  'image/gif',
  'image/svg+xml',
  'image/jpeg',
  'image/png',
  'image/jpg',
  'image',
];

export default async function IsValidImageUrl(
  urlImage: string,
): Promise<boolean> {
  try {
    const axiosResponse = await axios.get(urlImage);

    if (axiosResponse.status !== 200) return false;

    const mimetypeResponse = axiosResponse.headers['content-type'];

    return mimetypesAllowed.includes(mimetypeResponse);
  } catch (_) {
    return false;
  }
}
