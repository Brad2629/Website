import { FaLinkedin, FaEnvelope, FaGithub, FaFileAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="mt-16 py-6 w-full border-t flex justify-center gap-6 text-gray-700">
      <a
        href="https://www.linkedin.com/in/bradley-paliska/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-blue-600"
      >
        <FaLinkedin /> LinkedIn
      </a>
      <a
        href="/Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-blue-600"
      >
        <FaFileAlt /> Resume
      </a>
      <a
        href="mailto:paliskabrad@gmail.com"
        className="flex items-center gap-2 hover:text-blue-600"
      >
        <FaEnvelope /> Email
      </a>
      <a
        href="https://github.com/Brad2629"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-blue-600"
      >
        <FaGithub /> Github
      </a>
    </footer>
  );
}
