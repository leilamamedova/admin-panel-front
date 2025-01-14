export interface AuthContainerProps {
  header: string;
  Component: React.ReactNode;
  buttonName: string;
  loading?: boolean;
  linkName?: string;
  link?: string;
  disabled?: boolean;
  onClick: (e) => void;
}
