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
    <section id="projects" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-display">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work spanning web applications, mobile apps, and enterprise solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover-elevate transition-all duration-300"
              data-testid={`card-project-${project.id}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  data-testid={`img-project-${project.id}`}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-display text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" data-testid={`badge-tech-${tech}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild data-testid={`button-live-${project.id}`}>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild data-testid={`button-github-${project.id}`}>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                      <Github className="h-4 w-4" />
                      Code
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
