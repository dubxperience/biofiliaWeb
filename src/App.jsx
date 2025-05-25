import { Routes, Route, useLocation } from "react-router";
import Header from "./components/Header/Header";
import Landing from "./pages/Landing";
import ThisOrThat from "./pages/Web/ThisOrThat/ThisOrThat";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";
import Onboarding from "./components/Onboarding/Onboarding";
import MapGame from "./pages/Web/MapGame/MapGame";

// Importación de las fases
import Fase1 from "./pages/Web/Timeline/Fase1/Fase1";
import Fase2 from "./pages/Web/Timeline/Fase2/Fase2";
import Fase3 from "./pages/Web/Timeline/Fase3/Fase3";
import Fase4 from "./pages/Web/Timeline/Fase4/Fase4";
import Fase5 from "./pages/Web/Timeline/Fase5/Fase5";
import Fase6 from "./pages/Web/Timeline/Fase6/Fase6";
import Fase7 from "./pages/Web/Timeline/Fase7/Fase7";
import "./App.css";

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname.includes("/web");

  return (
    <>
      {!hideNavbar && <Header />}
      <main>
        <Routes>
          <Route index path="/" element={<Landing />} />
          <Route path="web/thisorthat" element={<ThisOrThat />} />
          <Route path="web/mapgame" element={<MapGame />} />
          <Route path="web/welcome" element={<WelcomeScreen />} />
          <Route path="web/onboarding" element={<Onboarding />} />
          <Route path="web/fases/fase1" element={<Fase1 />} />
          <Route path="web/fases/fase2" element={<Fase2 />} />
          <Route path="web/fases/fase3" element={<Fase3 />} />
          <Route path="web/fases/fase4" element={<Fase4 />} />
          <Route path="web/fases/fase5" element={<Fase5 />} />
          <Route path="web/fases/fase6" element={<Fase6 />} />
          <Route path="web/fases/fase7" element={<Fase7 />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
