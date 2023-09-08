import { Ingreso } from "src/modules/ingreso/entities/ingreso.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Salida {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "timestamp with time zone",
    default: () => "CURRENT_TIMESTAMP",
  })
  fecha: Date;

  @Column({ type: "text", nullable: true })
  detalles: string;

  @ManyToOne(() => Ingreso, (ubi) => ubi.salida, {
    eager: true,
    nullable: true,
  })
  ingreso: Ingreso;
}
