import React from "react";

function LandingPage() {
  return (
    <section className="min-h-screen bg-primary/10">
      <div className="container mx-auto px-4 py-8 h-full flex flex-col md:flex-row items-start">
        <div className="w-full md:w-1/2 order-1 md:order-1 flex flex-col justify-center items-center md:items-start text-center md:text-left mb-8 md:pt-24 lg:pl-36">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-800 mb-6">
            From First Step to <br className="hidden sm:block" />
            Next Leap Your <br className="hidden sm:block" />
            Career, Your Way.
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md">
            Upskill Today. Lead Tomorrow. Join now and future proof your career.
          </p>

          <div className="w-full flex justify-center md:justify-start mt-auto md:mt-0">
            <button className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 order-2 md:order-2 flex justify-center items-center my-8 md:my-6 lg:pr-20">
          <div className="relative w-4/5 md:w-full max-w-md">
            <div className="absolute -inset-4 bg-primary/30 rounded-2xl rotate-4 opacity-60"></div>
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
              alt="Professional woman"
              className="relative rounded-2xl object-contain w-full sm:h-[500px] shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
