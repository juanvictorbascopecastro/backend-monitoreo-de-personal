import { Persona } from "src/modules/persona/entities";
import { Departamento } from "../../departamento/entities/departamento.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ZonasEstrategica } from "src/modules/zonas_estrategica/entities/zonas_estrategica.entity";

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

  @OneToMany(() => Persona, (c) => c.ciudad, { cascade: false })
  persona: Persona;

  @OneToMany(() => ZonasEstrategica, (c) => c.ciudad, { cascade: false })
  zonas: ZonasEstrategica;
}
