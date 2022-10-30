import { NextPage } from "next";
import { useState } from "react";
import tw, { styled } from "twin.macro";
import Login from "../auth/Login";
import Register from "../auth/Register";

const Home: NextPage = () => {
	const [isRegisterState, setRegisterState] = useState(false);

	return (
		<RootContainer>
			<Header>
				<h1>
					<span>GRIDY</span>
				</h1>
				<p>Word Application</p>
			</Header>
			<Auth isRegister={isRegisterState}>
				<Login setRegisterState={setRegisterState} />
				<Register />
			</Auth>
		</RootContainer>
	);
};

export default Home;

const RootContainer = styled.div`
	${tw`w-full h-[100vh] bg-[#673cbe] flex flex-col justify-center items-center`};
`;

const Header = styled.div`
	${tw`py-40 pb-30 text-white text-center`}
	h1 {
		${tw`text-8xl font-bold text-shadow`};
	}

	p {
		${tw`text-2xl text-shadow`};
	}
`;

const Auth = styled.div`
	${tw`flex flex-nowrap w-350 overflow-hidden bg-white rounded-10 shadow-2xl`};

	${({ isRegister }) => {
		if (isRegister) {
			return tw`translate-x-0`;
		} else {
			return tw`translate-x-full`;
		}
	}};
	transition: transform 0.5s;
`;
