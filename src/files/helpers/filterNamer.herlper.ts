export const fileNamer = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: Function
) => {
  if (!file) return callback(null, true);
  const fileExptension = file.mimetype.split("/")[1];
  const fileName = `${new Date().getTime()}.${fileExptension}`;
  // const fileName = `${new Date().getTime()}-${file.originalname}`;

  callback(null, fileName);
};
