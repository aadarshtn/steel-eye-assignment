import List from "./List";

function App() {

  const itemsArray = [
    { 
      text: "Messi"
    },
    { 
      text: "Neymar"
    },
    { 
      text: "Ronaldo"
    },
  ];

  return (
    <List items={itemsArray}/>
  );
}

export default App;
