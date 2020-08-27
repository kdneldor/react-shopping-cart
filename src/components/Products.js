import React, {useContext} from 'react';
import {ProductContext} from '../App.js';

// Components
import Product from './Product';

const Products = () => {
	const products = useContext(ProductContext)
	return (
		<div className="products-container">
			{props.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={props.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
