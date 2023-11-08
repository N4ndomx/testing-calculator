import { factorial } from "./factorial"

describe('factorial unit tests', () => {

    it('Should factorial 4! = 24', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0;

        // Act
        result = factorial(4);

        // Assert
        expect(result).toBe(24);
    })

    it(' Should facto 6! = 720', () => {
        // Arrange
        let result = 0;
        // Act
        result = factorial(6);
        // Assert
        expect(result).toBe(720);
    })

    it(' Should facto 0! = 1', () => {
        // Arrange
        let result = 0;
        // Act
        result = factorial(0);
        // Assert
        expect(result).toBe(1);
    })

    it(' Should facto 1! = 1', () => {
        // Arrange
        let result = 0;
        // Act
        result = factorial(1);
        // Assert
        expect(result).toBe(1);
    })

})