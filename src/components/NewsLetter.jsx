import { Send } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	height: 60vh;
	background-color: #fcf5f5;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
const Title = styled.h1`
	font-size: 60px;
	margin-bottom: 20px;
`;
const Des = styled.div`
	font-size: 20px;
	font-weight: 200;
	margin-bottom: 20px;
`;
const InputContainer = styled.div`
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	width: 50%;
	margin: 0;
	padding: 0;
	background-color: white;
	height: 40px;
	border: 1px solid lightgray;
`;
const Input = styled.input`
	font-size: 20px;
	flex: 8;
	margin: 0;
	padding: 0 0 0 10px;
	border: none;
`;
const Button = styled.button`
	flex: 1;
	margin: 0;
	border: none;
	background-color: teal;
	color: white;
`;

const NewsLetter = () => {
	return (
		<Container>
			<Title>NewsLetter</Title>
			<Des>Get timely updates from your favorite products</Des>
			<InputContainer>
				<Input placeholder='email address' />
				<Button>
					<Send />
				</Button>
			</InputContainer>
		</Container>
	);
};

export default NewsLetter;
