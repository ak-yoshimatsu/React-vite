import { useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";

const Home = () => {
  const [count, setCount] = useOutletContext()

  useEffect(() => setCount(count => count + 1), [setCount])

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