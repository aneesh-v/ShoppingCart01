import styled from 'styled-components';
import Product from '../components/Product';
import { popularProducts } from '../data';

const Container = styled.div`
	display: flex;
	padding: 20px;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
`;

const Products = () => {
	return (
		<Container>
			{popularProducts.map((item) => (
				<Product item={item} key={item.id} />
			))}
		</Container>
	);
};

export default Products;
