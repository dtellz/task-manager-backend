import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";


export enum TaskStatus {
    Pending = 0,
    Done = 1,
    Cancelled = 2
}

export enum TaskPriority {
    High = 0,
    Mid = 1,
    Low = 2
}

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, length: 64 })
    title: string;

    @Column({ nullable: false, default: TaskStatus.Pending })
    status: TaskStatus;

    @Column({ nullable: false, default: TaskPriority.High })
    priority: TaskPriority;

    @CreateDateColumn({ nullable: true, default: null })
    endTime?: Date;
}
