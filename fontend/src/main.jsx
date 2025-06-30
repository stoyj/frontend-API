//➡️ Това е "StrictMode", която ни помага да хващаме грешки. Не пречи на нищо, просто вика:
//👉 Хей, тук нещо не е както трябва!.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//➡️ Това създава коренчето на приложението – казва:
//👉 „Покажи React приложението в HTML документа“.
import { BrowserRouter } from "react-router-dom";
//➡️ Това ни дава пътища/страници в приложението, като:
import "./css/index.css";
//➡️ Зарежда основните стилове – за да изглежда приложението красиво.
import App from "./App.jsx";
//➡️ Това внася главното приложение, което вече си видял – с меню, страници и всичко вътре.

//➡️ Това търси <div id="root"></div> в HTML файла и казва:
//Покажи всичко вътре в този елемент!.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
