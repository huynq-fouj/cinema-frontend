export interface Movie {
    id: number;
    name: string;
    trailer?: string;
    poster: string;
    description?: string;
    censorship?: string;
    genres?: string[];
    release?: Date;
    length: number;
    format?: string;
}