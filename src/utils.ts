/**
 * Return PascalCase version of snake_case string.
 * @internal
 */
export function snakeToPascal(name: string): string {
    return name
        .split('_')
        .map((v) => (v[0] ? v[0].toUpperCase() : '_') + v.slice(1))
        .join('')
}

/**
 * Return camelCase version of snake_case string.
 * @internal
 */
export function snakeToCamel(name: string): string {
    const pascal = snakeToPascal(name)
    return pascal[0].toLowerCase() + pascal.slice(1)
}

/**
 * Print a warning message to console.
 * @internal
 **/
export function logWarn(...args: any[]) {
    // eslint-disable-next-line no-console
    console.warn('[anchor-link]', ...args)
}
