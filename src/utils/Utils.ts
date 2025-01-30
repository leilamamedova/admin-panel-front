import moment from "moment";

export const formatDate = (date: string | Date): string => {
  const tempDate = new Date(date);
  return moment(tempDate).format("DD-MM-YYYY HH:mm:ss");
};

export const unFormatDate = (date: string): string => {
  return moment(date).format("YYYY-MM-DDTHH:mm");
};

export const dateToString = (date: string | Date): string => {
  return moment(date, "DD-MM-YYYY HH:mm:ss").format("YYYY-MM-DDTHH:mm");
};

export const getRandomInt = (min = 10000000, max = 9999999999): number => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const updateObject = (state: any, object: any): any => ({
  ...state,
  ...object,
});

export const toFieldSet = (fields: any): any => {
  const fieldSet = {};
  fields.forEach((field) => {
    if (typeof field.value === "object" && !(field.value instanceof File)) {
      fieldSet[field.name] = field.value?.id;
    } else fieldSet[field.name] = field.value;
  });
  return fieldSet;
};
