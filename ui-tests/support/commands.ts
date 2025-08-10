import { Runnable } from 'mocha';

export function handleUncaughtExceptions(): void {
    Cypress.on('uncaught:exception', (err: Error, runnable: Runnable) => {
        return !err.message.includes('b.cardModuleFactory is not a function');
    });

    if (typeof window !== 'undefined' && typeof window.KeyboardEvent === 'undefined') {
        // @ts-ignore
        window.KeyboardEvent = class KeyboardEvent {
            constructor(type: string, eventInitDict?: KeyboardEventInit) {
            }
        };
    }
}
