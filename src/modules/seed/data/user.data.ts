import * as bcrypt from "bcrypt";

interface SeedDepartamento {
  nombre: string;
  descripcion?: string;
}

interface SeedCiudad {
  nombre: string;
  descripcion?: string;
}

interface SeedUsuario {
  nombre: string;
  apellido?: string;
  ci?: string;
  telefono?: string;
  email: string;
  password: string;
  usuario: {
    rol: string;
  };
}

interface SeedData {
  departamento: SeedDepartamento[];
  ciudad: SeedCiudad[];
  usuarios: SeedUsuario[];
}

export const initialData: SeedData = {
  departamento: [
    { nombre: "Chuquisaca" },
    { nombre: "Santa Cruz" },
    { nombre: "Cochabamba" },
    { nombre: "La Paz" },
    { nombre: "Oruro" },
    { nombre: "Potosi" },
    { nombre: "Tarija" },
    { nombre: "Beni" },
    { nombre: "Pando" },
  ],
  ciudad: [{ nombre: "Sucre" }, { nombre: "Monteagudo" }],
  usuarios: [
    {
      nombre: "Victor",
      apellido: "Bascope",
      telefono: "+59172874590",
      ci: "12345678",
      usuario: {
        rol: "admin",
      },
      password: bcrypt.hashSync("123456", 10),
      email: "user@gmail.com",
    },
  ],
};
