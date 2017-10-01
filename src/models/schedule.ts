import { Technology } from './technology';

export interface Schedule {
    date: string;
    technology: Technology;
    priority: string;
    remark: string;
    duration: number;
}