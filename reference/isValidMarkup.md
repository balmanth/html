# Function: isValidMarkup(element: string): boolean

It's used to determines whether or not an element markup is a valid element markup.

## Example

```ts
Html.isValidMarkup('<custom>'); // Output: true
Html.isValidMarkup('custom>'); // Output: false
Html.isValidMarkup('<custom'); // Output: false
```

> A valid element markup should starts with '&lt;' and ends with '&gt;'

## License

[MIT](https://balmante.eti.br)
