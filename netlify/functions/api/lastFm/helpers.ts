type LastFMImage = {
  size: 'small' | 'medium' | 'large' | 'extralarge' | 'mega';
  '#text': string;
};

export function handleLastFMImages(images: LastFMImage[]) {
  const flatImages = {};
  images.forEach((image) => {
    flatImages[image.size] = image['#text'];
  });
  return flatImages;
}
