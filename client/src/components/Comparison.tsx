import { Check, X } from 'lucide-react';

export function Comparison() {
  const features = [
    { name: 'Manual Deployments', traditional: true, otonex: false },
    { name: 'Error-Prone Processes', traditional: true, otonex: false },
    { name: 'Limited by Work Hours', traditional: true, otonex: false },
    { name: 'High Labor Costs', traditional: true, otonex: false },
    { name: 'Slow & Time-Consuming', traditional: true, otonex: false },
    { name: 'AI-Powered Automation', traditional: false, otonex: true },
    { name: '24/7 Automated Workflows', traditional: false, otonex: true },
    { name: 'Instant Deployments', traditional: false, otonex: true },
    { name: 'Scalable & Cost-Effective', traditional: false, otonex: true },
    { name: 'Smart Decision Making', traditional: false, otonex: true },
  ];

  return (
    <section id="comparison" className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-black mb-4">Traditional vs Otonex</h2>
          <p className="text-xl text-gray-600">See the difference automation makes</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-6 font-semibold text-black text-lg">Feature</th>
                <th className="text-center py-4 px-6 font-semibold text-black text-lg">Traditional</th>
                <th className="text-center py-4 px-6 font-semibold text-primary text-lg">Otonex</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr key={i} className="border-b border-gray-200 hover:bg-white transition-colors">
                  <td className="py-4 px-6 text-black font-medium">{feature.name}</td>
                  <td className="py-4 px-6 text-center">
                    {feature.traditional ? (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {feature.otonex ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
