import DinoUI from "./_components/dino-ui";

const Design = () => {
  return (
    <>
      <div className="relative w-screen h-screen bg-[url('https://ik.imagekit.io/danielcmadeley/dino/mxdeley_httpss.mj.runmHocz22p-iQ_Rick_and_morty_styled_pixel__95d55bd2-f449-4bc4-9ea9-ade80d3360c9_0.png?updatedAt=1729106463251')] bg-cover bg-center border-b border-stone-900/60">
        <div className="absolute w-1/3 h-full border-r border-stone-900" />
        <div className="absolute w-2/3 h-full border-r border-stone-900" />

        <div className="absolute inset-0 bg-stone-50/60" />
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <h1 className="text-9xl font-nanum text-stone-900 px-8">
            ELEVATE YOUR DESIGN PRESENCE WITH DESIGN + ENGINEERING EXPERTS
          </h1>
        </div>
      </div>
      <DinoUI />
    </>
  );
};

export default Design;
