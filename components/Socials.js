import Link from "next/link";

import { RiLinkedinLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { SiCodechef, SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { FaCode } from "react-icons/fa"; 

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">

      <Link href="https://www.linkedin.com/in/ravi-sharma-6b5b42235/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine size={22} />
      </Link>

      <Link href="mailto:ravi.sharma172126@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
        <MdEmail size={22} />
      </Link>

      <Link href="https://github.com/uvraviz007" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
        <FaGithub size={22} />
      </Link>

      <Link href="https://www.naukri.com/code360/profile/raviiiiii" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
        <SiCodechef size={22} />
      </Link>

      <Link href="https://leetcode.com/u/uvraviz26/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
        <SiLeetcode size={22} />
      </Link>

      <Link href="https://www.geeksforgeeks.org/user/uvravjfo8/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
        <SiGeeksforgeeks size={22} />
      </Link>

      <Link href="https://takeuforward.org/profile/ravi_sharma" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
        <FaCode size={22} />
      </Link>

    </div>
  );
};

export default Socials;
