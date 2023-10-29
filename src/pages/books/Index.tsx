import { Link, useSearchParams } from "react-router-dom";

const Index = () => {
  // クエリパラメータ
  const [params, setParams] = useSearchParams({ isbn: '9889-3239-8232' })

  console.log(params.get('isbn'));

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {
          [...Array(5)].map((_, i) => {
            const str = Math.random().toString(32).substring(2)

            return (
              <li key={str}>
                <Link to={str}>{`${i + 1}: ${str}`}</Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default Index;