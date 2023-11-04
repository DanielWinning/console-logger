import { ConsoleLogger } from '../src/ConsoleLogger';

describe('Class: ConsoleLogger', () => {
    it('should create an instance of ConsoleLogger', () => {
        const consoleLogger = new ConsoleLogger();

        expect(consoleLogger).toBeInstanceOf(ConsoleLogger);
    });
});