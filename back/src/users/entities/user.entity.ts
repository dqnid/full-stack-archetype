import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// TODO: username should be unique and, maybe can act as ID?
// NOTE: CREATE TABLE user (id bigint primary key DEFAULT UUID_SHORT(), username char(20) not null, password char(20) not null, roles char(50) not null);

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  roles: string;

  @Column()
  picture: string;
}
