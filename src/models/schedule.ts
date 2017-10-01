import { Technology } from './technology';

export interface Schedule {
    name: string;
    date: string;
    technology: Technology;
    priority: string;
    remark: string;
    duration: number;
}