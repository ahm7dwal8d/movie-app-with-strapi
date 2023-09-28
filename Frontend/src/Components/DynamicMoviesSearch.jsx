import { Link } from "react-router-dom";

export default function DynamicMoviesSearch({ data }) {
  return (
    <Link
      to={`/Search/${data?.id}`}
      className="mt-4 text-white hover:text-white"
    >
      <img
        src={`http://localhost:1337${data?.attributes?.movie_bg?.data?.attributes.url}`}
        alt={data?.attributes?.movie_title}
        loading="lazy"
        className="h-[250px] w-[96%] rounded"
      />
      <h4 className="mt-2 text-lg text-black dark:text-white">
        {data?.attributes?.movie_title}
      </h4>
      {data?.attributes?.movie_category?.map((cate) => {
        return (
          <span className="me-2 border p-1 mt-2 inline-block rounded opacity-50 hover:opacity-100 transition-all text-black dark:text-white">
            {cate}
          </span>
        );
      })}
    </Link>
  );
}
