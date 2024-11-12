// place files you want to import through the `$lib` alias in this folder.

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// Formata um número para o padrão de milhares com vírgula e decimal com ponto
export function formatNumber(num: number) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}