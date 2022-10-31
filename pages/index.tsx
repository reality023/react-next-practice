import { NextPage } from "next";
import { useState } from "react";
import tw, { styled } from "twin.macro";
import Login from "../auth/login";
import Register from "../auth/register";

const Home: NextPage = () => {
	const [isRegisterState, setRegisterState] = useState<boolean>(false);

	return (
		<RootContainer>
			<Header>
				<h1>
					<span>GRIDY</span>
				</h1>
				<p>Word Application</p>
			</Header>
			<Auth isActive={isRegisterState}>
				<AuthWrapper isActive={isRegisterState}>
					<Login setRegisterState={setRegisterState} />
					<Register setRegisterState={setRegisterState} />
				</AuthWrapper>
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

interface AuthProps {
	isActive: boolean;
}

const Auth = styled.div<AuthProps>`
	${tw`flex flex-nowrap w-350 overflow-hidden bg-white rounded-10 shadow-2xl`};

	${(props: AuthProps) => {
		if (props.isActive) {
			return tw`h-580`;
		} else {
			return tw`h-410`;
		}
	}};

	transition: height 0.3s;
`;

const AuthWrapper = styled.div<AuthProps>`
	${tw`w-700 h-full flex flex-nowrap relative`};

	${(props: AuthProps) => {
		if (props.isActive) {
			return tw`left-[-350px]`;
		} else {
			return tw`left-0`;
		}
	}};
	transition: left 0.3s;
`;
