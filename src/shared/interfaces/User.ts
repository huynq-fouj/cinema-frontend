export interface User {
    id: number;
    fullname: string;
    email: string;
    birthday: Date;
    gender: string;
    phoneNumber: string;
    deleted: boolean;
    active: boolean;
    createdAt: Date;
    modifiedAt: Date;
    point: number;
    avatar: string;
    city: string;
    role: string;
}