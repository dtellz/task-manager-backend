import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";


export enum TaskStatus {
    Pending = 0,
    Done = 1,
    Canceled = 2
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

// import { CreateDateColumn, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

// enum TaskStatus {
//     Done = 0,
//     Pending = 1,
//     Canceled = 2
// }
// enum TaskPriority {
//     Low = 0,
//     Mid = 1,
//     High = 2
// }

// @Entity()
// export declare class Task {
//     @PrimaryGeneratedColumn()
//     id: number;
//     @Column({ nullable: true, type: 'string', length: 64 })
//     title: string;
//     @Column({ nullable: true, default: TaskStatus.Pending })
//     status: TaskStatus;
//     @Column({ nullable: true, default: TaskPriority.High })
//     priority: TaskPriority;
//     @CreateDateColumn({ nullable: true })
//     endTime: Date;
// }