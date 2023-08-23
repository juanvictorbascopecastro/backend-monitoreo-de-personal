import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginAuthDto } from "./dto/login-auth.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("sing-in")
  login(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }

  @Get()
  findOne() {
    return this.authService.getProfile();
  }

  @Patch()
  update() {
    return this.authService.updateProfile();
  }

  @Delete()
  remove() {
    return this.authService.deleteProfile();
  }
}
