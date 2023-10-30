import { useLoaderData } from "react-router-dom";

const Index = () => {
  const data = useLoaderData() as any

  return (
    <div>
      <p>latitude: {data.latitude}</p>
      <p>longitude: {data?.longitude}</p>
      <p>generationtime_ms: {data?.generationtime_ms}</p>
      <p>utc_offset_seconds: {data?.utc_offset_seconds}</p>
      <p>timezone: {data?.timezone}</p>
      <p>timezone_abbreviation: {data?.timezone_abbreviation}</p>
      <p>elevation: {data?.elevation}</p>
      <hr />
      <ol>
        {
          data?.hourly?.time?.map((value: string, index: number): JSX.Element => {
            return (
              <li key={index}>{value}</li>
            )
          })
        }
      </ol>
    </div>
  );
};

export default Index;