import React from "react";

const ComicCover = () => {
  return (
    <div
      className="w-full h-full bg-no-repeat bg-contain bg-center"
      style={{
        backgroundImage: `url('https://ik.imagekit.io/danielcmadeley/dino/comic-cover.png?updatedAt=1729717630719')`,
      }}
      role="img"
      aria-label="Comic Cover"
    />
  );
};

export default ComicCover;
