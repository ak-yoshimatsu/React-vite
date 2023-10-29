import { Link, useParams } from "react-router-dom";

const NotFound = () => {
  const { '*': paths } = useParams()

  return (
    <div>
      <h1>Not Found</h1>
      <p>指定された「{paths}」は存在しません。</p>
      <p><Link to='/'>Home</Link></p>
    </div>
  );
};

export default NotFound;