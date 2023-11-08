import { radianes } from "../radianes/radianes";

export function seno(grados: number) {
    // Convierte grados a radianes
    const rad = radianes(grados);
    // Calcula el seno
    const seno = Math.sin(rad);
    return seno;
}