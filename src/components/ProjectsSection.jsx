import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Zcoder",
    description: "A real-time peer programming platform featuring synchronized code editing, performance analytics, and gamified learning.",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/deepanshu271005/Zcoder",
  },
  {
    id: 2,
    title: "Text-to-Website Generator",
    description:
      "An AI-assisted tool that converts natural language input into fully responsive websites with customizable design options.",
    image: "/projects/project2.png",
    tags: ["Tailwind", "React.js", "Node.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/deepanshu271005/Product-Dev",
  },
  {
    id: 3,
    title: "Clear-Vision",
    description:
      "An AI-powered system that restores high-quality images from degraded inputs using deep generative models like VAEs, GANs, and Diffusion Models.",
    image: "/projects/project3.png",
    tags: ["TensorFlow", "HTML", "NumPy"],
    demoUrl: "#",
    githubUrl: "https://github.com/deepanshu271005/Clear-Vision",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
            <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
         Here are a few of my most recent projects — built with a strong focus on scalable architecture, real-time interactivity, and user-centric design.
.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/deepanshu271005"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
