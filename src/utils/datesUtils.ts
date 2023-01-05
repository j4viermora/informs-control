import { Mouths } from '../types/common.types'
export class DatesUtils {

    readonly date = new Date();

    getNameDay(): string {
        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        return days[this.date.getDay()];
    }

    getMouth(): Mouths {
        const mouths: Mouths[] = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
        return mouths[this.date.getMonth()];
    }

    getYear(): string {
        return this.date.getFullYear().toString();
    }

    getDate(): string {
        return this.date.toISOString().split('T')[0];
    }
}