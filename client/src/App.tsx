import { MovieProvider } from "./context/MovieContext";
import RouterPaths from "./routes/RouterPaths.routes";


function App() {
  

  return (
    <MovieProvider>
      <RouterPaths/>
    </MovieProvider>
  )
}

export default App
