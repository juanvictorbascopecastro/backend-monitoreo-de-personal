import { Ciudad } from "src/modules/ciudad/entities/ciudad.entity";
import { Ingreso } from "src/modules/ingreso/entities/ingreso.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class ZonasEstrategica {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100 })
  nombre: string;

  @Column({ type: "double precision", default: 0 })
  longitud: string;

  @Column({ type: "double precision", default: 0 })
  latitud: string;

  @Column({ type: "float", default: 0 })
  radio: string;

  @ManyToOne(() => Ciudad, (dpto) => dpto.zonas, {
    nullable: false,
    eager: false,
  })
  ciudad: Ciudad;

  @OneToMany(() => Ingreso, (ing) => ing.zona, { cascade: true })
  ingreso: Ingreso[];
}
