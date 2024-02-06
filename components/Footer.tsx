import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="flex container mx-auto justify-between items-center gap-5 py-4 border-t border-gray-600 flex-wrap px-5 md:px-0 flex-col md:flex-row">
      <div className="flex justify-center items-center gap-5 text-blue-500 hover:white ">
      <p style={{ color: '' }}>Contact Me:</p>
        <a href="https://www.linkedin.com/in/harshith-banothu-83605b261/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer">
          <IoMdMail />
        </a>
        <a href="https://twitter.com/Harshith203" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://github.com/haxshith" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <p>&copy; 2024@Harshith</p>
    </div>
  );
};

export default Footer;
