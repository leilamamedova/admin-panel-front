import { toast } from "react-toastify";

class Notification {
  error = (message): void => {
    toast.error(message ? message : "Error");
  };

  warning = (message): void => {
    toast.warning(message);
  };

  success = (message): void => {
    toast.success(message);
  };

  info = (message): void => {
    toast.info(message);
  };

  custom = (message, onOpen = () => {}, onClose = () => {}): void => {
    toast.info(message, {
      onOpen: () => onOpen(),
      onClose: () => onClose(),
    });
  };

  default = (message): void => {
    toast(message);
  };
}

export default new Notification();
