import styled from 'styled-components';

const UserInput = styled.div`
  padding: 1rem;
  max-width: 30rem;
  margin: 2rem auto;
  border-radius: 4px;
  background: linear-gradient(180deg, #307e6c, #2b996d);

  label {
    display: block;
    margin-bottom: 0.25rem;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 0.5rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #76c0ae;
    border-radius: 0.25rem;
    background-color: transparent;
    color: #c2e9e0;
    font-size: 1rem;
  }
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1.5rem;
`;

export default function UserInputComponent() {
  return <UserInput>
    <InputGroup>
    <label ></label>
    <input type="text" />
    </InputGroup>
  </UserInput>;
}
