const fs = require("fs");

fs.readFile("output.txt", "utf8", (err, data) => {
    if (err) throw Error(err)
    let info = data.split('\n')
    let count_game = info.filter(item => item === '===================Следующий игрок=============================== ').length
    let win = 0
    let lose = 0
    let sum = 0
    info.forEach(element => {
        let a = element.split(' ')
        if (a[4] === 'победил!') {
            win++
        } else if (a[4] === 'проиграл!') {
            lose++
        } else {
            sum++
        }
    });
    let pocent = lose + win
    let lose_pros = lose / pocent * 100
    let win_pros = win / pocent * 100
    console.log(`всего пользователей ${count_game}, всего матчей ${pocent}, побед ${win}, поражений ${lose}, процентное соотношение проигрыш ${lose_pros}%, выигрыш ${win_pros}%`)
});