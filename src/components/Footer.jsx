import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container flex flex-col items-center justify-center py-6'>
        {/* Optional footer text */}
        {/* <p className='mb-4 text-sm text-gray-500'>&copy; 2025 Jal Parikh. All rights reserved.</p> */}

        <div className='flex gap-4'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-8 h-8 object-contain hover:scale-110 transition-transform duration-200'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
