import "./home.styles.scss";
const Home = () => {
  return (
    <div id="home">
      <h1 className="heading">Join NewsLetter</h1>
      <button onClick={() => console.log("join news letter")}>Join Now</button>
    </div>
  );
};

export default Home;
