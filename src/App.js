import React from "react";
import { HashRouter, Route } from "react-router-dom";
import './App.css';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from "./components/Navigation";
import Detatil from "./routes/Detail";

//설치 파일: 
//npm install prop-types
//npm install axios
//npm install react-router-dom

//시작 메뉴
//npm start

//https://yts.mx/api/v2/list_movies.json
//https://yts-proxy.now.sh/list_movies.json

// github로 올리는 명령어
// git add .
// git commit -m "변경 사유"
// git push origin master

// github 배포하기
// npm run deploy


function App() {

  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} /> 
      <Route path="/movie-detail" component={Detatil} /> 
      
      
    </HashRouter>
  );
}

export default App;
