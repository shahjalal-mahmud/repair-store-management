const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-6 bg-base-200">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold">Features</h2>
        <p className="text-base-content/70 mt-2">
          Everything you need to run your repair store efficiently.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h3 className="card-title">Customer Management</h3>
            <p>Track customer details, repair status, and history easily.</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h3 className="card-title">Invoice System</h3>
            <p>Create, print, and manage invoices with just a few clicks.</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h3 className="card-title">Stock Tracking</h3>
            <p>Monitor parts and accessories inventory in real time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
