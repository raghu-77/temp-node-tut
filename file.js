
const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8',(err,res) => {
    if(err) {
        console.log(err);
        return;
    }

    const first = res;

    readFile('./content/first.txt', 'utf8',(err,res) => {
        if(err) {
            console.log(err);
            return;
        }
    
       const second = res;

       writeFile('./content/third-text.txt', `${first}, ${second}`, (err, res) => {
            if(err) {
                console.log(err);
                return;
            }

            console.log(res);
       })
    });
});