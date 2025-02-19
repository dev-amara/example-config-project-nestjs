import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('manager')
export class ManagerEntity {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column({ name: 'nom', type: 'varchar', length: 60, nullable: true })
  private lastName: string;

  @Column({ name: 'prenoms', type: 'varchar', length: 100, nullable: true })
  private firstName: string;

  @Column({ length: 100, nullable: true, type: 'varchar' })
  private fonction: string;

  @Column({ name: 'email', type: 'varchar', length: 60, nullable: true })
  private email: string;
  @Column({ name: 'email', type: 'varchar', length: 60, nullable: true })
  @CreateDateColumn({ name: 'created_at', nullable: true })
  private createdAt: Date;

  @CreateDateColumn({ name: 'updated_at', nullable: true })
  private updatedAt: Date;

  @Column({ name: 'created_by', type: 'varchar', length: 100, nullable: true })
  private createdBy: string;

  @Column({ name: 'updated_by', type: 'varchar', length: 100, nullable: true })
  private updatedBy: string;

  public setId(id: number) {
    this.id = id;
  }
  public getId(): number {
    return this.id;
  }

  public setLastName(lastName: string) {
    this.lastName = lastName;
  }
  public getLastName(): string {
    return this.lastName;
  }

  public setFirstName(firstName: string) {
    this.firstName = firstName;
  }
  public getFirstName(): string {
    return this.firstName;
  }

  public setFonction(fonction: string) {
    this.fonction = fonction;
  }
  public getFonction(): string {
    return this.fonction;
  }

  public setEmail(email: string) {
    this.email = email;
  }
  public getEmail(): string {
    return this.email;
  }

  public setCreatedAt(createdAt: Date) {
    this.createdAt = createdAt;
  }
  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public setUpdatedAt(updatedAt: Date) {
    this.updatedAt = updatedAt;
  }
  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public setCreatedBy(createdBy: string) {
    this.createdBy = createdBy;
  }
  public getCreatedBy(): string {
    return this.createdBy;
  }

  public setUpdatedBy(updatedBy: string) {
    this.updatedBy = updatedBy;
  }
  public getUpdatedBy(): string {
    return this.updatedBy;
  }
}
