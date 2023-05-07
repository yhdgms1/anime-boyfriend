const entries = Object.entries(
  import.meta.glob('../assets/images/*.webp', {
    as: 'url',
    eager: true
  })
);

const images = entries.reduce((acc, [name, src]) => {
  const path = name.split('/');

  acc[path[path.length - 1].split('.')[0]] = (new URL(src, document.location.href)).toString();

  return acc;
}, {});

const getImage = (name: string) => {
  return images[name];
}

export { images, getImage }