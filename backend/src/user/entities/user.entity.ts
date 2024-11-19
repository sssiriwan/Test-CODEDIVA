import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity()
@Unique(['email']) // ห้าม email ซ้ำ
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  phoneNumber: string;

  @Column({ type: 'date', nullable: true }) 
  dateOfBirth: Date;

  @Column({
    type: 'enum',
    enum: ['MALE', 'FEMALE', 'OTHER'],
    default: 'OTHER',
  })
  gender: string;
}
