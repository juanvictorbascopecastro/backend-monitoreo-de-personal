import { Ciudad } from "../../ciudad/entities/ciudad.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Departamento {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ unique: true, type: "varchar", length: 100 })
  nombre: string;

  @Column({ nullable: true, type: "varchar", length: 200 })
  descripcion?: string;

  @OneToMany(() => Ciudad, (c) => c.departamento, { cascade: false })
  ciudad: Ciudad;
}
