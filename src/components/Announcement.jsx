import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	background-color: teal;
	height: 2.25rem;
	color: white;
	align-items: center;
	justify-content: center;
	font-size: 0.9rem;
	font-weight: 500;
`;
const Announcement = () => {
	return <Container>Its the deal...</Container>;
};

export default Announcement;
