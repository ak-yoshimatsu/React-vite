import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        <Link to="books" state={{ color: "blue"}}>Books</Link>
      </p>
    </div>
  );
};

export default Home;