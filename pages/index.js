import React from "react"
import Link from 'next/link'

export default () => (
  <div>
    <h1>Hello World!</h1>
    <Link href='/about'>
      <a>next page</a>
    </Link>
  </div>
)
