import { tangente } from "./tangente"

describe('tangente unit tests', () => {

    it('Should tangente 30 = 0.57735026919', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0;

        // Act
        result = tangente(30);

        // Assert
        expect(result).toBeCloseTo(0.57735026919, 2);
    })

    it(' Should tangente 45 = 1', () => {
        // Arrange
        let result = 0;
        // Act
        result = tangente(45);
        // Assert
        expect(result).toBeCloseTo(1, 2);
    })

    it(' Should tangente 60 =  1.73205080757', () => {
        // Arrange
        let result = 0;
        // Act
        result = tangente(60);
        // Assert
        expect(result).toBeCloseTo(1.73205080757, 2);
    })

    it(' Should tangente 90 = 1.6331239353195370', () => {
        // Arrange
        let result = 0;
        // Act
        result = tangente(90);
        // Assert
        expect(result).toBeCloseTo(16331239353195370);
    })

})
