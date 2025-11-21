import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: 'TechCorp Inc.',
    role: 'Senior Full-Stack Developer',
    duration: '2022 - Present',
    achievements: [
      'Led development of microservices architecture serving 1M+ users',
      'Reduced API response time by 40% through optimization',
      'Mentored team of 5 junior developers',
      'Implemented CI/CD pipeline reducing deployment time by 60%',
    ],
  },
  {
    id: 2,
    company: 'StartupXYZ',
    role: 'Frontend Developer',
    duration: '2020 - 2022',
    achievements: [
      'Built responsive web applications using React and TypeScript',
      'Collaborated with design team to implement pixel-perfect UIs',
      'Improved page load performance by 50% through code splitting',
      'Developed reusable component library used across 3 products',
    ],
  },
  {
    id: 3,
    company: 'Digital Agency Co.',
    role: 'Web Developer',
    duration: '2018 - 2020',
    achievements: [
      'Developed custom WordPress themes and plugins for clients',
      'Managed multiple client projects simultaneously',
      'Implemented SEO best practices increasing organic traffic by 200%',
      'Created automated testing suite reducing bugs by 35%',
    ],
  },
  {
    id: 4,
    company: 'Freelance',
    role: 'Web Developer & Designer',
    duration: '2016 - 2018',
    achievements: [
      'Delivered 20+ websites for small businesses and startups',
      'Designed and developed e-commerce solutions',
      'Maintained 95% client satisfaction rate',
      'Built long-term relationships leading to recurring projects',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-display">Experience</h2>
          <p className="text-lg text-muted-foreground">
            My professional journey in software development
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative" data-testid={`experience-${exp.id}`}>
                <div className="absolute left-8 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden sm:block" />

                <Card className="sm:ml-20">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <CardTitle className="font-display text-2xl">{exp.role}</CardTitle>
                        <CardDescription className="flex items-center gap-2 text-base mt-1">
                          <Building2 className="h-4 w-4" />
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-foreground/80"
                          data-testid={`achievement-${exp.id}-${idx}`}
                        >
                          <span className="text-primary mt-1.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
