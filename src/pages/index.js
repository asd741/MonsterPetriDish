import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Banner from '../components/banner'
const IndexPage = () => (
  <Layout>
    <Banner/>
    <Link to="/monster/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
