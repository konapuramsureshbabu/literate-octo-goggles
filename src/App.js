import {Heading, CustomButton} from './StyledComponent'
import './App.css'

const App = () => (
  <>
    <Heading className="heading">Hello World</Heading>
    <CustomButton type="button">Click</CustomButton>
    <CustomButton type="button" outline>
      Click
    </CustomButton>
  </>
)

export default App
