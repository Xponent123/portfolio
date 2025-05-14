import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";

const CTA = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <section className='cta'>
      <p className={`cta-text ${isDarkMode ? 'text-white' : ''}`}>
        Have a project in mind? <br className='sm:block hidden' />
        Let's build something together!
      </p>
      <Link to='/contact' className='btn'>
        Contact Me
      </Link>
    </section>
  );
};

export default CTA;
