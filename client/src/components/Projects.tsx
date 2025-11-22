import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import ecommerceImg from '@assets/generated_images/e-commerce_website_project_mockup.png';
import taskAppImg from '@assets/generated_images/task_management_app_interface.png';
import analyticsImg from '@assets/generated_images/analytics_dashboard_web_application.png';
import socialImg from '@assets/generated_images/social_media_platform_mockup.png';
import portfolioImg from '@assets/generated_images/portfolio_website_design_mockup.png';
import fitnessImg from '@assets/generated_images/fitness_tracking_app_interface.png';

const projects = [
  {
    id: 1,
    title: 'ShopHub E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
    image: ecommerceImg,
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 2,
    title: 'TaskFlow Mobile App',
    description: 'Intuitive task management app with smart prioritization, team collaboration, and cross-platform sync.',
    image: taskAppImg,
    technologies: ['React Native', 'Firebase', 'TypeScript'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 3,
    title: 'Analytics Dashboard Pro',
    description: 'Enterprise-grade analytics platform with real-time data visualization and customizable reporting.',
    image: analyticsImg,
    technologies: ['Next.js', 'D3.js', 'MongoDB', 'Redis'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 4,
    title: 'ConnectSphere Social Network',
    description: 'Modern social networking platform with real-time messaging, content sharing, and AI-powered recommendations.',
    image: socialImg,
    technologies: ['Vue.js', 'GraphQL', 'WebSocket', 'AWS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 5,
    title: 'Creative Portfolio Builder',
    description: 'No-code portfolio builder for creatives with drag-and-drop interface and customizable templates.',
    image: portfolioImg,
    technologies: ['Svelte', 'Tailwind', 'Supabase'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 6,
    title: 'FitTrack Health App',
    description: 'Comprehensive fitness tracking app with workout plans, nutrition tracking, and progress analytics.',
    image: fitnessImg,
    technologies: ['Flutter', 'Python', 'TensorFlow', 'Docker'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 scroll-reveal">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 font-display tracking-tight">Featured Projects</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of client solutions spanning web applications, mobile apps, and enterprise platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className={`group overflow-hidden hover-elevate transition-all duration-300 border-border/50 scroll-reveal`}
              style={{ ['--delay' as string]: `${(project.id % 5) * 0.06}s` }}
              data-testid={`card-project-${project.id}`}
            >
              <div className="relative overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 sm:h-64 object-cover transition-all duration-500 group-hover:scale-110"
                  data-testid={`img-project-${project.id}`}
                />
              </div>
              <CardHeader className="space-y-3">
                <CardTitle className="font-display text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs" data-testid={`badge-tech-${tech}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-4">
                  <Button variant="outline" size="sm" asChild className="flex-1" data-testid={`button-live-${project.id}`}>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">Live</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="flex-1" data-testid={`button-github-${project.id}`}>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                      <Github className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
