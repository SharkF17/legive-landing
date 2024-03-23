export default function Hero() {
  return (
    <>
      <section className="flex min-h-screen bg-legiveblack justify-center items-center">
        <div className="justify-around min-w-[50%] flex">
          <img src="./logo.png" alt="" />
          <div className="flex items-center">
            <h2 className="text-2xl text-legivegold flex px-1">
              <p className="textFlip">N</p>
            </h2>
            <h1 className="text-6xl font-bold text-white text-center">
              LE
              <br />
              GI
              <br />
              VE
            </h1>
            <h2 className="text-2xl text-legivegold flex gap-x-1">
              <p className="textFlip">S</p>
              <p className="textFlip">E</p>
              <p className="textFlip">D</p>
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
