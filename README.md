> * Convert table to card
>
> * see index.html for example
> 
> * converts table to card when viewport is <= 425px

### HTML Syntax

```html
<table>

  <!-- table headings -->
  <thead>

    <!-- use th tags for headings -->
    <th></th>

  </thead>

  <!-- table body -->
  <tbody>

    <!-- use tr tags for rows -->
    <tr>
      <!-- use td tags for columns -->
      <td></td>
    </tr>

    <tr>
      <td></td>
    </tr>

  </tbody>

</table>
```

### Load from CDN

```js
<script src="https://cdn.jsdelivr.net/gh/kushalcodes/konvert-table-to-card@main/konvert-table-to-card.min.js" type="text/javascript">
</script>
```

### Usage
> load this library then initialize using elements id or class

* id
```js
TABLE_KONVERTER.init("#tableId"); 
```
* class
```js
TABLE_KONVERTER.init(".tableClassName") 
```
 > Note: Do not add id on table with initialized class name
 >
 > css initializtion works by converting tables to have generated ids and use that id to TABLE_CONVERTER.init("#generatedId"), so do not add id to table which you want to convert, else it will throw error if so

### Options
```js
// options can be passed on second parameter as obj
const options = {
  style: 'styleName', // described on Style Option below
  type: 'typeName', // described on Type Option below
  stickyHeader: { // make card title sticky
    tableHeadingName: 'Action' // title or heading of table's name
  }
};
TABLE_KONVERTER.init('#tableId', options);
```
### Style Option
> style the converted cards using prebuilt stylings
```js
// styling names
> simple
> buddha
> casual
```

```js
TABLE_KONVERTER.init("#tableId",{
  style: 'buddha' // image below is how the buddha styling look like
});
```
![Style: 'buddha'](https://i.imgur.com/EJAa3pk.png?1)
### Type Option
```js
// type names
> autoAlign
```
```js
// can also add type
TABLE_KONVERTER.init("#tableId",{
  style: 'casual',
  type: 'autoAlign'
});
// above init will look something like this
```
  ![Style: 'buddha'](https://i.imgur.com/B5wMAAM.png)


### Dependencies
* Bootstrap