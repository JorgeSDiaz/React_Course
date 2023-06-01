const genericStyle = {
  backgroundColor: "black",
  color: "white",
};

export function Generic() {
  function sum(a, b) {
    return a + b;
  }

  return <h1 style={genericStyle}>Sum: {sum(10, 25)}</h1>;
}

function UserCard({ name, age, isMale }) {
  return (
    <div style={{background: "blue", color: "white", padding: "20px"}}>
      <h1 style={{fontFamily: "Times New Roman"}}>
        Name: {name} - {isMale ? "👦" : "👧"}
      </h1>
      <h2>Age: {age}</h2>
    </div>
  );
}

export default UserCard;
