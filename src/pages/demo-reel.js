import React, { useState } from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "tailwindcss/tailwind.css";

Modal.setAppElement("#__next");

const DemoReel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Proyecto 1",
      description: "Descripción detallada del Proyecto 1.",
      thumbnail: "images/thumbnails/project-1.jpg",
    },
    {
      id: 2,
      title: "Proyecto 2",
      description: "Descripción detallada del Proyecto 2.",
      thumbnail: "/path-to-thumbnail2.jpg",
    },
    {
      id: 3,
      title: "Proyecto 3",
      description: "Descripción detallada del Proyecto 3.",
      thumbnail: "/path-to-thumbnail3.jpg",
    },
  ];

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
          className="w-full bg-gradient-to-r from-gray-800 to-black p-4 rounded-lg shadow-inner"
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
            slidesPerView={3}
            className="flex justify-center"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="cursor-pointer">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  onClick={() => openModal(project)}
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Detalles del Proyecto"
          className="bg-white text-black p-6 rounded-lg max-w-md mx-auto mt-20 transition-all transform scale-100"
          overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center transition-opacity"
          shouldCloseOnOverlayClick={true}
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

export default DemoReel;
