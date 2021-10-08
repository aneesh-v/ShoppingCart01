import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter, YouTube } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
`;

const Left = styled.div`
	flex: 1;
	padding: 20px;
`;
const SocialIcon = styled.div`
	display: flex;
	flex-direction: column;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	justify-content: center;
	align-items: center;
	margin: 20px;
`;
const Center = styled.div`
	flex: 1;
	padding: 20px;
`;
const Title = styled.h3`
	padding: 30px;
`;
const List = styled.ul`
	display: flex;
	margin: 0;
	padding: 0;
	list-style: none;
	flex-wrap: wrap;
`;
const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;

const Right = styled.div`
	flex: 1;

	padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
	margin: 20px 0;
`;
const SocialContainer = styled.div`
	display: flex;
`;
const ContactItem = styled.div`
	display: flex;
	justify-content: left;
	align-items: center;
	margin-bottom: 10px;
`;
const Payment = styled.img`
	width: 20%;
`;
const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>Aneesh.</Logo>
				<Desc>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia omnis nesciunt ratione
					iste, cupiditate, exercitationem minima accusantium incidunt cumque ad ipsum cum ea
					possimus voluptatum, assumenda totam minus debitis distinctio magni. Architecto laborum
					provident voluptatibus, tenetur excepturi quis aperiam alias rem magni nobis quas illo,
					earum ratione itaque dolore ducimus?
				</Desc>
				<SocialContainer>
					<SocialIcon color='3b5998'>
						<Facebook />
					</SocialIcon>
					<SocialIcon color='1DA1F2'>
						<Twitter />
					</SocialIcon>
					<SocialIcon color='C13584'>
						<Instagram />
					</SocialIcon>
					<SocialIcon color='E60023'>
						<Pinterest />
					</SocialIcon>
					<SocialIcon color='FF0000'>
						<YouTube />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Get the Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Fashion</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Men Fashion</ListItem>
					<ListItem>Women Fashion</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{ marginRight: '10px' }} /> Lorem ipsum dolor sit amet.
				</ContactItem>
				<ContactItem>
					<Phone style={{ marginRight: '10px' }} /> +254 85 855 9625.
				</ContactItem>
				<ContactItem>
					<MailOutline style={{ marginRight: '10px' }} /> contact@gmail.com
				</ContactItem>
				<Payment src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQtV1R6rzhOTyI-KCNKDGvJ_9q280IrnFFHQ&usqp=CAU' />
			</Right>
		</Container>
	);
};

export default Footer;
