/**!
 * Copyright (C) 2020 Silas B. Domingos
 * @license MIT
 */
/**
 * Set of void elements.
 */
const voidElements = new Set([
    'area',
    'base',
    'br',
    'col',
    'command',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr'
]);
/**
 * Determines whether or not the specified element name is a void element name.
 * @param element Element name.
 * @returns Returns true when it's a void element, false otherwise.
 */
export function isVoidElement(element) {
    return voidElements.has(element.toLowerCase());
}
/**
 * Determines whether or not the specified element markup is a valid markup.
 * @param element Element markup.
 * @returns Returns true when it's a valid markup, false otherwise.
 */
export function isValidMarkup(element) {
    return element.startsWith('<') && element.endsWith('>');
}
//# sourceMappingURL=elements.js.map