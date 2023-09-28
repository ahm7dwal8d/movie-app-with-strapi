export default function MovieCard({ data }) {
  return (
    <div className="mt-4">
      <img
        className="w-full h-full rounded"
        src={`http://localhost:1337${data?.attributes?.movie_bg?.data?.attributes?.url}`}
        alt={data?.attributes?.movie_title}
        loading="lazy"
      />
      <h4 className="mt-3 text-center text-black dark:text-white">
        {data?.attributes?.movie_title}
      </h4>
      {data?.year && (
        <span className="year text-black dark:text-white">{data?.year}</span>
      )}
      {data?.titleType && (
        <span className="type capitalize text-black dark:text-white">
          {data?.titleType}
        </span>
      )}
    </div>
  );
}
