import { Outlet } from "react-router-dom"
import NavBar from "./components/navbar/NavBar"
import { Container } from "./App-style"

function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
    </div>
  )
}

export default App
