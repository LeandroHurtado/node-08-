import { Size } from 'src/size/entities/size.entities';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Review } from '../../reviews/entities/review.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  stock: number;

  @OneToMany(() => Review, (review) => review.product)
  reviews: Review[];

  @ManyToMany(() => Size, (size) => size.products, { cascade: true })
  @JoinTable()
  sizes: Size[];
}
