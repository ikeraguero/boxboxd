import './App.css'
import { AppLayout } from './components/layout/AppLayout'
import { HeroSection } from '@/components/HeroSection'

function App() {
  return <AppLayout>
    <HeroSection />
     {/* <Button onClick={() => alert("a")}>Get started - it's free!</Button> */}
  </AppLayout>
}

export default App
