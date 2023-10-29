import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams<string>()

  if (params.isbn?.length !== 11) {
    throw new RangeError('ISBN is Invalid!!');
  }

  return (
    <div>
      <h1>Books: {params.isbn}</h1>
      <p>
        <Link to=".." state={{ color: "blue"}}>Books</Link>
      </p>
    </div>
  );
};

export default Detail;