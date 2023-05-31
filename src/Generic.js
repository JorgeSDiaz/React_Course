export function Generic() {
  function sum(a, b) {
    return a + b;
  }

  return (
    <h1>
      {sum(10, 25)}
    </h1>
  );
}

function UserCard() {
  const user = {
    name: "Jorge",
    age: 21,
    isMale: true,
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <h3>{user.isMale ? "👦" : "👧"}</h3>
    </div>
  );
}

export default UserCard;
