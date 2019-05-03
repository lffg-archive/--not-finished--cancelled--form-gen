import React from 'react'
import Header from './Header'

interface Props {
  children: React.ReactNode
}

export default function Layout(props: Props) {
  return (
    <>
      <Header />
      {props.children}
    </>
  )
}
