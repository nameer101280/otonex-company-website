export function Values() {
  const values = [
    {
      title: 'Innovation',
      description: 'Cutting-edge solutions that drive efficiency.'
    },
    {
      title: 'Integrity',
      description: 'Trust and transparency in everything we do.'
    },
    {
      title: 'Growth',
      description: 'Empowering businesses to scale faster.'
    },
    {
      title: 'Customer First',
      description: 'Your success is our priority.'
    },
  ];

  return (
    <section id="values" className="py-24 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-light text-white mb-4">Our Values</h2>
          <p className="text-gray-500">What drives Autonex</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {values.map((value, i) => (
            <div key={i} className="p-8 border border-gray-800 hover:border-gray-700 transition-colors duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <h3 className="text-lg font-medium text-white mb-3">{value.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
