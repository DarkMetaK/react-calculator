import { ButtonContainer } from "./styles";

const Button = ({label, handleClick, classValue}) => {
    return (
      <ButtonContainer onClick={handleClick} className={classValue}>
        {label}
      </ButtonContainer>
    );
  }
  
export default Button;
