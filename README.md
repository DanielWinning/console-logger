# Console Logger

<div>
<!-- Version Badge -->
<img src="https://img.shields.io/badge/Version-0.1.8-blue" alt="Version 0.1.8">
<!-- Coverage Badge -->
<img src="https://img.shields.io/badge/Coverage-100.00%25-green" alt="Coverage 100.00%">
</div>

Add colours to your console output with ease.

## Installation

```shell
npm install @dannyxcii/console-logger
```

## Usage

```typescript
import Logger from '@dannyxcii/console-logger';

// console.log()'s a blue message
Logger.ConsoleLogger::logInfo(<string> message);

// console.log()'s a green message
Logger.ConsoleLogger::logSuccess(<string> message);

// console.warn()'s a yellow message
Logger.ConsoleLogger::logWarning(<string> message);

// console.error()'s a red message
Logger.ConsoleLogger::logError(<string> message);

// Any colour/style you like from the Logger.ConsoleColour enum
Logger.ConsoleLogger::log(<string> message, <string> colour);
```