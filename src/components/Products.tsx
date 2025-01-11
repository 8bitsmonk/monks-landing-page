import app1 from "../assets/app1.png";
import app2 from "../assets/app2.png";

function Products() {
  return (
    <section id="products-section" className="bg-white min-h-screen px-4 pt-10">
      <div className="container mx-auto flex flex-col justify-between">
        {/* Header Section */}
        <div className="flex flex-col items-center">
          <div className="relative py-3 px-6 bg-yellow-300 my-4 md:my-12">
            <h1 className="font-bold underline text-2xl md:text-3xl lg:text-5xl relative z-10 text-center">
              OUR PRODUCTS
            </h1>
            <div
              className="absolute inset-0 bg-white"
              style={{
                clipPath:
                  "polygon(5% 50%, 0% 5%, 0% 95%, 5% 50%, 95% 50%, 100% 95%, 100% 5%, 95% 50%)",
              }}
            ></div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-8">
          <div className="w-full lg:w-[60%] px-4 lg:pl-8">
            <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl text-transparent bg-gradient-to-r from-black via-purple-600 to-purple-950 bg-clip-text">
              HRIVIO
            </h1>
            <h2 className="font-bold text-4xl md:text-6xl lg:text-8xl text-transparent bg-gradient-to-r from-black via-pink-600 to-purple-900 bg-clip-text">
              Redefine HR
            </h2>
            <p className="mt-6 lg:mt-12 font-medium text-lg md:text-2xl lg:text-4xl">
              HRIVIO is where smart tech meets effortless HR. Manage hiring,
              payroll, attendance, and performance—all in one sleek app. Built
              for dynamic teams, HRIVIO simplifies your work so you can focus on
              what matters: your people.
            </p>
          </div>

          <div className="w-full lg:w-[40%] flex justify-center items-center p-4">
            <img
              src={app1}
              alt="HRIVIO App"
              className="w-[280px] md:w-[400px] lg:w-[540px] h-auto  md:h-[90vh] object-contain"
            />
          </div>
        </div>
      </div>

      {/* second */}

      <div className="container mx-auto flex flex-col justify-between">
        {/* Header Section */}

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-8">
          <div className="w-full lg:w-[40%] flex justify-center items-center p-4">
            <img
              src={app2}
              alt="HRIVIO App"
              className="w-[280px] md:w-[400px] lg:w-[540px] h-auto  md:h-[90vh] object-contain"
            />
          </div>
          <div className="w-full lg:w-[60%] px-4 lg:pl-8">
            <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl text-transparent bg-gradient-to-r from-slate-700 via-black-800 to-black bg-clip-text">
              SUPERGAMES
            </h1>
            <h2 className="font-bold text-4xl md:text-6xl lg:text-8xl text-transparent bg-gradient-to-r from-orange-400 via-orange-700 to-indigo-600 bg-clip-text">
              Play, Learn, and Grow
            </h2>
            <p className="mt-6 lg:mt-12 font-medium text-lg md:text-2xl lg:text-4xl">
              SuperGames is designed for kids, combining fun and learning in
              every game. Our interactive experiences help children develop
              essential skills, spark creativity, and foster growth—all while
              having a great time. Learning has never been this fun!
            </p>

            <p className="md:text-right text-center font-bold text-rose-700 md:text-5xl text-md md:mt-10 mt-4">
              Coming Soon !!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
