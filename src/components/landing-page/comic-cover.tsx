import React from "react";

const ComicCover = () => {
  return (
    <div className="relative w-full h-full">
      <div
        className="w-full h-full bg-no-repeat bg-contain bg-center"
        style={{
          backgroundImage: `url('https://ik.imagekit.io/danielcmadeley/dino/comic-cover.png?updatedAt=1729717630719')`,
        }}
        role="img"
        aria-label="Comic Cover"
      />
      <h1 className="absolute bottom-4 right-4 text-6xl font-bold text-white max-w-[450px]">
        Rebooting the <span className="text-red-500 text-7xl">Cretaceous</span>
      </h1>
    </div>
  );
};

export default ComicCover;
