import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Departamento {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ unique: true, type: "varchar", length: 100 })
  nombre: string;

  @Column({ nullable: true, type: "varchar", length: 200 })
  descripcion: string;
}
