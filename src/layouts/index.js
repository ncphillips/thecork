import React from 'react'
import styled from 'styled-components'

export default ({ children }) => <Layout>{children()}</Layout>

const Layout = styled.div`
  background: red;
`
