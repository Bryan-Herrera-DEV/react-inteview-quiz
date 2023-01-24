import { styles } from '@/shared/utils/styles';
import { NavBar } from './components';

const index = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} ${styles.paddingX}`}>hero</div>
      </div>

      <div className={`bg-primary ${styles.paddingX}  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Test
          {/*
            All our components
          */}
        </div>
      </div>
    </div>
  );
};

export default index;
