import Excel from "assets/images/excel.png";
import File from "assets/images/file.png";
import Img from "assets/images/img.png";
import Pdf from "assets/images/pdf.png";
import Word from "assets/images/word.png";
import { buttonTypes } from "components/buttons/constants/buttonTypes";
import FileTypes from "components/uploads/constants/fileTypes";

const filesData: any = {
  [FileTypes.PDF]: {
    icon: Pdf,
    buttonType: buttonTypes.error,
  },
  [FileTypes.JPG]: {
    icon: Img,
    buttonType: buttonTypes.success,
  },
  [FileTypes.JPEG]: {
    icon: Img,
    buttonType: buttonTypes.success,
  },
  [FileTypes.PNG]: {
    icon: Img,
    buttonType: buttonTypes.success,
  },
  [FileTypes.JFIF]: {
    icon: Img,
    buttonType: buttonTypes.success,
  },
  [FileTypes.DOC]: {
    icon: Word,
    buttonType: buttonTypes.primary,
  },
  [FileTypes.DOCX]: {
    icon: Word,
    buttonType: buttonTypes.primary,
  },
  [FileTypes.XLS]: {
    icon: Excel,
    buttonType: buttonTypes.success,
  },
  [FileTypes.XLSX]: {
    icon: Excel,
    buttonType: buttonTypes.success,
  },
  [FileTypes.UNDEFINED]: {
    icon: File,
    buttonType: buttonTypes.warning,
  },
};

export default filesData;
