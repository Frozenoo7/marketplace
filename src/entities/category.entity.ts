import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { ProductEntity, BaseEntity } from './index.entity';

@Entity({ name: 'category' })
export class CategoryEntity extends BaseEntity {
  @Column()
  name: string;

  @Column({ length: 1024, nullable: true })
  description?: string;

  @Column()
  icon: string;

  @Column({ default: true, type: 'boolean' })
  isActive: boolean;

  @Column({ default: false })
  isAvailable: boolean;

  @Column({ nullable: true })
  imageUrl: string;

  @Column({ nullable: true })
  createdBy: string;

  @Column({ nullable: true })
  position: string;

  @Column({ nullable: true })
  dept: string;

  @OneToMany(() => CategoryEntity, (category) => category.parent, {
    nullable: true,
  })
  public childrens?: CategoryEntity[];

  @ManyToOne(() => CategoryEntity, (category) => category.childrens, {
    nullable: true,
  })
  public parent: CategoryEntity;

  @OneToMany(() => ProductEntity, (product) => product.category, {
    nullable: true,
  })
  public product?: ProductEntity[];
}
