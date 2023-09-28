export default function CustomCategory({ data }) {
  return (
    <>
      {data?.data?.attributes?.movie_category?.map((el) => {
        return (
          <div className=" me-4 border p-1 rounded my-3 inline-block opacity-100 hover:opacity-60 transition-all text-black dark:text-white dark:opacity-60 dark:hover:opacity-100">
            {el}
          </div>
        );
      })}
    </>
  );
}
