

function App() {
  return (
    <div className="page">
      <input type="text" />
      <input type="text" className="error" />
      <h1 className="title">Shop</h1>
      <button className="btn">Button</button>
      <button className="btn" disabled>Button</button>
      <button className="btn dark">Dark</button>
      <button className="btn danger">Danger</button>
      <button className="btn primary">Primary</button>
      <button className="btn accent">Accent</button>
      <button className="btn success outline">Success</button>
      <button className="btn success outline">Outline</button>
      <button className="btn primary">Base</button>
      <button className="btn primary lg">Large</button>
    </div>
  )
}

export default App
