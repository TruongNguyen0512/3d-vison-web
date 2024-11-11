import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function ServiceSection() {
  const strategyItems = [
    { title: "Current Analysis", href: "#analysis" },
    { title: "Supporter Understanding", href: "#understanding" },
    { title: "Goal Setting", href: "#goals" },
    { title: "Communication Design", href: "#communication" },
    { title: "Action Plan Development", href: "#action" },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-2xl font-bold">READYFOR Fundraising Service</h2>
        <p className="max-w-3xl text-muted-foreground">
          "READYFOR Fundraising Service" is a customized solution provided by experienced fundraisers for organizations and initiatives that require continuous funding. Based on contemporary fundraising theories, we offer our uniquely developed "Strategy Design" and "Implementation System" tailored to meet your specific needs.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Left side - Curved line illustration */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0">
              <svg
                viewBox="0 0 400 400"
                className="h-full w-full"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  d="M 50,350 C 150,350 250,50 350,50"
                  className="stroke-gray-200"
                />
              </svg>
            </div>
            <div className="relative z-10 flex h-full items-center justify-center">
              <h3 className="text-4xl font-bold">Strategy Design</h3>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <Link
              to="#strategy"
              className="group inline-flex items-center space-x-2 text-lg font-medium hover:text-primary"
            >
              <span>Go to Fundraising Strategy Design</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <div className="grid gap-4">
              {strategyItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="group flex items-center justify-between bg-gray-900 px-6 py-4 text-white transition-colors hover:bg-gray-800"
                >
                  <span>{item.title}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}