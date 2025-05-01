let noOf = 50;

const print = (word) => {
    console.log(word);
}

const cond = (m, n) => {

return m%n === 0;

}

for(let i=1;i<=noOf;i++)
        {
            (cond(i, 3) && cond(i, 5) ? print("FizzBuzz") : (cond(i, 3) ? print("Fizz") : (cond(i, 5)) ? print("Buzz"): console.log(i)));
        }