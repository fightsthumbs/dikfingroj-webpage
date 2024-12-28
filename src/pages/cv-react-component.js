import React from 'react';
import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Printer } from 'lucide-react';


const CV = () => {

  const [language, setLanguage] = useState('en');
  const contentRef = React.useRef(null);

  const handlePrint = useReactToPrint({   contentRef: contentRef,  // En lugar de content: () => componentRef.current
    documentTitle: 'Benjamin_Alvarez_CV' } 
//     {
//     content: () => contentRef.current,
// /*     documentTitle: 'Benjamin_Alvarez_CV', */
//     onBeforePrint: () => {
//       console.log("Preparando para imprimir...");
//     },
//     onAfterPrint: () => {
//       console.log("Documento impreso!");
//     },
//     onError: (error) => {
//       console.error("Error al imprimir:", error);
//     },
//   }
);



  const skills = {
    editingPostProduction: [
      { name: 'Adobe Premiere Pro', level: 5 },
      { name: 'Adobe After Effects', level: 5 },
      { name: 'Adobe Photoshop', level: 5 },
      { name: 'Adobe Audition', level: 5 },
      { name: 'Blender', level: 4 },
      { name: 'DaVinci Resolve', level: 4 },
      { name: 'Adobe Illustrator', level: 4 }
    ],
    audioMusic: [
      { name: 'REAPER', level: 5 },
      { name: 'Pro Tools', level: 4 },
      { name: 'Ableton Live', level: 4 }
    ],
    development: [
      { name: 'HTML/CSS/JavaScript', level: 3 },
      { name: 'Python', level: 3 },
      { name: 'Git/Github', level: 3 },
      { name: 'Autohotkey', level: 4 }
    ],
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'Esperanto', level: 'C1' },
      { name: 'English', level: 'B2' },
      { name: 'Italian', level: 'B1' },
      { name: 'French', level: 'Basic' }
    ]
  };

  const experiences = [
    {
      title: { 
        en:'Editor - Web Series "Esperanto Senlime"',
        es:'Editor - Serie Web "Esperanto Senlime"'
      },
      date: '2023-present',
      responsibilities: {
        en:[
        'Complete editing of 16-episode international web series',
        'Post-production of multicultural and multilingual content',
        'Management of footage filmed across multiple European countries',
        'Client: TEJO (World Organization of Young Esperanto Speakers)'
        ],
        es:[
        'Edición completa de serie web internacional de 16 episodios',
        'Postproducción de contenido multicultural y multilingüe',
        'Gestión de material filmado en múltiples países europeos',
        'Cliente: TEJO (Organización Mundial de Jóvenes Esperantistas)' 
        ]
      }
    },
    {
      title: {
        en:'Educational Content Editor - CCK Centroamérica',
        es:'Editor de Contenido Educativo - CCK Centroamérica'
      },
      date: '2021-2022',
      responsibilities: {
        en:[
        'Editing and post-production of 8 courses for e-learning platform',
        'Development of corporate training content',
        'Optimization of educational material for digital format',
        'Corporate visual identity management'
      ],
      es:[
        'Edición y postproducción de 8 cursos para plataforma e-learning',
        'Desarrollo de contenido para capacitación corporativa',
        'Optimización de material educativo para formato digital',
        'Manejo de identidad visual corporativa'
      ]
      }
    },
    {
      title: {
        en:'Motion Graphics Artist - "Artes en Perspectiva" Program',
        es:'Motion Graphics Artist - Programa "Artes en Perspectiva"'
      },
      date: '2021',
      responsibilities: {
        en:[
        'Design and creation of motion graphics for "Ósmosis" season',
        'Integration of Blender 3D animation with After Effects motion graphics',
        'Development of visual identity and animated elements'
        ],
        es:[
        'Diseño y creación de motion graphics para temporada "Ósmosis"',
        'Integración de animación 3D usando Blender con motion graphics en After Effects',
        'Desarrollo de identidad visual y elementos animados'
        ]
      }
    },
    {
      title: {
        en:'Piano and Violin Teacher - Bansbach Music Academy',
        es:'Profesor de Piano y Violín - Academia de Música Bansbach'
      },
      date: '2022-2024',
      responsibilities: {
        en:[
        'Personalized piano and violin instruction',
        'Development of adapted study programs',
        'Student preparation for performances'
        ],
        es:[
        'Instrucción personalizada en piano y violín',
        'Desarrollo de programas de estudio adaptados',
        'Preparación de estudiantes para presentaciones'
        ]
      }
    }
  ];

  const education = [
    {
      degree: {
        en:'Bachelor\'s Degree in Mass Communication Sciences',
        es:'Bachillerato en Ciencias de la Comunicación Colectiva'
      },
      date: '2023',
      institute: {
        en:[
        'University of Costa Rica',
        'Specialization: Audiovisual and Multimedia Communication'
        ],
        es:[
        'Universidad de Costa Rica',
        'Especialidad: Comunicación Audiovisual y Multimedial'
        ]
      }
    },
    {
      degree: {
        en:'Technical Degree in Piano and Violin Performance and Teaching',
        es:'Técnico Medio en Ejecución y Enseñanza del Piano y Violín'
      },
      date: '2015',
      institute: {
        en:[
        'Conservatorio de Castella',
        ''
        ],
        es:[
        'Conservatorio de Castella',
        ''
        ]
      }
    }
  ]

  const SkillDots = ({ level }) => {
    return (
      <div className="flex gap-1" aria-label={`Skill level: ${level} out of 5`}>
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index < level
                ? 'bg-[#857662] print:border print:border-[#857662]'
                : 'border border-[#857662] bg-transparent'
            }`}
          />
        ))}
      </div>
    );
  };

  const Sidebar = () => (
    <div className="bg-[#2D3748] text-white p-8 print:bg-white print:text-black">
      <div className="mb-8 sidebar">
        <h2 className="text-2xl font-bold border-b-2 border-white pb-2 mt-6 mb-4 print:border-black print:text-black">{language === 'en' ? 'Contact' : 'Contacto'}</h2>
        <p className="my-2">📧 balvrod@gmail.com</p>
        <p className="my-2">📱 (506) 8492-6888</p>
        <p className="my-2">📍 Escazú, San José, Costa Rica</p>
      </div>

      <div className='sidebar'>
        <h2 className="text-2xl font-bold border-b-2 border-white pb-2 mt-6 mb-4 print:border-black print:text-black">{language === 'en' ? 'Technical Skills' : 'Habilidades Técnicas'}</h2>
        
        <h3 className="text-lg font-bold text-gray-200 mt-6 mb-2 print:text-gray-800">{language === 'en' ? 'Editing & Post-Production' : 'Edición y Postproducción'}</h3>
        {skills.editingPostProduction.map((skill) => (
          <div key={skill.name} className="flex justify-between items-center mb-2">
            <span>{skill.name}</span>
            <SkillDots level={skill.level} />
          </div>
        ))}

        <h3 className="text-lg font-bold text-gray-200 mt-6 mb-2 print:text-gray-800">{language === 'en' ? 'Audio & Music' : 'Audio y Música'}</h3>
        {skills.audioMusic.map((skill) => (
          <div key={skill.name} className="flex justify-between items-center mb-2">
            <span>{skill.name}</span>
            <SkillDots level={skill.level} />
          </div>
        ))}

        <h3 className="text-lg font-bold text-gray-200 mt-6 mb-2 print:text-gray-800">{language === 'en' ? 'Development' : 'Desarrollo'}</h3>
        {skills.development.map((skill) => (
          <div key={skill.name} className="flex justify-between items-center mb-2">
            <span>{skill.name}</span>
            <SkillDots level={skill.level} />
          </div>
        ))}

        <h3 className="text-lg font-bold text-gray-200 mt-6 mb-2 print:text-gray-800">{language === 'en' ? 'Languages' : 'Idiomas'}</h3>
        {skills.languages.map((language) => (
          <div key={language.name} className="flex justify-between mb-2">
            <span>{language.name}</span>
            <span>{language.level}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const MainContent = () => (
    <div className="p-8">
      <div className="mb-8">
      <button
          onClick={toggleLanguage}
          className="px-4 py-2 bg-[#3182CE] text-white rounded hover:bg-[#20578a] mb-2 m-2 float-end transition-colors  print:hidden"
        >
          {language === 'en' ? 'Español' : 'English'}
      </button>
        <h1 className="text-4xl font-bold text-[#2D3748] mb-2">Benjamin Alvarez Rodriguez</h1>
        <p className="text-xl text-[#4A5568]">{language === 'en' ? 'Video Editor | Motion Designer | Music Composer' : 'Editor Audiovisual | Motion Designer | Compositor Musical'}</p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#3182CE] border-b-2 border-[#3182CE] pb-2 mt-6 mb-4">
        {language === 'en' ? 'Professional Profile' : 'Perfil Profesional'}
        </h2>
        <p>
          {language === 'en' ? 'Video editor and musician specializing in post-production, motion graphics, and music composition. Over 4 years of experience in international projects, educational content, and short films. Advanced proficiency in Adobe Creative Suite and experience in 3D animation. Combining audiovisual creativity with technical programming skills to optimize workflows.' : 'Editor audiovisual y músico con especialización en postproducción, motion graphics y composición musical. Más de 4 años de experiencia en proyectos internacionales, contenido educativo y cortometrajes. Dominio avanzado de Adobe Creative Suite y experiencia en animación 3D. Combino creatividad audiovisual con habilidades técnicas en programación para optimizar flujos de trabajo.'}

        </p>
      </section>

      <section className="mb-8 sidebar">
        <h2 className="text-2xl font-bold text-[#3182CE] border-b-2 border-[#3182CE] pb-2 mt-6 mb-4">
          {language === 'en' ? 'Professional Experience' : 'Experiencia Profesional'}
        </h2>
        {experiences.map((experience, index ) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl text-[#4A5568] font-bold mb-1">{experience.title[language]}</h3>
            <p className="text-[#3182CE] font-medium mb-2">{experience.date}</p>
            <ul className="list-disc pl-5">
              {experience.responsibilities[language].map((resp, index) => (
                <li key={index} className="mb-1">{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#3182CE] border-b-2 border-[#3182CE] pb-2 mt-6 mb-4">
        {language === 'en' ? 'Notable Achievements' : 'Logros Destacados'}
        </h2>
        <ul className="list-disc pl-5">
          <li className="mb-2">
            Official Selection at Shnit International Short Film Festival:
            <ul className="list-disc pl-5 mt-2">
              <li>"Juegos Artificiales" (2023) - Music Composer</li>
              <li>"Pinchazo" (2021) - Co-director</li>
              <li>"Hálito" (2020) - Music Composer</li>
              <li>"Alunizaje" (2020) - VFX Artist</li>
            </ul>
          </li>
          <li className="mb-2">Lead editor for international web series "Esperanto Senlime" (16 episodes)</li>
          <li>Development and implementation of 3D modeling workshop for youth (TCU-UCR)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#3182CE] border-b-2 border-[#3182CE] pb-2 mt-6 mb-4">{language === 'en' ? 'Education' : 'Educación'}</h2>
        { education.map(( edu, index ) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl text-[#4A5568] font-bold mb-1"> {edu.degree[language]}</h3>
          <p className='text-sm text-gray-400 -mt-1 italic'>{edu.institute[language][1]}</p>
          <p>{edu.institute[language][0]} — <span>{edu.date}</span></p>
        </div>  
        ))}
        {/* <div className="mb-4">
          <h3 className="text-xl text-[#4A5568] mb-1">Bachelor's Degree in Mass Communication Sciences</h3>
          <p>University of Costa Rica, 2023</p>
          <p>Specialization: Audiovisual and Multimedia Communication</p>
        </div>
        <div>
          <h3 className="text-xl text-[#4A5568] mb-1">Technical Degree in Piano and Violin Performance and Teaching</h3>
          <p>Conservatorio de Castella, 2015</p>
        </div> */}
      </section>

      <section className='print:hidden'>
        <h2 className="text-2xl font-bold text-[#3182CE] border-b-2 border-[#3182CE] pb-2 mt-6 mb-4">{language === 'en' ? 'Links' : 'Enlaces'}</h2>
        <a 
          href="https://github.com/fightsthumbs" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#3182CE] hover:underline"
        >
          github.com/fightsthumbs
        </a>
      </section>
    </div>
  );

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
  };

  return (
    <div className=" mx-auto p-8 bg-gray-100 main-content print:bg-white print:p-0"> {/* max-w-6xl */}
      <button
        onClick={() => handlePrint()}
        className="mb-4 px-4 py-2 bg-[#3182CE] text-white rounded-lg hover:bg-[#2c5282] transition-colors flex items-center gap-2 print:hidden"
      >
        <Printer size={20} />
        Download PDF
      </button>
      <div ref={contentRef}>
       <div 
        
        className="grid grid-cols-[300px_1fr] bg-white rounded-lg shadow-md overflow-hidden gap-8 print:shadow-none "
      >
        <Sidebar />
        <MainContent />

      </div>

      </div>
    </div>
  );
};

export default CV;
