import { Link } from "react-router-dom";

export default function CategoryCard({ data }) {
  console.log(data);
  return (
    <Link
      to={`/Category/${data?.attributes?.name}`}
      className="mt-4 text-white hover:text-white"
    >
      <img
        src={`http://localhost:1337${data?.attributes?.image?.data?.attributes?.url}`}
        alt={data?.attributes?.name}
        className="w-11/12 rounded"
        loading="lazy"
      />
      <h4 className="text-center mt-3 text-xl text-black dark:text-white">
        {data?.attributes?.name}
      </h4>
    </Link>
  );
}
