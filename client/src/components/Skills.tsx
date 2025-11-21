import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Database, Palette, Wrench } from 'lucide-react';

const skillCategories = [
  {
    id: 1,
    title: 'Languages & Frameworks',
    icon: Code2,
    skills: [
      'JavaScript/TypeScript',
      'React',
      'Node.js',
      'Next.js',
      'Python',
      'Vue.js',
      'Express',
    ],
  },
  {
    id: 2,
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['Git', 'Docker', 'AWS', 'PostgreSQL', 'MongoDB', 'Redis', 'Vercel'],
  },
  {
    id: 3,
    title: 'Design & UI/UX',
    icon: Palette,
    skills: ['Figma', 'Tailwind CSS', 'Responsive Design', 'Accessibility', 'Prototyping', 'User Research'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-display">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.id} className="hover-elevate" data-testid={`card-skill-${category.id}`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="font-display text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" data-testid={`badge-skill-${skill}`}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
