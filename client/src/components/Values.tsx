export function Values() {
  const values = [
    {
      title: 'Driving Innovation Forward',
      description: 'We embrace cutting-edge AI to create smarter, more efficient automation solutions.'
    },
    {
      title: 'Committed to Integrity & Trust',
      description: 'Trust and transparency are at the core of everything we do for our clients.'
    },
    {
      title: 'Empowering Business Growth',
      description: 'We help businesses scale faster with AI-driven efficiency, reducing manual tasks and unlocking new opportunities.'
    },
    {
      title: 'Putting Customers First',
      description: 'Your success is our priority—we build solutions that truly make an impact.'
    },
  ];

  return (
    <section id="values" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">The Values Behind Otonex</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our values shape everything we do. From innovation to integrity, we're committed to building AI solutions that empower businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, i) => (
            <div key={i} className="p-8 border border-white/10 hover:border-purple-500/50 transition-colors animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
