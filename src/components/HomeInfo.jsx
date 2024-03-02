import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hola, soy
        <span className='font-semibold mx-2 text-white'>Manuel Hurtado</span>
        👋
        <br />
        Un Desarrollador de México 🇲🇽
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Hé trabajado para varias empresa <br /> Hé adquirido muchas habilidades en ese camino, <br />¿Porque no echas un vistazo?
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Ver más
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Lideré y contribuí a muchos proyectos <br /> Asi mismo cree los mios propios ¡Vamos!
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Portafolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        ¿Necesitas contactarme? <br/> Vamos! Mandame un mensaje 😉
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Hablemos!
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
