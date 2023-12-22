import "./scss/app.scss";
import Header from "./components/header";
import Categories from "./components/categories";
import Sort from "./components/sort";
import PizzaBlock from "./components/pizzaBlock";



function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock title='Мексиканская' price='500'/>
            <PizzaBlock title = 'Good' price='dohulion'/>
            <PizzaBlock/>
            <PizzaBlock/>
            <PizzaBlock/>
            <PizzaBlock/>
            <PizzaBlock/>
            <PizzaBlock/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
