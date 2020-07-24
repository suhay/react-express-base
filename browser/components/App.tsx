import * as React from "react"

import '../style.css'

export interface PageProps {
  title: string
}

export const App = (props: PageProps) => (
  <h1>
    {props.title}
  </h1>
);