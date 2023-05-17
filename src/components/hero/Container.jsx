// eslint-disable-next-line react/prop-types
export default function Container({ children }) {
  return (
    <div className="px-10 lg:container lg:px-32 lg:mx-auto">{children}</div>
  );
}
