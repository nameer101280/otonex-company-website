import { Card, CardContent } from '@/components/ui/card';

const integrations = [
  { name: 'AWS', icon: '☁️' },
  { name: 'Azure', icon: '☁️' },
  { name: 'GCP', icon: '☁️' },
  { name: 'Kubernetes', icon: '⚙️' },
  { name: 'Docker', icon: '📦' },
  { name: 'GitLab', icon: '📚' },
  { name: 'GitHub', icon: '📚' },
  { name: 'Terraform', icon: '🏗️' },
  { name: 'Jenkins', icon: '🔄' },
  { name: 'SAP', icon: '💼' },
  { name: 'OpenAI', icon: '🤖' },
  { name: 'PostgreSQL', icon: '🗄️' },
];

export function Integrations() {
  return (
    <section id="integrations" className="py-24 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-light text-white mb-4">Integrations</h2>
          <p className="text-gray-500">Works with your entire stack</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {integrations.map((integration) => (
            <Card 
              key={integration.name}
              className="bg-transparent border border-gray-800 hover:border-gray-700 transition-colors duration-300"
            >
              <CardContent className="flex flex-col items-center justify-center py-8">
                <div className="text-4xl mb-2">{integration.icon}</div>
                <p className="text-xs text-gray-500 text-center">{integration.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
