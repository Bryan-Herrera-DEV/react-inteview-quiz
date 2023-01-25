import { arrow, learn } from '@/shared/assets/icons';
import { styles } from '@/shared/utils/styles';

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-1 px-6`}
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
            React{" "}
            <br className="sm:block hidden" />
            <span className="text-gradient">Interview</span> Quizes
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <div
              className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
            >
              <div
                className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
              >
                <div className={`${styles.flexStart} flex-row`}>
                  <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                    <span className="text-gradient">Get</span>
                  </p>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-[20px] h-[20px] object-contain ml-2"
                  />
                </div>

                <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                  <span className="text-gradient">Started</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
