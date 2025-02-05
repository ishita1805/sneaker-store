export type Category = 'sneakers' | 'hoodies' | 'denims' | 'default';
export interface Categories {
    label: string;
    id: Category
}


export type Filter = 'low-to-high' | 'high-to-low' | 'latest' | 'default'
export interface Filters {
    label: string;
    id: Filter;
}

export interface Product {
    id: string;
    label: string;
    limited?: boolean;
    discount?: number;
    metric: string[];
    tags: string;
    cost: number;
    designCost: number;
    sizes: {
        label: string;
        id: string;
    }[],
    sizeGuide: (metric?: string) => { headers: string[]; data: (string[] | number[])[] };
    description: string;
    pictures: string[],
    category: Category;
    date: Date,
}
