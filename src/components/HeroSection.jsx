const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-base-100"
    >
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Manage Your Repair Store With Ease
        </h1>
        <p className="text-lg text-base-content/80">
          A simple, powerful solution to handle repairs, customers, and invoices — all in one place.
        </p>
        <div className="space-x-4">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-outline">Learn More</button>
        </div>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="https://via.placeholder.com/400x300"
          alt="Repair Store Illustration"
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
