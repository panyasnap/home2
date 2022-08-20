const fs = require("fs");
const path = require('path')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const items = [1, 2]

const game = () => {
    let monet = items[Math.floor(Math.random() * items.length)];
    readline.question('Загадано число 1 или 2 \n', user_number => {
        user_number = parseInt(user_number)
        if (user_number === monet) {
            console.log(`Правильный ответ "${monet}"!!!`)
            let logs = `пользователь ввел ${user_number} и победил!\n`
            fs.appendFile('output.txt', logs, (err) => {
                if (err) throw Error(err)
                console.log('ok')
            })
            again()
        } else {
            console.log(`Вы не угадали, попробуйте еще раз\n`)
            let logs = `пользователь ввел ${user_number} и проиграл! \n`
            fs.appendFile('output.txt', logs, (err) => {
                if (err) throw Error(err)
                console.log('ok')
            })
            again()
        }
    })
}
const again = () => {
    readline.question('Хотите сыграть еще раз? \n Y/N \n', answer => {
        if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
            game()
        } else {
            const file = path.join(__dirname, 'output.txt')
            let logs = `===================Следующий игрок=============================== \n`
            fs.appendFile(file, logs, (err) => {
                if (err) throw Error(err)
                console.log('ok')
            })
            readline.close()
        }
    })
}

game()
