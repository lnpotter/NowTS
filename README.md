
# NowTS

NowTS is a lightweight, modular library for date and time manipulation. It provides a range of utilities for working with dates and times, including formatting, parsing, and calculating differences. NowTS is built with TypeScript to provide type safety and better development experience.

## Features

- Formatting dates and times
- Parsing date and time strings
- Adding and subtracting days and hours
- Getting the difference in days between dates
- Handling multiple time zones
- Lightweight and modular
- TypeScript support

## Installation

You can install NowTS via npm:

```sh
npm install nowts
```

## Usage

To use NowTS, you need to import and extend the desired plugins:

```javascript
import NowTS from 'nowts';
import formatDate from 'nowts/plugins/formatDate';
import parseDate from 'nowts/plugins/parseDate';

NowTS.extend(formatDate);
NowTS.extend(parseDate);

const formattedDate = NowTS.formatDate(new Date(), 'YYYY-MM-DD');
const parsedDate = NowTS.parseDate('2024-01-01', 'YYYY-MM-DD');
console.log(formattedDate); // Outputs formatted date
console.log(parsedDate); // Outputs parsed date object
```

## API

### `formatDate(date: Date, format: string): string`

Formats a date object into a string according to the specified format.

### `parseDate(dateString: string, format: string, timezone?: string): Date`

Parses a date string into a Date object according to the specified format and timezone.

### `addDaysToDate(date: Date, days: number): Date`

Adds a specified number of days to a date object.

### `subtractDaysFromDate(date: Date, days: number): Date`

Subtracts a specified number of days from a date object.

### `getDaysDifference(date1: Date, date2: Date): number`

Returns the difference in days between two dates.

### `toISO(date: Date): string`

Converts a date object to an ISO string.

### `startOfMonth(date: Date): Date`

Returns a new date object set to the start of the month of the provided date.

### `endOfMonth(date: Date): Date`

Returns a new date object set to the end of the month of the provided date.

### `formatCurrentTime(): string`

Formats the current time in 'HH:mm:ss' format.

### `addHoursToDate(date: Date, hours: number): Date`

Adds a specified number of hours to a date object.

### `subtractHoursFromDate(date: Date, hours: number): Date`

Subtracts a specified number of hours from a date object.

### `parseTime(timeString: string): Date`

Parses a time string into a Date object.

## Development

To set up the development environment, clone the repository and install the dependencies:

```sh
git clone https://github.com/lnpotter/NowTS.git
cd NowTS
npm install
```

### Building the Library

To build the library, run:

```sh
npm run build
```

### Running Tests

To run the tests, use:

```sh
npm run test
```

## License

This project is licensed under the MIT License.
