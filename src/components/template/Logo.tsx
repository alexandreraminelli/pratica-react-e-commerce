import { IconBrandAmazon } from "@tabler/icons-react"
import Link from "next/link"

/** Componente da logo do site com um link pra página inicial. */
export default function Logo() {
  return (
    <Link href="/">
      <div
        className="
      flex flex-col items-center 
      mt-2"
      >
        {/* Texto "A Z" */}
        <div className="text-xl leading-4">A Z</div>
        {/* Ícone */}
        <IconBrandAmazon size={40} stroke={1} className="-mt-2" />
      </div>
    </Link>
  )
}
