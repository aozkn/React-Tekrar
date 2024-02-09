function App() {
  return (
    <div className=" bg-green-600 w-34 flex  flex-col ">
      <h1 className="text-8xl bg-[#ededed] m-auto ">Tailwind CSS </h1>
      <h1 className="text-3xl font-bold text-center  underline">
        Hello world!
      </h1>
      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <div className="flex flex-col justify-between items-center bg-slate-500 rounded-xl w-3/12 h-[250px] ">
          <img
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
            alt="sa"
            className="rounded-xl h-[200px] animate-pulse"
          />
          <p className="line-clamp-1 hover:line-clamp-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            debitis nihil cumque commodi accusantium nulla laudantium assumenda
            ea nobis! Doloribus.
          </p>
        </div>
        <div className="card">
          {" "}
          <img
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
            alt="sa"
            className="rounded-xl h-[200px] animate-pulse"
          />
          <p className="line-clamp-1 hover:line-clamp-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            debitis nihil cumque commodi accusantium nulla laudantium assumenda
            ea nobis! Doloribus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
