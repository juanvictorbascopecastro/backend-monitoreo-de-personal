import { ZonasEstrategica } from "src/modules/zonas_estrategica/entities/zonas_estrategica.entity";
import { Persona } from "../../persona/entities";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
}
