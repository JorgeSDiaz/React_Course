export const Post = () => {
  return (
    <div>
      <button
        onClick={() => {
          fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => console.log(data));
        }}
      >
        Posts!
      </button>
      <ul>
        <li>Post tittle 1</li>
        <li>Post tittle 2</li>
      </ul>
    </div>
  );
};
