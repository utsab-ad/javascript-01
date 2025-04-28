let roll = {
    utsab: 241254,
    ram: 241258,
    hari: 241550,
    sita: 251460,
    kim: 267080

}

for(let i=0; i<Object.keys(roll).length; i++)
        {
            console.log("The Roll No. of " + Object.keys(roll)[i] + " is " + roll[Object.keys(roll)[i]]);
        }

for(i=0;i<2;i++)
        {
            console.log(1+i);
        }

let obj = {
    name: "utsab",
    role: "programmer",
    college: "NCIT"
}

for (const key in obj) {

        const element = obj[key];
        console.log(key, element)  
}

for( const char of "Utsab")
        {
            console.log(char);
        }

        let index = 13;

while(index>10)
    {
        console.log(index);
        index--;
    }