function ago(v) {
    v = ~~((Date.now() - v)/1e3);
    var a, b = { second: 60, minute: 60, hour: 24, day: 7, week: 4.35,
        month: 12, year: 1e4 }, c;
 
    for (a in b) {
        c=v % b[a];
        if (!(v = ~~(v / b[a])))
            return c + ' ' + (c-1 ? a + 's' : a);
    }
}