import DOMPurify from "dompurify";
export const cleanInput = (value) => {
  return DOMPurify.sanitize(value, {
    ALLOWED_TAGS: [],
    ALLOW_DATA_ATTR: false,
    ALLOWED_ATTR: [],
  });
};
