import { radianes } from "../radianes/radianes";

export function coseno(grados: number) {
    const rad = radianes(grados)
    // Calcula el coseno
    const coseno = Math.cos(rad);
    return coseno;
}