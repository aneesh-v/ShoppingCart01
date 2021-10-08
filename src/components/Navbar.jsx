import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

const Container = styled.div`
	height: 60px;
`;
const Wrapper = styled.div`
	display: flex;
	padding: 0.75rem 1.1rem;
	justify-content: space-between;
	align-items: center;
`;
const Left = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
`;
const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	border: 0.0625rem solid lightgray;
	margin-left: 1.5rem;
`;
const Input = styled.input`
	border: none;
`;
const Logo = styled.h1``;
const Language = styled.span`
	font-size: 0.9rem;
	cursor: pointer;
`;
const Center = styled.div`
	flex: 1;
	text-align: center;
`;
const Right = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
`;
const MenuItem = styled.div`
	font-size: 0%.9rem;
	cursor: pointer;
	margin-left: 1rem;
`;
const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>LN</Language>
					<SearchContainer>
						<Input />
						<Search style={{ color: 'gray', fontSize: '1rem' }} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>Aneesh.</Logo>
				</Center>
				<Right>
					<MenuItem>REGISTER</MenuItem>
					<MenuItem>SIGN IN</MenuItem>
					<MenuItem>
						<Badge badgeContent={4} color='primary'>
							<ShoppingCartOutlined />
						</Badge>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
