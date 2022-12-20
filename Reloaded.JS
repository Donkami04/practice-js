const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ]

 const rta = orders.map(item=>item.total);
console.log(rta);

const search = (query) => {
    return orders.filter(item=>{
        return item.customerName.includes(query);
    })
}
console.log(search("Zul"))
