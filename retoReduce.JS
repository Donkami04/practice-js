const nums = [1,2,3,4,6,7,8,9,9,9,9,10];

const grupos = nums.reduce((obj, item) => {
    //code
    if(item <= 5){
        obj["1-5"] += 1;
    } else if (item <=8) {
        obj["6-8"] += 1;
    }
    else if (item <= 10){
        obj["9-10"] += 1;
    }
    return obj;   
    },   
    {
        "1-5": 0,
        "6-8": 0,
        "9-10": 0,
    }
);

console.log(grupos);