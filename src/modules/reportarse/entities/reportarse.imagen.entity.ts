import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Reportarse } from "./reportarse.entity";

@Entity()
export class ReportarseImagen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  url: string;

  @ManyToOne(() => Reportarse, (r) => r.imagenes)
  reportarse: Reportarse;
}
