import { NextPage } from "next";
import tw, { styled } from "twin.macro";

const Home: NextPage = () => {
	return (
		<RootContainer>
			<Header>
				<h1>GRIDY</h1>
				<p>Word Application</p>
			</Header>
			<FormContainer>
				<h2>LOGIN</h2>
				<form>
					<input type="text" placeholder="ID" />
					<input type="password" placeholder="PASSWORD" />
					<button type="submit">LOGIN</button>
				</form>
				<div className="goto-signup-box">
					<span>Don't have an account?</span>
					<a href="#">Sign Up</a>
				</div>
			</FormContainer>
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
		${tw`text-8xl font-bold`};
	}

	p {
		${tw`text-2xl`};
	}
`;

const FormContainer = styled.div`
	${tw`w-350 h-420 bg-white flex flex-col items-center rounded-5`};

	h2 {
		${tw`text-4xl font-bold py-40 text-[#3f2377]`};
	}

	form {
		${tw`flex flex-col items-center w-full px-40`};

		input {
			${tw`w-full p-15 border-2 border-solid border-[#DDDDDD] rounded-10 text-12`};
		}

		input + input {
			margin-top: 10px;
		}

		button {
			${tw`w-full py-30 bg-[#3f2377] text-white rounded-10 mt-20`};
		}
	}

	.goto-signup-box {
		${tw`w-full flex justify-end items-center mt-20 text-12 px-45`};

		span {
		}

		a {
			${tw`text-[#3f2377] ml-10`};
		}
	}
`;
