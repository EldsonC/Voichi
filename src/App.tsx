import { Controlls } from "./components/controlls"
import { HeaderComponent } from "./components/header"
import { Voice } from "./style"

function App() {
  return (
    <Voice>
      <HeaderComponent/>
      <div className="void_voices">
        <h1>Discover a new <span>Friend</span></h1>
        <p>To get started click on microphone button bellow.</p>
      </div>
      <Controlls/>
    </Voice>
  )
}

export default App
