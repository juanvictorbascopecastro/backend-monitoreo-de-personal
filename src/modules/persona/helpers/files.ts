import * as fs from "fs";
import * as path from "path";

export const saveFiles = (file, folder) => {
  try {
    const fileName = getFileName(file);
    const savePath = `./static/${folder}/${fileName}`;
    if (!fs.existsSync(`./static/${folder}`)) {
      fs.mkdirSync(`./static/${folder}`, { recursive: true }); // Crea la carpeta y las subcarpetas de manera recursiva
    }
    fs.writeFileSync(savePath, file.buffer);
    return `${folder}/${fileName}`;
  } catch (error) {
    console.log(error);
    // Maneja errores si la operación de guardado falla
    throw new Error("No se pudo guardar el archivo.");
  }
};
export const removeFiles = (router) =>
  new Promise((resolve, reject) => {
    // remover de local
    // let pathRemove = path.join(__dirname, "../../../../static");
    // console.log(pathRemove)
    let pathRemove = "./static";
    const arrayRouter = router.split("/");
    for (let i = 0; i < arrayRouter.length; i++) {
      pathRemove = path.join(pathRemove, arrayRouter[i]);
    }
    if (fs.existsSync(pathRemove)) {
      fs.unlinkSync(pathRemove);
      return resolve("Eliminado correctamente!");
    }
    return resolve({ message: "La ruta del archivo no existe!" });
  });

export const getFileName = (file) => {
  if (!file) return null;
  const fileExptension = file.mimetype.split("/")[1];
  const fileName = `${new Date().getTime()}.${fileExptension}`;
  return fileName;
};
