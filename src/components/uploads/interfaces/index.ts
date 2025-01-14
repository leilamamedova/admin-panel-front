import { DropzoneRootProps, DropzoneInputProps } from "react-dropzone";

export interface IDragAndDrop {
  multiple?: boolean;
  fileType?: any;
  onChange: (value: any[]) => void;
}

export interface IUseDragAndDrop {
  classes: any;
  attachments: any[];
  getRootProps: <T extends DropzoneRootProps>(props?: T) => T;
  getInputProps: <T extends DropzoneInputProps>(props?: T) => T;
  convertFileToIcon: (fileName: string, index: number) => React.ReactElement;
}

export interface IImageUpload {
  value: any;
  onChange: (value: any) => void;
}

export interface IUseImageUpload {
  selectedImage: any;
  handleImageUpload: (target: any) => void;
}
