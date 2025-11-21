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
    category: 'Container & Orchestration',
    items: [
      { name: 'Kubernetes', description: 'Orchestration & deployment' },
      { name: 'Docker', description: 'Container management' },
      { name: 'Terraform', description: 'Infrastructure as code' },
    ]
  },
  {
    category: 'CI/CD & DevOps',
    items: [
      { name: 'GitHub', description: 'Repository & automation' },
      { name: 'GitLab', description: 'Pipeline automation' },
      { name: 'Jenkins', description: 'Build orchestration' },
    ]
  },
  {
    category: 'Enterprise & Data',
    items: [
      { name: 'SAP', description: 'ERP integration' },
      { name: 'PostgreSQL', description: 'Data management' },
      { name: 'OpenAI', description: 'AI & automation' },
    ]
  },
];

export function Integrations() {
  return (
    <section id="integrations" className="py-32 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-light text-white mb-6">Native Integrations</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Seamlessly works with your entire technology stack</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {integrationCategories.map((category, categoryIdx) => (
            <div key={category.category} className="space-y-4 animate-fade-in-up" style={{ animationDelay: `${categoryIdx * 0.1}s` }}>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide px-1">{category.category}</h3>
              
              <div className="space-y-3">
                {category.items.map((item, itemIdx) => (
                  <Card 
                    key={item.name}
                    className="border border-gray-800 hover:border-gray-700 bg-transparent transition-all duration-300 group hover:bg-white/[0.02] animate-fade-in-up"
                    style={{ animationDelay: `${(categoryIdx * 3 + itemIdx) * 0.05 + 0.1}s` }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="font-medium text-white text-sm group-hover:text-gray-100 transition-colors duration-200">
                            {item.name}
                          </h4>
                          <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                        </div>
                        <div className="h-2 w-2 rounded-full bg-gray-700 group-hover:bg-gray-500 transition-colors duration-200 mt-1 flex-shrink-0"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 pt-12 border-t border-gray-900 text-center">
          <p className="text-gray-500 mb-6">Need a custom integration? We support 50+ additional platforms.</p>
          <div className="inline-block px-6 py-3 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors duration-300">
            <p className="text-sm font-medium text-white">Request Custom Integration</p>
          </div>
        </div>
      </div>
    </section>
  );
}
