import { Product } from 'src/products/entities/product.entity';

import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Size {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 5 })
  size: string;

  @ManyToMany(() => Product, (product) => product.sizes)
  products: Product[];
}
