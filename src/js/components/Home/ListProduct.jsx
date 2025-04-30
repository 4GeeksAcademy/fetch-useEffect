
import Product from "./Product";


const ListProduct = ({data, title}) => {
	
	const html = data.map((prod, i)=> <Product item={prod} key={i}/>)

	return (
		<div className="text-center">
			<h2>listado</h2>
			{html}
		</div>
	);
};

export default ListProduct;