import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Usuario } from "./index";

@Entity()
export class Persona {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100 })
  nombre: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  apellido?: string;

  @Column({ type: "varchar", length: 150, nullable: true })
  direccion?: string;

  @Column({ type: "varchar", length: 50 })
  ci: string;

  @Column({ type: "varchar", length: 40, nullable: true })
  telefono?: string;

  @BeforeInsert()
  checkEmail() {
    if (!this.email) {
      this.email = "prueba";
    }
  }
  @Column({ type: "varchar", length: 100, unique: true })
  email: string;

  @Column({ type: "varchar", length: 200, select: false })
  password: string;

  @Column({ type: "date", nullable: true })
  fecha_nacimiento: string;

  @Column({ type: "int" })
  id_ciudad: number;

  @Column({ type: "text", nullable: true })
  foto?: string;

  @Column({ type: "bool", default: true })
  estado: boolean;

  @BeforeInsert()
  checkFieldsBeforeInsert() {
    this.email = this.email.toLowerCase().trim();
  }
  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.checkFieldsBeforeInsert();
  }

  @OneToOne(() => Usuario, (us) => us.persona, { eager: true, cascade: true })
  @JoinColumn()
  usuario: Usuario;
}