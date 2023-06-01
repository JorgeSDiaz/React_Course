export function Product({ producName, price, description }) {
  return (
    <>
      <h1>{producName}</h1>
      <p>{price}</p>
      <p>{description}</p>
    </>
  );
}
