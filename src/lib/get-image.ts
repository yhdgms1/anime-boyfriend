const entries = Object.entries(
  import.meta.glob('../assets/images/*.webp', {
    as: 'url',
    eager: true
  })
);

const images = entries.reduce((acc, [name, src]) => {
  const path = name.split('/');

  acc[path[path.length - 1].split('.')[0]] = src;

  return acc;
}, {});

const getImage = (name: string) => {
  return images[name];
}

export { images, getImage }