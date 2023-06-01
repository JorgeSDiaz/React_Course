export function Generic() {
  function sum(a, b) {
    return a + b;
  }

  return <h1>{sum(10, 25)}</h1>;
}

function UserCard({ name, age, isMale }) {
  return (
    <div>
      <h1>
        Name: {name} - {isMale ? "👦" : "👧"}
      </h1>
      <h2>Age: {age}</h2>
    </div>
  );
}

export default UserCard;
