export function firstLetterUpper() {
    return {
        name: 'first-letter-upper',
        message: 'The first letters must be uppercase',
        test: (value: string | undefined) => {
            if (value && value.length > 0) {

                const firstLetter = value.substring(0,1);

                return firstLetter === firstLetter.toUpperCase();
            }

            return true;
        }

    }
}