import { Entity, Column, ManyToOne } from "typeorm";

import { CategoryEntity, BaseEntity } from "./index.entity";

@Entity("products")
export class ProductEntity extends BaseEntity {
  @Column({ type: "varchar", length: 255, nullable: false })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ type: "boolean" })
  isNegotiable: boolean;

  @Column({ type: "boolean" })
  isAvailable: boolean;

  @Column({
    name: "price",
  })
  price: number;

  @Column({
    nullable: true,
  })
  discount: number;

  @Column({ nullable: true })
  createdBy: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  slug: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  condition: string;

  @Column({
    type: "varchar",
    length: 255,
    array: true,
    nullable: true,
  })
  images: string[];

  @ManyToOne(() => CategoryEntity, (categoryentity) => categoryentity)
  category: CategoryEntity;
}
