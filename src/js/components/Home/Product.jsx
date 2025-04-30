import React from "react";

const Product = ({item}) => {
	return (
            <article>
				<h2>{item.title}</h2>
				<p>{item.price}</p>
				<p>{item.description} </p>
			</article>
	);
};

export default Product;