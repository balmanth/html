/**!
 * Copyright (C) 2020 Silas B. Domingos
 * @license MIT
 */
/**
 * Encode any special HTML characters from the specified text.
 * @param text Text input.
 * @returns Returns the encoded text.
 */
export function encodeText(text) {
    return text.replace(/[\"\'\<\>\&]/g, match => {
        switch (match) {
            case '"':
                return '&quot;';
            case "'":
                return '&39;';
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '&':
                return '&amp;';
        }
        return match;
    });
}
/**
 * Decode any special HTML characters from the specified text.
 * @param text Text input.
 * @returns Returns the decoded text.
 */
export function decodeText(text) {
    return decodeURIComponent(text);
}
//# sourceMappingURL=contents.js.map