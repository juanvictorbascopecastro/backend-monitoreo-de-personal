import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ciudad {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ unique: true, type: "varchar", length: 100 })
  nombre: string;

  @Column({ nullable: true, type: "varchar", length: 200 })
  descripcion?: string;

  @Column({ type: "int" })
  id_departamento: number;
}
