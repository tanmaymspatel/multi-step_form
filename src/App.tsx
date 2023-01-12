import MultiStepForm from "./components/MultiStepForm";
import MultiFormContextProvider from "./contexts/MultiFormContextProvider";

function App() {
  return (
    <div className="h-100 d-flex align-items-center justify-content-center bg-magnolia shadow-sm">
      <MultiFormContextProvider>
        <MultiStepForm />
      </MultiFormContextProvider>
    </div>
  );
}

export default App;
