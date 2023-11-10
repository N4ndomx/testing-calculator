import { seno } from "./seno"

describe('seno unit tests', () => {

    it('Should seno 30 = 0.5', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0;

        // Act
        result = seno(30);

        // Assert
        expect(result).toBe(0.49999999999999994);
    })

    it(' Should seno 45 = 0.70710678118', () => {
        // Arrange
        let result = 0;
        // Act
        result = seno(45);
        // Assert
        expect(result).toBe(0.7071067811865475);
    })

    it(' Should seno 60 = 0.86602540378', () => {
        // Arrange
        let result = 0;
        // Act
        result = seno(60);
        // Assert
        expect(result).toBe(0.8660254037844386);
    })

    it(' Should seno 90 = 1', () => {
        // Arrange
        let result = 0;
        // Act
        result = seno(90);
        // Assert
        expect(result).toBe(1);
    })

})