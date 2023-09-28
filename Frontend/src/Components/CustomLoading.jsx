import { useState, useEffect } from "react";
import Loading from "./loading";

export default function CustomLoading() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 3000);
  }, []);
  if (load === false) {
    return <Loading />;
  }
}
