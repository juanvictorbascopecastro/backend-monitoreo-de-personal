import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ReportarseImagen } from "./reportarse.imagen.entity";

@Entity()
export class Reportarse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  id_persona: number;

  @Column({ type: "varchar", nullable: true })
  comentario?: string;

  @Column({ type: "timestamp with time zone" })
  fecha: Date;

  @OneToMany(() => ReportarseImagen, (rI) => rI.reportarse, {
    cascade: true,
    eager: true,
  })
  imagenes?: ReportarseImagen[];
}
