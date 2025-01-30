import React, { useState } from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { getAllProjects } from '../lib/posts';
// import "tailwindcss/tailwind.css";

Modal.setAppElement("#__next");

export async function getStaticProps() {
  const projects = getAllProjects();
  return {
    props: { projects },
  };
}


export default function DemoReel({ projects }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  // const projects = [
  //   {
  //     id: 1,
  //     title: "Proyecto 1",
  //     description: "Descripción detallada del Proyecto 1.",
  //     thumbnail: "images/thumbnails/project-1.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "Proyecto 2",
  //     description: "Descripción detallada del Proyecto 2.",
  //     thumbnail: "images/thumbnails/project-1.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Proyecto 3",
  //     description: "Descripción detallada del Proyecto 3.",
  //     thumbnail: "images/thumbnails/project-1.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "Proyecto 4",
  //     description: "Descripción detallada del Proyecto 3.",
  //     thumbnail: "images/thumbnails/project-1.jpg",
  //   },
  //   {
  //     id: 5,
  //     title: "Proyecto 5",
  //     description: "Descripción detallada del Proyecto 3.",
  //     thumbnail: "images/thumbnails/project-1.jpg",
  //   },
  //   {
  //     id: 6,
  //     title: "Proyecto 6",
  //     description: "Descripción detallada del Proyecto 3.",
  //     thumbnail: "images/thumbnails/project-1.jpg",
  //   },    {
  //     id: 7,
  //     title: "Proyecto 7",
  //     description: "Descripción detallada del Proyecto 3.",
  //     thumbnail: "images/thumbnails/project-1.jpg",
  //   },
  // ];



  const openModal = (project) => {
    setCurrentProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentProject(null);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <header className="w-full py-4 bg-gray-900 text-white text-center">
        <h1 className="text-3xl font-bold">Demo Reel</h1>
      </header>

      <main className="w-full max-w-4xl flex flex-col items-center mt-4">
        <div
          className="w-full bg-black rounded-lg shadow-inner"
          style={{ height: "60vh", margin: "0 5%" }}
        >
          <iframe
            src="https://player.vimeo.com/video/533464663?autoplay=1&muted=1"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Demo Reel"
            className="rounded-lg shadow-lg border-4 border-gray-700"
          ></iframe>
        </div>

        <section className="w-full mt-6">
          <h3 className="text-xl font-semibold text-gray-300 text-center mb-4">
            Proyectos destacados
          </h3>
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            className="thumbnails-carousel"/* flex justify-center */
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="cursor-pointer relative group">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="thumbnail-image object-cover group-hover:blur-sm transition duration-300 rounded-lg"
                />
                <div onClick={() => openModal(project)} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                  <p className="text-white text-lg font-bold">{project.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Detalles del Proyecto"
          className={`bg-white text-black p-6 rounded-lg max-w-md mx-auto ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
          } transition-all duration-300 ease-in-out`}
          overlayClassName={`fixed inset-0 bg-black  flex items-center justify-center ${
            isOpen ? 'bg-opacity-75' : 'bg-opacity-0'
          } transition-opacity duration-300 ease-in-out`}
          shouldCloseOnOverlayClick={true}
          closeTimeoutMS={300}
        >
          {currentProject && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {currentProject.title}
              </h2>
              <p>{currentProject.description}</p>
              <button
                onClick={closeModal}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Cerrar
              </button>
            </div>
          )}
        </Modal>
      </main>
    </div>
  );
};

// export default DemoReel;
