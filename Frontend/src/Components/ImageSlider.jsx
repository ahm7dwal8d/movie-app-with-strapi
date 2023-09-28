export default function ImageSlider({ data }) {
  return (
    <div className="mt-4">
      <img
        src={`http://localhost:1337${data?.attributes?.url}`}
        alt={data?.attributes?.title}
        loading="lazy"
        className="w-full"
      />
    </div>
  );
}
