const Home = () => {
  const handleClick = e => {
    console.log("Hello there!", e);
  };

  const handleClickToo = (name, e) => {
    console.log("Hello " + name, e.target);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      {/* No () behdind the funtion name else is runs immediately or use an arrow function */}
      <button onClick={handleClick}>Click here</button>
      <button
        onClick={e => {
          handleClickToo("Yoshi", e);
        }}
      >
        Click here too
      </button>
    </div>
  );
};

export default Home;
