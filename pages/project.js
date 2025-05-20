// pages/projects.js
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Projects() {
  const [modalVideo, setModalVideo] = useState('');

  const projects = [
    {
      title: 'Monthly/Yearly Average Temperature Visualization',
      description:
        'An interactive world map using D3.js that displays monthly and yearly average temperatures by country with a slider control, tooltip details, and modal city-level data.',
      tools: ['D3.js', 'JavaScript', 'HTML', 'CSS', 'Panda'],
      link: '/Info3300-2/index.html',
      img: '/Info3300-2/Image.png',
    },
    {
      title: 'Cleaning Robot Bird',
      description:
        'A paper-collecting robot in the shape of a bird built from scratch: we sourced components, used an Arduino board, wheels, designed and 3D-printed the bird parts, and coded it in Arduino’s C++-based language. Check out the demo video for more details.',
      tools: ['Arduino', 'C++', '3D Printing', 'Electronics'],
      video: '/Rapid-pro/Video.mp4',
      img: '/Rapid-pro/Image.jpg',
    },
    {
      title: '2022 FIFA World Cup D3 Visualization',
      description:
        'Interactive maps and bar charts built with D3.js showing goals scored and performance metrics by country during the 2022 FIFA World Cup.',
      tools: ['D3.js', 'JavaScript', 'HTML', 'CSS'],
      link: '/Info3300-1/index.html',
      img: '/Info3300-1/Image.png',
    },
    {
      title: 'Humor Detection',
      description:
        'Built a deep learning model to classify 200K short texts as humorous or not using a bidirectional LSTM. Explored transformer-based approaches like BERT for future improvements. Visualized results and evaluated performance with precision, recall, and confusion matrices.',
      tools: ['Jupyter Notebook', 'TensorFlow', 'Keras', 'NLP', 'Matplotlib'],
      link: '/Info3950/project.pdf',
      img: '/Info3950/Image.png',
    },
    {
      title: 'Simple Forum',
      description:
        'A simplified Reddit-like forum where users log in with Google to create, delete, and like posts. The homepage displays all posts, users can like any post, and delete their own via a hover-activated trash icon. A create-post page allows adding titles and descriptions via an Add button in the navbar.',
      tools: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'Google OAuth', 'Firebase'],
      link: 'https://blog-trends-in-web-git-main-brad2629.vercel.app/',
      img: '/Image.png',
    },
    {
      title: 'VBA Roulette Simulation',
      description:
        'An Excel VBA tool that simulates multiple roulette spins with customizable bet types (specific number, color, odd/even, high/low), spin count, and optional PDF export of results, all within a familiar spreadsheet interface (not supported on macOS).',
      tools: ['Excel', 'VBA', 'UserForm', 'Macros'],
      link: '/VBA/VBA-project.xlsm',
      img: '/VBA/Image.png',
    },
  ];
  const openVideoModal = (src) => {
    setModalVideo(src);
  };

  const closeVideoModal = () => {
    setModalVideo('');
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-900 p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="border bg-card rounded-xl p-6 shadow hover:shadow-md transition flex flex-col justify-between"
            >
              {/* Thumbnail */}
              {proj.img && (
                <img
                  src={proj.img}
                  alt={`${proj.title} thumbnail`}
                  className="mb-4 w-full h-40 object-cover rounded-md"
                />
              )}

              <div>
                <h2 className="text-xl font-semibold mb-2">{proj.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{proj.description}</p>
                <p className="text-sm text-blue-700 mb-4">
                  Tools: {proj.tools.join(', ')}
                </p>
              </div>

              {/* View or Watch link */}
              {proj.video ? (
                <button
                  onClick={() => openVideoModal(proj.video)}
                  className="mt-auto inline-block text-center bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"
                >
                  Watch Demo
                </button>
              ) : (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block text-center bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {modalVideo && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={closeVideoModal}
          >
            <div className="relative w-11/12 max-w-3xl">
              <button
                className="absolute top-2 right-2 text-white text-2xl"
                onClick={closeVideoModal}
              >
                &times;
              </button>
              <video
                src={modalVideo}
                controls
                autoPlay
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
