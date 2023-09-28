import { useParams } from "react-router-dom";
import DynamicMovies from "../Components/DynamicMovies";

export default function DynamicRoutes() {
  const { id } = useParams();
  return (
    <div className="">
      <DynamicMovies id={id} />
    </div>
  );
}
