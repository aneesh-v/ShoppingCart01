import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components';

const Info = styled.div`
	position: absolute;
	opacity: 0;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.1);
	z-index: 3;
	transition: all 0.5s ease;
`;

const Container = styled.div`
	display: flex;
	position: relative;
	flex: 1;
	margin: 5px;
	min-width: 350px;
	height: 350px;
	justify-content: center;
	align-items: center;
	background-color: #f5fbfd;

	&:hover ${Info} {
		opacity: 1;
	}
`;
const Circle = styled.div`
	height: 250px;
	width: 250px;
	border-radius: 50%;
	background-color: white;
	position: absolute;
`;
const Image = styled.img`
	height: 75%;
	z-index: 2;
`;

const Icon = styled.div`
	display: flex;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	margin: 10px;
	justify-content: center;
	align-items: center;
	transition: all 0.5s ease;

	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.1);
		cursor: pointer;
	}
`;

const Product = ({ item }) => {
	return (
		<Container>
			<Circle />
			<Image src={item.img} />
			<Info>
				<Icon>
					<ShoppingCartOutlined />
				</Icon>
				<Icon>
					<SearchOutlined />
				</Icon>
				<Icon>
					<FavoriteBorderOutlined />
				</Icon>
			</Info>
		</Container>
	);
};

export default Product;
