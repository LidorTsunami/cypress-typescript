import { Runnable } from 'mocha';

declare global {
    interface Window {
        KeyboardEvent?: new (type: string, eventInitDict?: KeyboardEventInit) => KeyboardEvent;
    }
}

export function handleUncaughtExceptions(): void {
    Cypress.on('uncaught:exception', (err: Error, runnable: Runnable) => {

        const ignoredErrors: string[] = [
            'b.cardModuleFactory is not a function',
            'No grid found with selector: #main-content'
        ];

        const shouldIgnore: boolean = ignoredErrors.some(msg => err.message.includes(msg));
        return !shouldIgnore;
    });

    if (typeof window !== 'undefined' && typeof window.KeyboardEvent === 'undefined') {
        class MockKeyboardEvent {
            type: string;
            eventInitDict?: KeyboardEventInit;

            constructor(type: string, eventInitDict?: KeyboardEventInit) {
                this.type = type;
                this.eventInitDict = eventInitDict;
            }
        }

        window.KeyboardEvent = MockKeyboardEvent as unknown as typeof KeyboardEvent;
    }
}
