import { InputContainer } from "./styles";

const Display = ({value, oper}) => {
    return (
      <InputContainer>
        <p>{oper}</p>
        <input disabled value={value}/>
      </InputContainer>
    );
  }
  
export default Display;
