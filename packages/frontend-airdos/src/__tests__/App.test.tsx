import React from "react"
import { render, screen } from "@testing-library/react"

const MockComponent = () => <div>Hello</div>

describe("Test App", () => {
  it("Are Tests Working", () => {
    render(<MockComponent />)
    expect(screen.getByText("Hello")).toBeDefined()
  })
})
