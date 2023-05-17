// eslint-disable-next-line react/prop-types
export default function Container({ children }) {
  return (
    <div className="lg:container md:px-32 lg:px-0 lg:mx-auto">{children}</div>
  );
}
