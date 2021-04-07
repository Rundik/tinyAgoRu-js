TinyAgoRu.js
==========

TinyAgoRu.js is a tiny (506 bytes when minified) JavaScript library that converts
timestamps into relative time in russian (a.k.a. "time ago").

Usage
-----

The library provides one function `ago()`, which expects an argument that is a
timestamp in milliseconds (such as the return value of the
[`Date.getTime()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)
method), and returns a string with the relative time:

```javascript
var d = new Date('January 1, 2014');
console.log(ago(d.getTime())); // -> '7 месяцев' (assuming it's August 2014)
```

As shown in the above example, the function does not return the `'назад'` suffix.
This is left as an exercise for the reader.

### Dates in the future

The function assumes the timestamp is in the past, but with a little wrapper it
can also work with future dates:

```javascript
function agofromnow(v) {
    if (v > Date.now())
        return 'через ' + ago(2 * Date.now() - v);
    else
        return ago(v) + ' назад';
}
```
