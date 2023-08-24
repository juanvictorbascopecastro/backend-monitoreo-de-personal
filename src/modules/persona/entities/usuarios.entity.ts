import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Persona } from "./index";

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 60 })
  rol: string;

  // relacion con persona
  @OneToOne(() => Persona, (per) => per.usuario)
  persona: Persona;
}
