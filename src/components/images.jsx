const imageFiles = import.meta.glob("/src/assets/*", { eager: true });

const images = Object.fromEntries(
  Object.entries(imageFiles).map(([path, module]) => [
    path.split("/").pop(),
    module.default,
  ]),
);

export default images;
