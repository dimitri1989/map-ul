import Ul from './components/Ul';
import './App.css';

function App() {
  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
  return (
    <div className="App">
     {
      products.map((product=>{
       return <Ul key={product.id} product={product} />
      }))
     }
    </div>
  );
}

export default App;
