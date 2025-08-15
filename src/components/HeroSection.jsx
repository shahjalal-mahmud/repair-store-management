const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle texture background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2IiBoZWlnaHQ9IjYiPgo8cmVjdCB3aWR0aD0iNiIgaGVpZ2h0PSI2IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDZMNiAwWiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiNlZGU5ZWIiPjwvcGF0aD4KPC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-center min-h-screen gap-12 lg:gap-24 relative z-10">
        {/* Text content */}
        <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <div className="w-14 h-14 rounded-lg bg-[#6D3F5B] flex items-center justify-center shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <span className="font-bold text-xl text-[#6D3F5B] tracking-wide">RepairFlow</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Precision Repair <br className="hidden sm:block" />
            <span className="text-[#6D3F5B]">Management</span> Simplified
          </h1>

          <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
            Take control of your repair shop operations with our intuitive platform. 
            Streamline workflows, track inventory, and delight customers — all from one powerful dashboard.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn bg-[#6D3F5B] hover:bg-[#5a3450] border-none text-white btn-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2">
              Start Free Trial
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="btn btn-outline btn-lg border-gray-300 hover:border-[#6D3F5B] hover:bg-gray-50 text-gray-700 hover:text-[#6D3F5B] transition-all">
              See How It Works
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#6D3F5B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#6D3F5B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14-day free trial</span>
            </div>
          </div>
        </div>

        {/* Dashboard showcase */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
          <div className="relative max-w-2xl mx-auto">
            {/* Dashboard frame */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 transform rotate-1">
              {/* Dashboard header */}
              <div className="bg-[#6D3F5B] p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-white text-sm font-medium">RepairFlow Dashboard</div>
                <div className="w-6"></div>
              </div>
              
              {/* Dashboard content */}
              <div className="p-6 bg-gray-50">
                <div className="grid grid-cols-12 gap-4">
                  {/* Stats cards */}
                  <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="text-sm text-gray-500">Today's Repairs</div>
                    <div className="text-2xl font-bold text-[#6D3F5B] mt-1">14</div>
                    <div className="text-xs text-green-500 mt-1 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                      </svg>
                      +3 from yesterday
                    </div>
                  </div>
                  
                  <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="text-sm text-gray-500">Completed</div>
                    <div className="text-2xl font-bold text-[#6D3F5B] mt-1">8</div>
                    <div className="text-xs text-green-500 mt-1">On track</div>
                  </div>
                  
                  <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="text-sm text-gray-500">Revenue</div>
                    <div className="text-2xl font-bold text-[#6D3F5B] mt-1">$2,450</div>
                    <div className="text-xs text-gray-500 mt-1">Today</div>
                  </div>
                  
                  {/* Recent repairs table */}
                  <div className="col-span-12 bg-white p-4 rounded-lg shadow-sm border border-gray-100 mt-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-[#6D3F5B]">Recent Repairs</h3>
                      <button className="text-xs text-[#6D3F5B] hover:underline">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm">
                        <thead>
                          <tr className="text-left text-gray-500 border-b">
                            <th className="pb-2">ID</th>
                            <th className="pb-2">Customer</th>
                            <th className="pb-2">Status</th>
                            <th className="pb-2 text-right">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { id: '#R-1024', customer: 'Alex Johnson', status: 'In Progress', amount: '$120' },
                            { id: '#R-1023', customer: 'Sarah Miller', status: 'Completed', amount: '$85' },
                            { id: '#R-1022', customer: 'Michael Chen', status: 'Waiting for Parts', amount: '$210' },
                          ].map((repair, index) => (
                            <tr key={index} className="border-b border-gray-100 last:border-0">
                              <td className="py-3 text-gray-700">{repair.id}</td>
                              <td className="py-3">{repair.customer}</td>
                              <td className="py-3">
                                <span className={`px-2 py-1 rounded-full text-xs ${
                                  repair.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                  repair.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                                  'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {repair.status}
                                </span>
                              </td>
                              <td className="py-3 text-right font-medium text-[#6D3F5B]">{repair.amount}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 rounded-full bg-[#6D3F5B]/10"></div>
            <div className="absolute -z-10 -bottom-6 -left-6 w-40 h-40 rounded-full bg-[#6D3F5B]/5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;