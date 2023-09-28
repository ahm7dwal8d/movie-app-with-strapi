import { Link } from "react-router-dom";

export default function ActorsCard({ data }) {
  return (
    <div className="mt-6 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
      {data?.map((el) => {
        return (
          <Link
            to={`/Actors/${el.id}`}
            className="text-white hover:text-white mt-4 me-2"
            key={el.id}
          >
            <img
              src={`http://localhost:1337${el?.attributes?.actor_image?.data?.attributes?.url}`}
              alt={el?.attributes?.actor_name}
              loading="lazy"
              className="w-full rounded"
            />
            <h4 className="mt-2 text-center text-black dark:text-white">
              {el?.attributes?.actor_name}
            </h4>
          </Link>
        );
      })}
    </div>
  );
}
