import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";
import { useEffect, useRef } from "react";
import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  // Initialize refs array for projects
  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, projects.length);
  }, [projects.length]);

  // Set up Intersection Observer for section elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe section title
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe each project card
    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className='max-container'>
      <div 
        ref={sectionRef} 
        className="opacity-0 transform translate-y-10 transition-all duration-1000 ease-out"
      >
        <h1 className='head-text'>
          My{" "}
          <span className='blue-gradient_text drop-shadow font-semibold relative inline-block'>
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-teal-500 transition-all duration-1000 ease-in-out project-underline"></span>
          </span>
        </h1>

        <p className={`mt-2 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-slate-500'}`}>
          I have worked on projects spanning both hardware and software domains, 
          and some that combine the two. These projects reflect my interest in building 
          end-to-end systems—from low-level electronics to full-stack applications—that 
          solve meaningful problems.
        </p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project, index) => (
          <div 
            className='lg:w-[400px] w-full opacity-0 transform translate-y-10 transition-all duration-700 ease-out'
            style={{ transitionDelay: `${index * 150}ms` }}
            ref={el => projectRefs.current[index] = el}
            key={project.name}
          >
            <div className='project-card-container'>
              <div className='block-container w-12 h-12 project-icon'>
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={project.iconUrl}
                    alt={project.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>

              <div className='mt-5 flex flex-col'>
                <h4 className={`text-2xl font-poppins font-semibold ${isDarkMode ? 'text-white' : ''}`}>
                  {project.name}
                </h4>
                <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-slate-500'}`}>{project.description}</p>
                <div className='mt-5 flex items-center gap-2 font-poppins'>
                  <Link
                    to={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`font-semibold project-link ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt='arrow'
                    className='w-4 h-4 object-contain'
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx="true">{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .animate-in .project-underline {
          width: 100%;
        }
        
        .project-card-container {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          padding: 1rem;
        }
        
        .project-card-container:hover {
          transform: translateY(-5px) perspective(1000px) rotateX(2deg);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        .project-icon {
          position: relative;
          z-index: 10;
          transition: transform 0.3s ease;
        }
        
        .project-card-container:hover .project-icon {
          transform: scale(1.1);
        }
        
        .project-link {
          position: relative;
          overflow: hidden;
        }
        
        .project-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: ${isDarkMode ? '#60a5fa' : '#2563eb'};
          transition: width 0.3s ease;
        }
        
        .project-link:hover::after {
          width: 100%;
        }
      `}</style>

      <hr className={isDarkMode ? 'border-gray-700' : 'border-slate-200'} />

      <CTA />
    </section>
  );
};

export default Projects;
