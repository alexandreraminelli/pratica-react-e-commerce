import Logo from "./Logo"

/** Componente do cabeçalho do site. */
export default function Cabecalho() {
  return (
    <header
      className="
    flex justify-between items-center
    bg-zinc-800 h-20 px-10
    "
    >
      {/* Logo (link pra tela inicial) */}
      <Logo />

      {/* Botão de carrinho */}
    </header>
  )
}