import { Card, CardContent } from '@/components/ui/card';

const integrationCategories = [
  {
    category: 'Cloud Platforms',
    items: [
      { name: 'AWS', description: 'EC2, S3, Lambda, RDS' },
      { name: 'Azure', description: 'VMs, App Service, SQL DB' },
      { name: 'GCP', description: 'Compute, Cloud Run, BigQuery' },
    ]
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', description: 'Component-based development' },
      { name: 'Vue', description: 'Progressive framework' },
      { name: 'Next.js', description: 'Full-stack React framework' },
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', description: 'Server-side JavaScript' },
      { name: 'Python', description: 'Versatile backend language' },
      { name: 'Express', description: 'Minimal web framework' },
    ]
  },
  {
    category: 'DevOps',
    items: [
      { name: 'Docker', description: 'Container management' },
      { name: 'Kubernetes', description: 'Orchestration platform' },
      { name: 'GitHub', description: 'Repository & CI/CD' },
    ]
  },
];

export function Integrations() {
  return (
    <section id="integrations" className="py-24 bg-black border-t border-purple-800/30 relative">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-b from-purple-800 to-purple-900 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-white mb-4 animate-fade-in-up">Tech Stack</h2>
          <p className="text-gray-400 text-lg animate-fade-in-up stagger-1">Modern technologies we work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {integrationCategories.map((category, categoryIdx) => (
            <div key={category.category} className="space-y-4 animate-fade-in-up" style={{ animationDelay: `${categoryIdx * 0.1}s` }}>
              <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wide px-1">{category.category}</h3>
              
              <div className="space-y-3">
                {category.items.map((item, itemIdx) => (
                  <Card 
                    key={item.name}
                    className="bg-black/40 border border-purple-800/40 hover:border-purple-700/70 transition-all duration-300 group hover:bg-gradient-to-br hover:from-purple-900/30 hover:to-black animate-fade-in-up"
                    style={{ animationDelay: `${(categoryIdx * 3 + itemIdx) * 0.05 + 0.1}s` }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="font-medium text-white text-sm group-hover:text-purple-400 transition-colors duration-200">
                            {item.name}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                        </div>
                        <div className="h-2 w-2 rounded-full bg-purple-700/50 group-hover:bg-purple-500 transition-colors duration-200 mt-1 flex-shrink-0"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
