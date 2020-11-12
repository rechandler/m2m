import { render } from '@redwoodjs/testing'

import AppBar from './AppBar'

describe('AppBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AppBar />)
    }).not.toThrow()
  })
})
