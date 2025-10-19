import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss } from './styles'
import Home from './Pagina/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
        <RouterProvider router={rotas} />
      </div>
    </>
  )
}

export default App
