import { ZonasEstrategica } from "src/modules/zonas_estrategica/entities/zonas_estrategica.entity";
import { Persona } from "../../persona/entities";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Ubicacion } from "src/modules/ubicacion/entities/ubicacion.entity";
import { Salida } from "src/modules/salida/entities/salida.entity";

@Entity()
export class Ingreso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "timestamp with time zone",
    default: () => "CURRENT_TIMESTAMP",
  })
  fecha: Date;

  @Column({ type: "text", nullable: true })
  detalles: string;

  @ManyToOne(() => Persona, (per) => per.ingreso, {
    eager: true,
    nullable: false,
  })
  persona: Persona;

  @ManyToOne(() => ZonasEstrategica, (per) => per.ingreso, {
    eager: true,
    nullable: false,
  })
  zona: ZonasEstrategica;

  // ubicaciones
  @OneToMany(() => Ubicacion, (ing) => ing.ingreso, { cascade: true })
  ubicacion: Ubicacion[];

  @OneToOne(() => Salida, (sal) => sal.ingreso, { cascade: true })
  salida: Salida;
}
