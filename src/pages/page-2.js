import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Monster from '../components/monster'

const SecondPage = () => (
  <Layout>
    <Monster/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
