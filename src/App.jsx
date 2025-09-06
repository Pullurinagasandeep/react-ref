import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card.jsx";
export default function App() {
  // we can only return only one element
  // card data is an array of objects
  const cardData = [
    {
      cardTitle: "sandeep",
      cardText: "this is sandeep card",
      imgsrc: "OIP.jpg",
    },
    {
      cardTitle: "ravi",
      cardText: "this is ravi card",
      imgsrc: "OIP1.jpg",
    },
    {
      cardTitle: "suresh",
      cardText: "this is suresh card",
      imgsrc: "OIP2.jpg",
    },
    {
      cardTitle: "sai",
      cardText: "this is sai card",
      imgsrc: "OIP.jpg",
    },
    {
      cardTitle: "maniiii",
      cardText: "this is maniii card",
      imgsrc: "OIP1.jpg",
    },
  ];

  const CardsElement = cardData.map((card) => {
    return <Card data={card} />;
  });
  // CardsElement --> [<Card/>,<Card/>,<Card/>,<Card/>,........]

  return (
    // <></> fragment
    <>
      <Header />

      <h1>portfolio</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum optio ab
        vero, eveniet necessitatibus delectus atque inventore enim nisi eius!
      </p>
      <div className="cards-container">{CardsElement}</div>
      <Footer />
    </>
  );
}
// App() --> <App/>
// App(parameters,pratmeter1) --- <App prarameter="value" prameter1="value1"/>
