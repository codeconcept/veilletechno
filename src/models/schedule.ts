import { Technology } from './technology';

export interface Schedule {
    technology: Technology;
    priority: string;
    remark: string;
    duration: number;
}