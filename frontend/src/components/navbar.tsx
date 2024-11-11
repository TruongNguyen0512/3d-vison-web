import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex flex-col">
          <span className="text-xl font-bold leading-none">READYFOR</span>
          <span className="text-xs">FUNDRAISING SERVICE</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 ml-auto md:flex">
          <Link to="/service" className="text-sm hover:text-primary">
            Service
          </Link>
          <Link to="/case" className="text-sm hover:text-primary">
            Case
          </Link>
          <Link to="/news" className="text-sm hover:text-primary">
            News
          </Link>
          <Link to="/member" className="text-sm hover:text-primary">
            Member
          </Link>
        </div>

        <div className="hidden space-x-4 md:flex">
          <Button variant="outline">Request Information</Button>
          <Button>Consult with Us</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="sr-only">Menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-b bg-white md:hidden">
          <div className="container space-y-4 px-4 py-4">
            <div className="flex flex-col space-y-3">
              <Link to="/service" className="text-sm hover:text-primary">
                Service
              </Link>
              <Link to="/case" className="text-sm hover:text-primary">
                Case
              </Link>
              <Link to="/news" className="text-sm hover:text-primary">
                News
              </Link>
              <Link to="/member" className="text-sm hover:text-primary">
                Member
              </Link>
            </div>
            <div className="flex flex-col space-y-2">
              <Button variant="outline" className="w-full">
                Request Information
              </Button>
              <Button className="w-full">Consult with Us</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}