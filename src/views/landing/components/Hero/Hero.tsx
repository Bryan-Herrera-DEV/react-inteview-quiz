import { learn } from '@/shared/assets/icons';
import { styles } from '@/shared/utils/styles';
import { learning } from '@/shared/assets/img';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-text-gradient rounded-[10px] mb-2">
          <img src={learn} alt="learning icon" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Learn </span>
            while <span className="text-white">practicing </span>
            your knowledge {/* aprende practicando tus conocimientos */}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            React <br className="sm:block hidden" />
            <span className="text-gradient">Interview</span> Quizes
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-2">
            <GetStarted />
          </div>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          This is a project created with the enthusiasm to help the newer as
          well as the more advanced community practice common job interview
          questions. We hope you like it and if so, don&apos;t forget to give us
          a star in{' '}
          <a
            href="https://github.com/Bryan-Herrera-DEV/react-inteview-quiz"
            className="text-gradient font-semibold"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>{' '}
          and share it with your friends.
        </p>
        {/* 
        Este es un proyecto creado con el entusiasmo de ayudar a la comunidad mas nueva, asi como tambien a la mas avanzada a practicar preguntas comunes entrevistas de trabajo. Esperemos te sea de agrado y de ser asi no olvides darnos una estrellita en github y compartirlo con tus amigos
        */}
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={learning}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
