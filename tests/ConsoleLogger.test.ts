import ConsoleLogger from '../src/ConsoleLogger';
import {ConsoleColour} from "../src";

let errorConsoleSpy = jest.spyOn(console, 'error'),
    logConsoleSpy = jest.spyOn(console, 'log'),
    warningConsoleSpy = jest.spyOn(console, 'warn');

beforeEach(() => {
    errorConsoleSpy = jest.spyOn(console, 'error');
    logConsoleSpy = jest.spyOn(console, 'log');
    warningConsoleSpy = jest.spyOn(console, 'warn');
});

describe('Class: ConsoleLogger', () => {
    it('should create an instance of ConsoleLogger', () => {
        const consoleLogger = new ConsoleLogger();

        expect(consoleLogger).toBeInstanceOf(ConsoleLogger);
    });

    it('should log an error message to the console', () => {
        ConsoleLogger.logError('error message');

        expect(errorConsoleSpy).toHaveBeenCalled();
    });

    it('should log an info message to the console', () => {
        ConsoleLogger.logInfo('info message');

        expect(logConsoleSpy).toHaveBeenCalled();
    });

    it('should log a warning message to the console', () => {
        ConsoleLogger.logWarning('warning message');

        expect(warningConsoleSpy).toHaveBeenCalled();
    });

    it('should log a success message to the console', () => {
        ConsoleLogger.logSuccess('success message');

        expect(logConsoleSpy).toHaveBeenCalled();
    });

    it('should log to console with custom color', () => {
        ConsoleLogger.log('log message', ConsoleColour.FgYellow);

        expect(logConsoleSpy).toHaveBeenCalled();
    });
});