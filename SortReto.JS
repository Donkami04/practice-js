

const fechas = ['diciembre', 'junio', 'enero'];

function ordenador (arr){
    arr.toUpperCase()
    meses = [
        {'enero' : 1},
        {'febrero': 2},
        {'marzo': 3},
        {'abril': 4},
        {'mayo': 5},
        {'junio': 6},
        {'julio': 7},
        {'agosto': 8},
        {'septiembre': 9},
        {'octubre': 10},
        {'noviembre': 11},
        {'diciembre': 12},
    ];
} ;

fechas.sort((a,b)=>ordenador(a) - ordenador(b));


const orders = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
      date: new Date (2021, 3, 8, 4),
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
      date: new Date (2021, 9, 12, 3),
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
      date: new Date (2021, 8, 2, 2),
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
      date: new Date(2021, 1, 1, 9, 30),
    },
  ];
  orders.sort((a,b) => a.date - b.date);
  console.log(orders);