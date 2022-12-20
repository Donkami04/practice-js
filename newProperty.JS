
    const obj = [
        {
            name: "Product 1",
            price: 1000,
            stock: 10
        },
        {
            name: "Product 2",
            price: 2000,
            stock: 20},
        
    ];
    const newObj = obj.map((item) => {
        return {
            ...item,
            iva: item.price * 0.19
    };
})
objF = obj.filter(item => item.price <= 1000);
console.log(item.price);