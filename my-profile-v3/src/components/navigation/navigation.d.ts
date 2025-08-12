import { RefObject, SVGProps } from "react";

export interface ISectionHeader {
  headerTitle: string;
  headerRef: RefObject<HTMLDivElement>;
  headerID: string;
  headerIcon: FC<SVGProps<SVGSVGElement>>;
}

export interface TopbarProps {
  sections: ISectionHeader[];
  toggleMenu?: () => void;
  isOpen?: boolean;
}
