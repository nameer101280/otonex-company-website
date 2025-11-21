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
    <section id="integrations" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Works with your entire stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seamless integration with the tools and platforms your team already uses
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="flex flex-col items-center justify-center p-6 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 animate-fade-in-up"
            >
              <div className="text-4xl mb-3">{integration.icon}</div>
              <p className="text-sm font-medium text-center">{integration.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
