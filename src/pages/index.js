import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import '../styles/home.module.css'


// markup
const IndexPage = () => {


  return (
    <Layout>
      <main >
        <header>
          <h1>Design</h1>
          <h2>Develop & Deploy</h2>
          <h3>MERN stack Developer based in Cox's Bazar</h3>
          <Link to="/projects" className="btn">My Portfolio Projects</Link>
        </header>
      </main>
    </Layout>
  )
}

export default IndexPage
