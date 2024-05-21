import "./App.css";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";

const generateColumns = (num) => {
  const columns = [];
  for (let i = 0; i < num; i++) {
    columns.push(<div className="column" key={i}></div>);
  }
  return columns;
};

function App() {
  const columns = generateColumns(12); // Adjust the number of columns as needed

  return (
    <>
      <NavBar />

      <div className="container">
        <HeroSection />
        {columns}
      </div>
    </>
  );
}

export default App;
