import { Link } from "react-router-dom"
export default function Error() {
    return (
      <>
          <div>
              <h1>ERRO-404</h1>
              <h1><Link to="/">Voltar para página inicial</Link></h1>
          </div>
      </>
    )
  }