import { Departamento } from "../../departamento/entities/departamento.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ciudad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, type: "varchar", length: 100 })
  nombre: string;

  @Column({ nullable: true, type: "varchar", length: 200 })
  descripcion?: string;

  @ManyToOne(() => Departamento, (dpto) => dpto.ciudad, {
    eager: true,
    nullable: false,
  })
  departamento: Departamento;
}
