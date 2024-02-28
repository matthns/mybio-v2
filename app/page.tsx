import Welcome from "./(pages)/Welcome/Welcome.page";
import { Header } from "./components/Header/Header";
import { LayoutRoot } from "./components/LayoutRoot";

export default function Home() {
  return (
    <main>
      <LayoutRoot>
        <Header />
        <Welcome />
      </LayoutRoot>
    </main>
  );
}
