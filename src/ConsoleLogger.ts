import { ConsoleColour } from './Enum/ConsoleColour';

export default class ConsoleLogger
{
    /**
     * @param {string} message
     */
    public static logError(message: string): void
    {
        console.error(`${ConsoleColour.FgRed}${message}${ConsoleColour.Reset}`);
    }

    /**
     * @param {string} message
     */
    public static logSuccess(message: string): void
    {
        console.log(`${ConsoleColour.FgGreen}${message}${ConsoleColour.Reset}`);
    }

    /**
     * @param {string} message
     */
    public static logWarning(message: string): void
    {
        console.warn(`${ConsoleColour.FgYellow}${message}${ConsoleColour.Reset}`);
    }

    /**
     * @param {string} message
     */
    public static logInfo(message: string): void
    {
        console.log(`${ConsoleColour.FgBlue}${message}${ConsoleColour.Reset}`);
    }

    /**
     * @param {string} message
     * @param {Array<string>} colours
     */
    public static log(message: string, colours: Array<string>): void
    {
        console.log(`${colours.join('')}${message}${ConsoleColour.Reset}`);
    }
}