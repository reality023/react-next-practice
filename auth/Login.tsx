import { NextPageContext } from "next";
import React from "react";
import tw, { styled } from "twin.macro";

interface LoginProps {
	setRegisterState: (state: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setRegisterState }) => {
	return (
		<FormContainer>
			<h2>LOGIN</h2>
			<form>
				<input type="text" placeholder="ID" />
				<input type="password" placeholder="PASSWORD" />
				<button type="submit">LOGIN</button>
			</form>
			<div className="goto-signup-box">
				<span>Don&apos;t have an account?</span>
				<button
					onClick={() => {
						setRegisterState(true);
					}}
				>
					Sign Up
				</button>
			</div>
		</FormContainer>
	);
};

export default Login;

const FormContainer = styled.div`
	${tw`w-350 h-420 flex flex-col items-center rounded-5 flex-shrink-0`};

	h2 {
		${tw`text-4xl font-bold py-40 text-[#673cbe]`};
	}

	form {
		${tw`flex flex-col items-center w-full px-40`};

		input {
			${tw`w-full p-15 border-2 border-solid border-[#DDDDDD] rounded-10 text-12 transition-colors duration-300 focus:outline-none focus:border-[#673cbe]`};
		}

		input + input {
			margin-top: 10px;
		}

		button {
			${tw`w-full py-30 bg-[#673cbe] text-white rounded-10 mt-20 hover:bg-[#3f2377] transition-colors duration-300`};
		}
	}

	.goto-signup-box {
		${tw`w-full flex justify-end items-center mt-20 text-12 px-45`};

		span {
		}

		button {
			${tw`text-[#3f2377] ml-10`};
		}
	}
`;
