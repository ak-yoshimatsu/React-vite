import { Link } from "react-router-dom";

const linkStyle = {
  color: 'Red',
  fontWeight: 'bold',
}

const Index = () => {
  const isbn = '000-0000-0000'

  return (
    <div>
      <h1>Books</h1>
      <p>
        <Link to={isbn} style={linkStyle}>Detail</Link>
      </p>
    </div>
  );
};

export default Index;