const items = [1,3,2,3];

const rta = items.reduce((obj, item) => {
    if (!obj[item]){
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
},    {});

console.log(rta);

const players = [
    {
        name: "lu",
        level: "alto",
    },
    {
        name: "juan",
        level: "alto",
    },
    {
        name: "rob",
        level: "bajo",
    },   
]
const levels = players
.map (item => item.level)
.reduce ((obj, item) => {
//code
    if(!obj[item]){
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
},   {}

)

console.log(levels);

