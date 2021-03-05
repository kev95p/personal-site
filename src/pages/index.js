import React from "react"
import Header from '../components/header'
import Profile from '../components/profile'
import { theme } from '../styles/theme'
import { ThemeProvider } from 'styled-components'

export default function Home(props) {
  return (
  <ThemeProvider theme={theme}>
    <Header {...props}></Header>
    <Profile></Profile>
  </ThemeProvider>
  )
}
