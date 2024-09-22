import "./App.css";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";

function App() {
  return (
    <main>
      <WelcomeSection />
      <div>
        <iframe
          src="https://apple-ferrum-store.vercel.app/"
          width={1200}
          height={700}
          frameBorder={1}
          style={{ borderRadius: 10 }}
        >
          <h1>Hello</h1>
        </iframe>
      </div>
    </main>
  );
}

export default App;
