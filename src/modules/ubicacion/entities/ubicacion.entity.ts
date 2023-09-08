import { Ingreso } from "src/modules/ingreso/entities/ingreso.entity";
import { Persona } from "src/modules/persona/entities";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ubicacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "timestamp with time zone",
    default: () => "CURRENT_TIMESTAMP",
  })
  fecha: Date;

  @Column({ type: "double precision", default: 0, nullable: false })
  longitud: string;

  @Column({ type: "double precision", default: 0, nullable: false })
  latitud: string;

  @Column({ type: "float", nullable: true })
  bateria: string;

  @Column({ type: "text", nullable: true })
  detalles: string;

  @ManyToOne(() => Ingreso, (ubi) => ubi.ubicacion, {
    eager: true,
    nullable: true,
  })
  ingreso: Ingreso;

  @ManyToOne(() => Persona, (ubi) => ubi.ubicacion, {
    eager: true,
    nullable: true,
  })
  persona: Persona;
}
