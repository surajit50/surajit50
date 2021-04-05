import React from "react";
import Header from "./Component/Header/Index";
import "./App.css";
import SliderImage from "./Component/SliderImage";
import Footer from "./Component/Footer";
import SideMenu from "./Component/SideMenu";
import SlidingNews from "./Component/SlidingNews";
import Menu from "./Component/Menu";
import ProdhanDesk from "./Component/ProdhanDesk";
import Card from "./Component/Card";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <div className="app__main__content">
        <SliderImage />
        <Menu />
        <SlidingNews />
      </div>
      {/* main Content */}
      <div className="app__main_info__content">
        <SideMenu /> <ProdhanDesk /> <Card />
      </div>
      {/*Footer*/}
      <Footer />
    </div>
  );
}

export default App;
