export function Values() {
  const values = [
    {
      title: 'Innovation',
      description: 'Cutting-edge technologies and modern approaches to solve complex challenges.'
    },
    {
      title: 'Quality',
      description: 'Meticulous attention to detail in code, design, and user experience.'
    },
    {
      title: 'Partnership',
      description: 'We work as an extension of your team, invested in your success.'
    },
    {
      title: 'Reliability',
      description: 'Consistent delivery, transparent communication, and dependable support.'
    },
  ];

  return (
    <section id="values" className="py-16 sm:py-24 bg-black border-t border-purple-800/30 relative">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-purple-800 to-purple-900 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-light text-white mb-4 sm:mb-6 animate-fade-in-up">Our Values</h2>
          <p className="text-gray-400 text-base sm:text-lg animate-fade-in-up stagger-1">Principles that guide every decision</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
          {values.map((value, i) => (
            <div 
              key={i} 
              className="p-6 sm:p-8 border border-purple-800/40 hover:border-purple-700/70 transition-all duration-300 group hover:bg-gradient-to-br hover:from-purple-900/30 hover:to-black rounded-lg animate-fade-in-up overflow-hidden relative"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-800/20 to-purple-900/10 rounded-full -mr-10 -mt-10 group-hover:from-purple-800/40 group-hover:to-purple-900/20 transition-colors duration-300"></div>
              
              <h3 className="text-lg font-semibold text-white mb-3 relative z-10">{value.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
