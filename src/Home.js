import { useState } from "react";

const Home = () => {
  // Instead of regular variable we need to use useState to change
  // the variable reactively.
  // const [variable name, function that changes the value] = useState(Starting value);
  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(20);

  const handleClick = () => {
    setName("Luigi");
    setAge(30);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old.
      </p>
      {/* No () behdind the funtion name else is runs immediately or use an arrow function */}
      <button onClick={handleClick}>Click here</button>
    </div>
  );
};

export default Home;
