export type TimeFilter = {
    state: string;
    label: string;
}

export const DAY: TimeFilter = {
    state: 'DAY',
    label: 'Trong ngày'
}
export const MONTH: TimeFilter = {
    state: 'MONTH',
    label: 'Trong tháng'
}
export const YEAR: TimeFilter = {
    state: 'YEAR',
    label: 'Trong năm'
}