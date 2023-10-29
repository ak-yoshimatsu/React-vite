import { Link, isRouteErrorResponse } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const InvalidParams = () => {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    console.log(error);
  } else if (error instanceof Error) {
    return (
      <div>
        <div style={{ color: 'red' }}>
          {error.message}
        </div>
        <p>{error.name}, {error.stack}</p>
        <p><Link to='..'>戻る</Link></p>
      </div>
    );
  } else {
    console.log(error);
  }

};

export default InvalidParams;