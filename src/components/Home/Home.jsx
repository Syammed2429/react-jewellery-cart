import { useState, useEffect } from 'react'

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products/category/jewelery')
            const result = await response.json();
            setProducts(result)

        }
        getProducts()
    }, []);

    return (
        <>
            <div className="container w-50 text-dark" style={{ minHeight: '100vh' }}>
                <h1>Home</h1>
                <img src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1617879158336/caratlane-offers.jpg" className="w-100 img-fluid" alt="deals" />
                {products.map((e) => (
                    <div
                        className="card d-flex my-3 p-4 mx-4 shadow 0 bg-secondary text-white"
                        key={e.id}>
                        <div>{e.title}</div>
                        <div><img src={e.image} className="img-fluid  w-25" alt="Jewelry" /></div>
                        <div>Price : {e.price}</div>
                        <div>Description : {e.description}</div>
                        <div>Category : {e.category}</div>
                        <div>Rating : {e.rating.rate}</div>
                        <div>Stock : {e.rating.count}</div>
                        <div className="d-flex justify-content-end gap-3">
                            <button className="btn btn-warning">Add To Cart</button>
                            <button className="btn btn-success"> Buy Now</button>

                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export { Home }
