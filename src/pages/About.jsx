import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from "../context/ThemeContext.jsx";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        <TypeAnimation
          sequence={[
            'Hi, I\'m Jal Parikh',
            1000,
            'I\'m a Full Stack Developer',
            1000,
            'I\'m a Circuit Designer',
            1000,
            'Hi, I\'m Jal Parikh',
          ]}
          wrapper="span"
          speed={50}
          repeat={1}
          className="blue-gradient_text font-semibold drop-shadow"
        />
      </h1>

      <div className='mt-5 flex flex-col gap-3'>
        <p className={isDarkMode ? 'text-gray-300' : 'text-slate-500'}>
          I’m currently pursuing a degree in Electronics and Communication Engineering 
          at IIIT Hyderabad, where I’m also an undergraduate researcher at the 
          Robotics Research Center. I enjoy working across software and hardware domains
          and am driven to build scalable, impactful tech solutions.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='relative group w-20 h-20 block-container cursor-pointer' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
              <div className='absolute inset-0 flex items-center justify-center bg-gray-800/90 text-white text-sm font-medium rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'>
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Positions of Responsibilty</h3>
        <div className='mt-5 flex flex-col gap-3'>
          <p className={isDarkMode ? 'text-gray-300' : 'text-slate-500'}>
            As a current undergraduate student, I’ve actively taken on various 
            responsibilities within my college that have helped me develop leadership, 
            teamwork, and organizational skills, while contributing to impactful initiatives.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline lineColor={isDarkMode ? "#4B5563" : ""}>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[70%] h-[70%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                  background: isDarkMode ? "#1F2937" : "",
                  color: isDarkMode ? "#FFF" : "",
                }}
                contentArrowStyle={{ borderRight: isDarkMode ? "7px solid #1F2937" : "" }}
                dateClassName={isDarkMode ? "text-gray-300" : ""}
              >
                <div>
                  <h3 className={`text-xl font-poppins font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    {experience.title}
                  </h3>
                  <p
                    className={`font-medium text-base ${isDarkMode ? 'text-gray-300' : 'text-black-500'}`}
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className={`font-normal pl-1 text-sm ${isDarkMode ? 'text-gray-400' : 'text-black-500/50'}`}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Courses I've Taken</h3>
        <div className='mt-5 flex flex-col gap-3'>
          <p className={isDarkMode ? 'text-gray-300' : 'text-slate-500'}>
            As part of my Electronics & Communication Engineering education, I've completed
            a diverse range of courses that have built my technical foundation across both 
            hardware and software domains.
          </p>
        </div>

        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[
            {
              title: 'C Programming and DSA',
              icon: '💻',
              color: 'from-blue-500 to-cyan-500',
              delay: 0.1
            },
            {
              title: 'Analog Electronic Circuits & VLSI',
              icon: '🔌',
              color: 'from-purple-500 to-pink-500',
              delay: 0.2
            },
            {
              title: 'Processor Architecture',
              icon: '🖥️',
              color: 'from-orange-500 to-amber-500',
              delay: 0.3
            },
            {
              title: 'Signal Processing',
              icon: '📊',
              color: 'from-green-500 to-emerald-500',
              delay: 0.4
            },
            {
              title: 'Digital Systems and Microcontrollers',
              icon: '🔧',
              color: 'from-red-500 to-rose-500',
              delay: 0.5
            },
            {
              title: 'System Thinking',
              icon: '🧠',
              color: 'from-indigo-500 to-violet-500',
              delay: 0.6
            }
          ].map((course, index) => (
            <div 
              key={`course-${index}`}
              className={`
                relative overflow-hidden rounded-xl shadow-lg p-6
                transform transition-all duration-500 hover:scale-105
                animate-fade-in-up
                ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}
              `}
              style={{
                animationDelay: `${course.delay}s`,
                opacity: 0,
                animation: `fadeInUp 0.6s ease-out ${course.delay}s forwards`
              }}
            >
              {/* Animated gradient background */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r ${course.color} opacity-10 
                  hover:opacity-20 transition-opacity duration-300`}
              />
              
              {/* Course icon */}
              <div className="text-4xl mb-3">{course.icon}</div>
              
              <h4 className='text-lg font-medium relative z-10 mb-2'>
                {course.title}
              </h4>
              
              {/* Progress bar animation */}
              <div className="w-16 h-1 bg-gradient-to-r rounded-full mt-1 mb-3 relative overflow-hidden 
                transition-all duration-300 group-hover:w-full" style={{ 
                  background: `linear-gradient(to right, ${isDarkMode ? '#60a5fa' : '#3b82f6'}, ${isDarkMode ? '#2dd4bf' : '#0ea5e9'})` 
                }}>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Achievements Section */}
      <div className='py-16'>
        <h3 className='subhead-text'>Achievements</h3>
        <div className='mt-5 flex flex-col gap-3'>
          <p className={isDarkMode ? 'text-gray-300' : 'text-slate-500'}>
            Throughout my academic journey, I've been recognized for both technical and scholastic accomplishments
            that reflect my dedication to excellence.
          </p>
        </div>

        <div className='mt-8 space-y-4'>
          {[
            {
              title: '3rd place in Line-Follower Competition',
              organization: 'Electronics and Robotics Club, IIIT Hyderabad',
              icon: '🤖',
              color: 'from-blue-500 to-teal-500'
            },
            {
              title: '1st place in Codentine 2.0 coding contest',
              organization: 'MIT Manipal',
              icon: '🏆',
              color: 'from-yellow-500 to-amber-500'
            },
            {
              title: 'All India Rank 4398 in IIT JEE-Main',
              organization: 'Top 0.32 percentile',
              icon: '📊',
              color: 'from-green-500 to-emerald-500'
            },
            {
              title: 'Scored 94% in 12th CBSE Board Exam',
              organization: 'Academic Excellence',
              icon: '🎓',
              color: 'from-purple-500 to-indigo-500'
            }
          ].map((achievement, index) => (
            <div 
              key={`achievement-${index}`}
              className={`relative overflow-hidden rounded-xl shadow-lg p-6
                transform transition-all duration-300 hover:translate-x-2
                ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}
                animate-fade-in-right`}
              style={{
                animationDelay: `${index * 0.15}s`,
                opacity: 0,
                animation: `fadeInRight 0.5s ease-out ${index * 0.15}s forwards`
              }}
            >
              <div 
                className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${achievement.color}`}
              />
              
              <div className="flex items-start">
                <div className="text-3xl mr-4">{achievement.icon}</div>
                
                <div>
                  <h4 className="text-lg font-semibold">{achievement.title}</h4>
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    {achievement.organization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

      <hr className={isDarkMode ? 'border-gray-700' : 'border-slate-200'} />

      <CTA />
    </section>
  );
};

export default About;
