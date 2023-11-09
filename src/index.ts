import TSTemplate from './types/TSTemplate';

declare global {
    interface Window {
        TSTemplate  : TSTemplate
    }
}

export {
    TSTemplate
}