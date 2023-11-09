import { radianes } from "../radianes/radianes";

export function tangente(grados: number) {
    // Convierte grados a radianes
    const rad = radianes(grados)
    // Calcula la tangente
    const tangente = Math.tan(rad);
    return tangente;
}