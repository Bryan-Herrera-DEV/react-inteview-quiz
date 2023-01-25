import { arrow } from '@/shared/assets/icons';
import { styles } from '@/shared/utils/styles';

const GetStarted = () => {
  return (
    <div
          className={`${styles.flexCenter} w-[120px] h-[120px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
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
  )
}

export default GetStarted
