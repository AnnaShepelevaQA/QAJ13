// esm-loader.js
import { pathToFileURL } from 'url';

export async function resolve(specifier, context, defaultResolve) {
    return defaultResolve(specifier, context);
}