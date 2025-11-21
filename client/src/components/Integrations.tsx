const integrations = [
  { name: 'AWS', icon: '☁️' },
  { name: 'Google Cloud', icon: '☁️' },
  { name: 'Azure', icon: '☁️' },
  { name: 'Kubernetes', icon: '⚙️' },
  { name: 'Docker', icon: '📦' },
  { name: 'GitLab', icon: '📚' },
  { name: 'GitHub', icon: '📚' },
  { name: 'Terraform', icon: '🏗️' },
  { name: 'Jenkins', icon: '🔄' },
  { name: 'Prometheus', icon: '📊' },
  { name: 'OpenAI', icon: '🤖' },
  { name: 'PostgreSQL', icon: '🗄️' },
];

export function Integrations() {
  return (
    <section id="integrations" className="py-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            Works with your entire stack
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Seamless integration with 50+ tools and platforms
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="flex flex-col items-center justify-center p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 animate-fade-in-up"
            >
              <div className="text-4xl mb-3">{integration.icon}</div>
              <p className="text-sm font-medium text-gray-400 text-center">{integration.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
