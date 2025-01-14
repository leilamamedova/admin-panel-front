import { useEffect, useState } from "react";

import Notification from "notifications/Notification";

import { IImageUpload, IUseImageUpload } from "components/uploads/interfaces";
import { fetchImageFile } from "utils/Utils";

export const useImageUpload = ({
  value,
  onChange,
}: IImageUpload): IUseImageUpload => {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const handleImageUpload = (target): void => {
    if (target.files && target.files[0]) {
      const file = target.files[0];

      if (file.size > 2000000) {
        Notification.error("The maximum file size can be 2mb");
        return;
      }

      setSelectedImage(URL.createObjectURL(file));
      onChange(file);
    }
  };

  useEffect(() => {
    if (typeof value === "string" && value.startsWith("http")) {
      fetchImageFile(value)
        .then((file) => {
          setSelectedImage(URL.createObjectURL(file));
          onChange(file);
        })
        .catch(() => {
          return null;
        });
    }
  }, [value]);

  return {
    selectedImage,
    handleImageUpload,
  };
};
