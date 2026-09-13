import { Suspense, useState } from "react"
import Nav from "./components/Nav"
import Banner from "./components/Banner"
import Technology from "./components/Technology/Technology"
import type { TechnologyType } from "./type"
import Footer from "./components/Footer"


function App() {
  const technologyFetch = async (): Promise<TechnologyType[]> => {
    const res = await fetch("/data.json");
    const data = res.json();
    return data;
  }

  const [technologyPromise] = useState(() => technologyFetch());
  return (
    <>
      <Nav />
      <Banner />
  <Suspense fallback={<p>Loading....</p>}>
        <Technology technologyPromise={technologyPromise}/>
      </Suspense>
      <Footer />
    </>
  )
}

export default App