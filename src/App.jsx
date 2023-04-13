import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Card } from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((data) => <Card key={data.id} data={data} />);
  return (
    <div className="App">
      <Header />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
