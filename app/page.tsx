import About from "./(pages)/About/About.page";
import Welcome from "./(pages)/Welcome/Welcome.page";
import { Header } from "./components/Header/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Welcome />
      <About />
    </main>
  );
}
