function ago(val) {
    val = 0 | (Date.now() - val) / 1000;
    var unit, length = { секунд: 60, минут: 60, час: 24, ден: 7, недел: 4.35,
        месяц: 12, год: 10000 }, result;
    var decl = { секунд: ["а","ы",""], минут: ["а","ы",""], час: ["","а","ов"], ден: ["день","дня","дней"], недел: ["я","и","ь"],
        месяц: ["","а","ев"], год: ["год","года","лет"]};
    var decf = ["ден", "год"];
 
    for (unit in length) {
        result = val % length[unit];
        if (!(val = 0 | val / length[unit]))
            return result + ' ' + (decf.indexOf(unit)+1 ? "" : unit) + decl[unit][result%10>4 ? 2 : result%10-1 ? 1 : 0];
    }
}
