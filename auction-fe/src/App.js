import Input from "./shared/FormElement/Input";

function App() {
  return (
    <div className="App">
      <Input
        required
        variant="outlined"
        id="outlined-required"
        htmlFor="outlined-required"
        label="Username"
        type="text"
        fullWidth
      />
    </div>
  );
}

export default App;
