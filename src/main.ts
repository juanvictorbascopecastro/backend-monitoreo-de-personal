import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function main() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api/v1");
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove todos los datos innecesarios
      forbidNonWhitelisted: true, // regresa un error
    })
  );
  app.useGlobalInterceptors(new CustomInterceptor());
  await app.listen(3000);
}
main();
