const Body = () => {
  return (
    <div className="space-y-6 lg:flex flex-row-reverse justify-between">
      <div className="flex items-center justify-center  lg:flex-1">
        <img
          className="-rotate-[36deg] h-64 md:h-72 lg:h-96"
          src="./assets/Blue-Shape.svg"
          alt="svg1"
        />
        <img
          className="absolute -rotate-[24deg] h-64 md:h-72 lg:h-96"
          src="./assets/Pink-Shape.svg"
          alt="svg2"
        />
        <img
          className="absolute -rotate-[12deg] h-64 md:h-72 lg:h-96"
          src="./assets/Purple-Shape.svg"
          alt="svg3"
        />
        <img
          className="absolute  h-64 md:h-72 lg:h-96"
          src="./assets/Hero-Model.png"
          alt="hero"
        />
      </div>
      <div className="lg:flex-1 space-y-4">
        <h1 className="text-5xl lg:text-6xl w-4/5 font-bold font-playfair leading-tight">
          Host yourwebsite in less than 5 minutes{" "}
        </h1>
        <p className="font-lato text-gray-400 lg:text-xl">
          With Hoster , get your website up and running in no less than 5
          minutes with the most competitive pricing packages available online.
        </p>
        <form action="" className="flex flex-col gap-4 md:flex-row">
          <input
            className="rounded-md px-16 py-3 placeholder:text-gray-400"
            type="email"
            placeholder="Enter email address"
          />
          <button className="rounded-md px-4 py-3 bg-blue-500 hover:bg-blue-700 text-white">
            Join waitlist
          </button>
        </form>
        <div className="flex gap-2 mt-3">
          <img src="./assets/Checkmark.svg" alt="" />
          <p className="font-lato text-gray-400">
            No spam ,ever . Unsubscribe anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
