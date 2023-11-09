import { coseno } from "./coseno"

describe('seno unit tests', () => {

    it('Should coseno 30 = 0.5', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0;

        // Act
        result = coseno(30);

        // Assert
        expect(result).toBeCloseTo(0.86602540378, 2);
    })

    it(' Should coseno 45 = 0.70710678118', () => {
        // Arrange
        let result = 0;
        // Act
        result = coseno(45);
        // Assert
        expect(result).toBeCloseTo(0.70710678118, 2);
    })

    it(' Should coseno 30 = 0.86602540378', () => {
        // Arrange
        let result = 0;
        // Act
        result = coseno(30);
        // Assert
        expect(result).toBeCloseTo(0.8660254037844386, 2);
    })

    it(' Should coseno 90 = 6.12323399574e-1', () => {
        // Arrange
        let result = 0;
        // Act
        result = coseno(90);
        // Assert
        expect(result).toBeCloseTo(16.12323399574e-17, 2);
    })

})