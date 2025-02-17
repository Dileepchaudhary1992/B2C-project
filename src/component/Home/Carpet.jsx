import carpetProduct from '../../assets/images/bestseller-collection/product-1.jpg';
import carpetProductTwo from '../../assets/images/bestseller-collection/product-2.jpg';
import carpetProductThree from '../../assets/images/bestseller-collection/product-3.jpg';
import carpetProductFour from '../../assets/images/bestseller-collection/product-4.jpg';

function Carpet() {
    const bestsellerProduct = [
        { id: 1, image: carpetProduct, title: 'Shop Goop', button: 'ADD TO CART' },
        { id: 2, image: carpetProductTwo, title: 'Shop Goop', button: 'ADD TO CART' },
        { id: 3, image: carpetProductThree, title: 'Shop Goop', button: 'ADD TO CART' },
        { id: 4, image: carpetProductFour, title: 'Shop Goop', button: 'ADD TO CART' },
    ];

    return (
        <section className="bestsellerbox-carpet">
            <div className="container">
                <div className="row">
                    <div className="col-md-1">
                        <h2>Carpet</h2>
                    </div>
                    <div className="col-md-11">
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {bestsellerProduct.map((product) => (
                        <div className="col-md-3" key={product.id}>
                            <div className="box">
                                <div className="box-product">
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <div className="content-box">
                                    <h3>{product.title}</h3>
                                    <a href="#" className="btn btn-primary">
                                        {product.button}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Carpet;
