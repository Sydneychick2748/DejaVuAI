
import './App.css'
import { Button } from "@/components/ui/button"
import {Slider} from "@/components/ui/slider" // Adjust path based on your project structure
import { HStack } from "@chakra-ui/react"

function App() {
  return (
    <>
      <HStack spacing={4} padding={4}>
       
        <Button>Click me</Button>
      </HStack>

      <h1>Welcome to DejaVuAI!</h1>
      <p>Start building your Vite-powered React app here.</p>
      <p>Made my branch</p>

      {/* Include the Slider Component */}
      <div style={{ marginTop: "20px" }}>
        <Slider
          defaultValue={[10]}
          marks={[
            { value: 0, label: "Low" },
            { value: 50, label: "Medium" },
            { value: 100, label: "High" },
          ]}
          label="Select Range"
          showValue={true}
        />
      </div>
    </>
  );
}


export default App;