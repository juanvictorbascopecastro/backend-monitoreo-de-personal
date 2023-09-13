import { BadRequestException, Injectable } from "@nestjs/common";
import { existsSync } from "fs";
import { join } from "path";

@Injectable()
export class FilesService {
  getStaticPersonaFoto(imageName: string) {
    const pathFile = join(__dirname, "../../static/profiles", imageName);
    if (!existsSync(pathFile)) {
      throw new BadRequestException(
        `la foto con el nombre ${imageName} no existe!`
      );
    }
    return pathFile;
  }
}
