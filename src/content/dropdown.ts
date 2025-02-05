import { Categories, Filters } from "../types"

export const categories: Categories[] = [
    {label: 'Sneakers', id: 'sneakers'},
    {label: 'Hoodies', id: 'hoodies'},
    {label: 'Denims', id: 'denims'},
    {label: 'Category', id: 'default'},
]

export const filters: Filters[] = [
    {label: 'Low to High', id: 'low-to-high'},
    {label: 'High to Low', id: 'high-to-low'},
    {label: 'Latest', id: 'latest'},
]