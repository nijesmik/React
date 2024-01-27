import { Link } from 'react-router-dom';

export function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/poroducts">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
