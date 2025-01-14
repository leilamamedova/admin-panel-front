export interface IDrawer {
  open: boolean;
  children: React.ReactNode;
  header?: string;
  loading?: boolean;
  handleClose: () => void;
  onSave: () => void;
}
