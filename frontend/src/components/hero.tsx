import { Button } from "./ui/button"

export default function Hero() {
  return (
    <section className="relative mt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-pink-100/50 to-transparent" />
      <div className="container relative mx-auto px-4 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-medium">READYFOR Fundraising Service</h2>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                There are proven theories
                <br />
                in fundraising.
              </h1>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" size="lg">
                Request Information
              </Button>
              <Button size="lg">Consult with Us</Button>
            </div>
          </div>
          <div className="space-y-6 text-muted-foreground">
            <p>
              Fundraising is about putting your value into words.
              <br />
              Fundraising is about deeply understanding those who support you.
            </p>
            <p>To achieve sufficient funding to move towards your desired future.</p>
            <p>
              READYFOR has nurtured the concept of "crowdfunding" from its early days, staying ahead of societal changes.
            </p>
            <p>
              Our fundraising achievements come from facing various social challenges head-on and listening carefully to countless donors' true voices.
            </p>
            <p>Our professionals will guide you through strategy and implementation to create your "future".</p>
          </div>
        </div>
      </div>
    </section>
  )
}