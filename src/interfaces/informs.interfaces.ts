import { Mouths, Years } from "../types/common.types";



export interface IInform {
    groupId?: string;
    date?: string;
    hours?: number;
    name?: string;
    lastName?: string
    publications?: number,
    reVisit?: number
    bibleCourse?: number,
    mouth?: Mouths,
    year?: Years,
    pubId?: string
}