export function Values() {
  const values = [
    {
      title: 'Innovation',
      description: 'Cutting-edge solutions that drive efficiency and competitive advantage.'
    },
    {
      title: 'Integrity',
      description: 'Trust and transparency in everything we do for our clients.'
    },
    {
      title: 'Growth',
      description: 'Empowering businesses to scale faster and achieve their goals.'
    },
    {
      title: 'Customer First',
      description: 'Your success is our priority—we build solutions that make an impact.'
    },
  ];

  return (
    <section id="values" className="py-32 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-light text-white mb-6 animate-fade-in-up">Our Values</h2>
          <p className="text-gray-500 text-lg animate-fade-in-up stagger-1">What drives Autonex</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, i) => (
            <div 
              key={i} 
              className="p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 group hover:bg-white/[0.02] rounded-lg animate-fade-in-up overflow-hidden relative"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -mr-10 -mt-10 group-hover:bg-white/10 transition-colors duration-300"></div>
              
              <h3 className="text-lg font-semibold text-white mb-3 relative z-10">{value.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed relative z-10">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
