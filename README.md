> Converts table to card

> see index.html for example

### Load from CDN

```js
<script src="https://cdn.jsdelivr.net/gh/kushalcodes/konvert-table-to-card@main/konvert-table-to-card.min.js" type="text/javascript">
</script>
```

### Usage
> load this library then initialize using elements id or class

* id
```js
TABLE_KONVERTER.init("#tableId"); // here konvertme is table id to convert to
```
* class
```js
TABLE_KONVERTER.init(".tableClassName") // basically this will convert table elements initialization with css to have generated ids and use that id to convert using the id, so table mustnot have id
```

### Styling
> style the converted cards using prebuilt stylings
```js
// styling list name
> simple
> buddha
```
#### Using these styles
```js
TABLE_KONVERTER.init("#tableId",{
  style: 'simple'
});
```

### Dependencies
* Bootstrap