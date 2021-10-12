import { TaskStatus, TaskPriority } from "../entity/task.entity";

export class UpdateTaskDTO {
    title?: string;
    status?: TaskStatus;
    priority?: TaskPriority;
    endTime?: Date;
}