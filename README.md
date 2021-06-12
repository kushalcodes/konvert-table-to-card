> * Convert table to card
>
> * see index.html for example
> 
> * converts table to card when viewport is <= 425px
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

### Styling
> style the converted cards using prebuilt stylings
```js
// styling list name
> simple
> buddha
> casual
```
#### Using these styles
```js
TABLE_KONVERTER.init("#tableId",{
  style: 'buddha' // image below is how the buddha styling look like
});
```
![Style: 'buddha'](https://i.imgur.com/EJAa3pk.png)

### Dependencies
* Bootstrap