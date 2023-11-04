import { ConsoleColour } from './Enum/ConsoleColour';

export declare class ConsoleLogger {
    logError(message: string);
    logSuccess(message: string);
    logWarning(message: string);
    logInfo(message: string);
    log(message: string, colour: string);
}

export { ConsoleColour };