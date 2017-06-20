export interface Filter {
    desc?: string;
    userId?: number;
    postal_code?: number;
    add_date?: {
        year?: number,
        month?: number,
        day?: number,
    };
}