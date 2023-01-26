import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { useStore } from '@/shared/utils/store/themeStore';

const ToggleTheme = () => {
  const { dark, toggleTheme } = useStore()

  const defaultProperties = {
    dark: {
      circle: {
        r: 9,
      },
      mask: {
        cx: '50%',
        cy: '23%',
      },
      svg: {
        transform: 'rotate(40deg)',
      },
      lines: {
        opacity: 0,
      },
    },
    light: {
      circle: {
        r: 5,
      },
      mask: {
        cx: '100%',
        cy: '0%',
      },
      svg: {
        transform: 'rotate(0deg)',
      },
      lines: {
        opacity: 1,
      },
    },
    springConfig: { mass: 2, tension: 550, friction: 50 },
  };
  return (
    <DarkModeSwitch
        checked={dark}
        onChange={toggleTheme}
        size={40}
        animationProperties	={defaultProperties}
        moonColor="grey"
        sunColor="yellow"
      />
  );
}

export default ToggleTheme;