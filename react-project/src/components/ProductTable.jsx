import './ProductTable.css'

function ProductTable(products) {
    var array = [{ id: 1, name: "Coca Cola 355ML", price: 12.0 },
    { id: 2, name: "Coca Cola 600ML", price: 18.0 }];
    console.log(array);


    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {products.products.map((product) => (
                        <tr className="product">
                            <td className="id">{product.id}</td>
                            <td className="name">{product.name}</td>
                            <td className="price">{product.price}</td>
                        </tr>
                    ))
                    }
                </tbody>

            </table>
        </>
    )
}

export default ProductTable