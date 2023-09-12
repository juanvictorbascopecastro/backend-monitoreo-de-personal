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
export declare const initialData: SeedData;
export {};
