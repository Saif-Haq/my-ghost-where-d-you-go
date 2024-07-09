export interface Company {
  company: string,
  id: number,
  ghostCount: number
}

export interface GhosterListingProps {
  ghosters: Company[];
  increaseGhostCount: (id: number) => void
}


export interface GhosterListingItemProps {
  handleClick: () => void;
  ghost: Company;
}

export interface DripProps {
  left: string;
  height: number;
  delay: number;
}

export interface BloodDrippingButtonProps {
  text: string;
}

export interface TiltCardProps {
  children: JSX.Element;
}