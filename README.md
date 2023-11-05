# Console Logger

<div>
<!-- Version Badge -->
<img src="https://img.shields.io/badge/Version-0.2.0-blue" alt="Version 0.2.0">
<!-- Coverage Badge -->
<img src="https://img.shields.io/badge/Coverage-100.00%25-green" alt="Coverage 100.00%">
</div>

A console wrapper to easily output coloured messages.

## Installation

```shell
npm install @dannyxcii/console-logger
```

## Usage

```typescript
import { ConsoleColour, ConsoleLogger } from '@dannyxcii/console-logger';

// console.log()'s a blue message
ConsoleLogger.logInfo(<string>message);

// console.log()'s a green message
ConsoleLogger.logSuccess(<string>message);

// console.warn()'s a yellow message
ConsoleLogger.logWarning(<string>message);

// console.error()'s a red message
ConsoleLogger.logError(<string>message);

// Any colour/style combination you like from the ConsoleColour enum
ConsoleLogger.log(<string>message, <Array<string>>colours);

// Example .log() usage
ConsoleLogger.log('My message', [
    ConsoleColour.FgCyan, 
    ConsoleColour.BgMagenta, 
    ConsoleColour.Blink
]);
```