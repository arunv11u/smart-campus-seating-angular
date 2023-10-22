export interface Place {
	id: string;
	name: string;
	description: string;
	capacity: number;
	freeSeatsCount: number;
	occupiedSeatsCount: number;
	creationDate: string;
	lastModifiedDate: string;
}