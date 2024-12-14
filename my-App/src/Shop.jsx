import Product from "./Products";

function Shop() {
    const productNumber = [];

    for (let i = 0; i < 20; i++) {
    productNumber.push(<Product/>); // Adding Product component to the array
}

    return (
    <div className="flex px-4 flex-wrap justify-center">
    {productNumber} 
    </div>
);
}

export default Shop;
