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

  @Column({ type: "int" })
  id_zona: number;

  @ManyToOne(() => Persona, (per) => per.ingreso, { eager: true })
  persona: Persona;
}
