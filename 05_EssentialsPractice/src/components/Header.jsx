import styled from 'styled-components';
import logo from '../../public/investment-calculator-logo.png';

const Header = styled.header`
  text-align: center;
  margin: 3rem auto;

  img {
    width: 5rem;
    height: 5rem;
    object-fit: contain;
    background-color: transparent;
  }

  h1 {
    font-size: 1.5rem;
  }
`;

export default function HeaderComponent() {
  return (
    <Header>
      <img src={logo} alt="" />
      <h1>React Investment Calculator</h1>
    </Header>
  );
}
