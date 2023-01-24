export interface ICommonComponent {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  key?: string;
  ref?: React.RefObject<HTMLElement>;
  color?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
