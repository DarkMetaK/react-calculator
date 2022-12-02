import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Button from '../Button/index';
import Display from '../Display/index';

import { BodyContainer, Row, RowEnd } from "./styles";
import { Highlight } from '../Button/styles';

const Body = () => {

    const [currentNumber, setCurrentNumber] = useState('0');
    const [firstNumber, setFirstNumber] = useState('0');
    const [operation, setOperation] = useState('');
    const [displayOper, setDisplayOper] = useState('');
    
    const handleAddNumber = (number) => {
        setCurrentNumber(prev => {
          if(prev.length < 8) return `${prev === '0' ? '' : prev}${number}`
          return prev
        })
    }

    const handleOperation = () => {
      if(operation !== ''){
        switch(operation){

          case '+':
            const sum = Number(firstNumber) + Number(currentNumber)
            setCurrentNumber(String(sum));
            setDisplayOper(`${firstNumber} + ${currentNumber}`);
            break;

          case '-':
            const minus = Number(firstNumber) - Number(currentNumber)
            setCurrentNumber(String(minus));
            setDisplayOper(`${firstNumber} - ${currentNumber}`);
            break;

          case '/':
            const split = Number(firstNumber) / Number(currentNumber)
            setCurrentNumber(String(split));
            setDisplayOper(`${firstNumber} / ${currentNumber}`);
            break;
          
          case '*':
            const mult = Number(firstNumber) * Number(currentNumber)
            setCurrentNumber(String(mult));
            setDisplayOper(`${firstNumber} * ${currentNumber}`);
            break;

          default: break;
        }
      }
    }

    const sumNumbers = () => {
      if(firstNumber === '0' || displayOper !== ''){
        setFirstNumber(currentNumber);
        setCurrentNumber('0');
        setDisplayOper(`${currentNumber} +`);
        setOperation('+');
      }
    }

    const MinusNumbers = () => {
      if(firstNumber === '0' || displayOper !== ''){
        setFirstNumber(currentNumber);
        setCurrentNumber('0');
        setDisplayOper(`${currentNumber} -`);
        setOperation('-');
      }
    }

    const SplitNumbers = () => {
      if(firstNumber === '0' || displayOper !== ''){
        setFirstNumber(currentNumber);
        setCurrentNumber('0');
        setDisplayOper(`${currentNumber} /`);
        setOperation('/');
      }
    }

    const MultiplyNumbers = () => {
      if(firstNumber === '0' || displayOper !== ''){
        setFirstNumber(currentNumber);
        setCurrentNumber('0');
        setDisplayOper(`${currentNumber} *`);
        setOperation('*');
      }
    }

    const onClear = () => {
      setCurrentNumber('0');
    }

    const onClearAll = () => {
      setCurrentNumber('0');
      setOperation('');
      setDisplayOper('');
      setFirstNumber('0');
    }

    return (
      <BodyContainer>

        <Display value={currentNumber} oper={displayOper}/>

        <RowEnd>
          <Button
            label="C"
            handleClick={onClear}
          />
          <Button
            label="CE"
            handleClick={onClearAll}
          />            
        </RowEnd>

        <Row>
          <Button
            label="7"
            handleClick={() => handleAddNumber('7')}
          />
          <Button
            label="8"
            handleClick={() => handleAddNumber('8')}
          />
          <Button
            label="9"
            handleClick={() => handleAddNumber('9')}
          />
          <Button
            label="%"
            handleClick={SplitNumbers}
          />
        </Row>
        <Row>
        <Button
            label="4"
            handleClick={() => handleAddNumber('4')}
          />
          <Button
            label="5"
            handleClick={() => handleAddNumber('5')}
          />
          <Button
            label="6"
            handleClick={() => handleAddNumber('6')}
          />
          <Button
            label="X"
            handleClick={MultiplyNumbers}
          />
        </Row>
        <Row>
        <Button
            label="1"
            handleClick={() => handleAddNumber('1')}
          />
          <Button
            label="2"
            handleClick={() => handleAddNumber('2')}
          />
          <Button
            label="3"
            handleClick={() => handleAddNumber('3')}
          />
          <Button
            label="-"
            handleClick={MinusNumbers}
          />
        </Row>
        <Row>
          <Button
            label="0"
            handleClick={() => handleAddNumber('0')}
          />
          <Button
            label="."
            handleClick={() => handleAddNumber('.')}
          />
          <Button
            label="+"
            handleClick={sumNumbers}
          />
          <ThemeProvider theme={Highlight}>
            <Button
              label="="
              handleClick={handleOperation}
            />            
          </ThemeProvider>
        </Row>

      </BodyContainer>
    );
  }
  
export default Body;