import { ConsoleColour } from './Enum/ConsoleColour';

export declare class ConsoleLogger {
    static logError(message: string);
    static logSuccess(message: string);
    static logWarning(message: string);
    static logInfo(message: string);
    static log(message: string, colour: string);
}

export { ConsoleColour };