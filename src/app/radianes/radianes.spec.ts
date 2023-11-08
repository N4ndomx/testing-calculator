
import { radianes } from "./radianes"

describe('radianes unit tests', () => {

    it('Should radianes 4 = 0.7853981633974483', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0;

        // Act
        result = radianes(45);

        // Assert
        expect(result).toBe(0.7853981633974483);
    })

    it(' Should radianes 90 = 1.5707963267948966', () => {
        // Arrange
        let result = 0;
        // Act
        result = radianes(90);
        // Assert
        expect(result).toBe(1.5707963267948966);
    })

    it(' Should radianes 180 = 3.141592653589793', () => {
        // Arrange
        let result = 0;
        // Act
        result = radianes(180);
        // Assert
        expect(result).toBe(3.141592653589793);
    })

    it(' Should radianes 270 = 4.71238898038469', () => {
        // Arrange
        let result = 0;
        // Act
        result = radianes(270);
        // Assert
        expect(result).toBe(4.71238898038469);
    })

})