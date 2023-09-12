export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: Function
) => {
  if (!file) callback(null, true);
  //if (!file) return callback(new Error("No esta enviando el archivo!"), false);
  const fileExptension = file.mimetype.split("/")[1];
  const validExtension = ["jpg", "jpeg", "png", "gif"];
  if (validExtension.includes(fileExptension)) {
    callback(null, true);
  }
  callback(null, false);
};
