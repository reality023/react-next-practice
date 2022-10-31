import tw, { styled } from "twin.macro";
import { IoArrowBack } from "react-icons/io5";

interface RegisterProps {
	setRegisterState: (state: boolean) => void;
}

const Register: React.FC<RegisterProps> = ({ setRegisterState }) => {
	return (
		<FormContainer>
			<Back
				onClick={() => {
					setRegisterState(false);
				}}
			>
				<IoArrowBack />
			</Back>
			<h2>Register</h2>
			<form>
				<input type="text" placeholder="ID" />
				<input type="password" placeholder="PASSWORD" />
				<input type="password" placeholder="PASSWORD CONFIRM" />
				<input type="email" placeholder="EMAIL" />
				<input type="text" placeholder="NICKNAME" />
				<button type="submit">REGISTER</button>
			</form>
		</FormContainer>
	);
};

export default Register;

const FormContainer = styled.div`
	${tw`w-350 flex flex-col items-center rounded-5 flex-shrink-0 relative`};

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
`;

const Back = styled.div`
	${tw`absolute left-40 top-45 text-24 text-[#673cbe] cursor-pointer transition-colors duration-300 hover:text-[#3f2377]`};
`;
