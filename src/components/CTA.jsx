import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        ¿Quieres que trabajemos juntos? <br className='sm:block hidden' />
        ¡Hablame, y creemos algo nuevo juntos!
      </p>
      <Link to='/contact' className='btn'>
        Contacto
      </Link>
    </section>
  );
};

export default CTA;
