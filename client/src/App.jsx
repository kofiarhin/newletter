import { useEffect, useState } from "react";
import { baseUrl } from "./constants/constants";
const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const test = async () => {
      const url = import.meta.env.DEV ? "/api/auth" : `${baseUrl}/api/auth`;
      const res = await fetch(url);
      const result = await res.json();
      setData(result?.message);
    };

    test();
  }, []);
  return (
    <div>
      <h1 className="heading center"> {data && data} </h1>
    </div>
  );
};

export default App;
