import moment from "moment";

export const updateObject = (state, object): any => ({
  ...state,
  ...object,
});

export const convertHexToRGBA = (hexCode, opacity): string => {
  let hex = hexCode.replace("#", "");

  if (hex.length === 3) {
    hex += hex;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity / 100})`;
};

export const formatDate = (date): string => {
  const tempDate = new Date(date);
  return moment(tempDate).format("DD-MM-YYYY HH:mm:ss");
};

export const unFormatDate = (date): string => {
  return moment(date).format("YYYY-MM-DDTHH:mm");
};

export const dateToString = (date): string => {
  return moment(date, "DD-MM-YYYY HH:mm:ss").format("YYYY-MM-DDTHH:mm");
};

export const getCurrentDate = (): string => {
  return moment().format();
};

export const getRandomInt = (min = 10000000, max = 9999999999): number => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const formatStore = (store): any[] => {
  const formattedStore = [];
  Object.keys(store).map((stateName) => {
    const state = store[stateName];
    if (Object.prototype.toString.call(state) === "[object Array]")
      formattedStore[stateName] = {
        get() {
          return state[0];
        },
        set: state[1],
      };
    else formattedStore[stateName] = state;
    return null;
  });
  return formattedStore;
};

export const toFieldSet = (fields): any => {
  const fieldSet = {};
  fields.forEach((field) => {
    if (typeof field.value === "object" && !(field.value instanceof File)) {
      fieldSet[field.name] = field.value?.id;
    } else fieldSet[field.name] = field.value;
  });
  return fieldSet;
};

export const deepClone = (obj): any => {
  const clone = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      switch (Object.prototype.toString.call(value)) {
        case "[object Object]":
          clone[key] = deepClone(obj[key]);
          break;
        case "[object Array]":
          clone[key] = value.slice(0);
          break;
        default:
          clone[key] = value;
      }
    }
  }
  return clone;
};

export const fetchImageFile = async (path: string): Promise<any> => {
  return fetch(path)
    .then((response) => response.blob())
    .then((blob) => {
      const fileName = path.split("/Shared/").pop();
      const file = new File([blob], fileName, { type: "image/*" });
      return file;
    })
    .catch(() => {
      return null;
    });
};

export const exportFile = async (path: string, type): Promise<any> => {
  const headers = {
    Authorization: `Bearer ${await localStorage.getItem("token")}`,
  };

  fetch(path, {
    method: "POST",
    headers,
  })
    .then((response) => {
      let fileName = "";
      const matches = /filename\*?=['"]?([^'";]*)['"]?/i.exec(
        response.headers.get("Content-Disposition"),
      );

      matches && matches.length > 1 && (fileName = matches[1] + `.${type}`);

      response.blob().then((blob) => {
        const blobURL = window.URL.createObjectURL(blob);

        const downloadLink = document.createElement("a");
        downloadLink.href = blobURL;
        downloadLink.download = fileName;
        downloadLink.click();
      });
    })
    .catch(() => {
      return null;
    });
};
