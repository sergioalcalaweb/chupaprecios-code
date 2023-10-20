"use client"
import { useCart } from "@/hooks/useCart"
import Image from "next/image"

//NavBar component to add in layout
const NavBar = () => {
  const { count } = useCart()

  return (
    <nav className="bg-white border-gray-200 p-5 sticky top-0">
      <div className="w-full flex justify-between">
        <Image src="/logo-ch.png" alt="logo" width={150} height={100} />
        <button
          type="button"
          className="inline-flex items-center font-medium text-center text-red-500  focus:outline-none"
        >
          <svg
            className="w-8 h-8 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 21"
          >
            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
          </svg>
          {count > 0 && (
            <span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-red-800 bg-red-200 rounded-full">
              {count}
            </span>
          )}
        </button>
      </div>
    </nav>
  )
}

export default NavBar
