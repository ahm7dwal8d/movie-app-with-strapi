import { Link } from "react-router-dom";

export default function SliderHead({ name, length, link }) {
  return (
    <div className="py-8 flex justify-between items-center container m-auto">
      <div className="info">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          {name}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">{length}</p>
      </div>
      <Link to={`/Category/${name}`}>View All {name} Movies</Link>
    </div>
  );
}
