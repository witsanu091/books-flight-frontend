import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function About() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('/placeholder.svg?height=600&width=1920')] bg-cover bg-center">
          <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Discover the World with Fly Away
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Find the best flights, hotels, and travel deals with our
                easy-to-use platform.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Link href="/search-flight">
                <Button type="submit">Search Flights</Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Why Choose Fly Away?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a seamless travel booking experience with unbeatable
                  prices and top-notch customer service.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Easy Booking
                </div>
                <h3 className="text-xl font-bold">Book Flights in Seconds</h3>
                <p className="text-muted-foreground">
                  Our intuitive search and booking process makes it easy to find
                  the perfect flight for your travel needs.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Price Comparison
                </div>
                <h3 className="text-xl font-bold">
                  Compare Prices Across Airlines
                </h3>
                <p className="text-muted-foreground">
                  We scour the web to find the best deals, so you can be
                  confident you're getting the most value for your money.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Customer Reviews
                </div>
                <h3 className="text-xl font-bold">Trusted by Millions</h3>
                <p className="text-muted-foreground">
                  Our customers love our service, and we have the reviews to
                  prove it. Book with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Explore the World with Fly Away
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From bustling cities to serene beaches, we'll help you find the
                perfect destination for your next adventure.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                href="/search-flight"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Book a Flight
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Trusted by Millions
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our customers love our service, and we have the reviews to prove
                it. Book with confidence.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center gap-4 bg-background p-4 rounded-lg">
                <Avatar className="border w-11 h-11">
                  <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="grid">
                  <div className="font-semibold">Sarah</div>
                  <div className="text-sm text-muted-foreground">
                    New York, NY
                  </div>
                </div>
                <div className="flex items-center gap-px ml-auto">
                  <StarIcon className="w-2.5 h-2.5 fill-primary" />
                  <StarIcon className="w-2.5 h-2.5 fill-primary" />
                  <StarIcon className="w-2.5 h-2.5 fill-primary" />
                  <StarIcon className="w-2.5 h-2.5 fill-primary" />
                  <StarIcon className="w-2.5 h-2.5" />
                </div>
              </div>
              <div className="flex items-center gap-4 bg-background p-4 rounded-lg">
                <Avatar className="border w-11 h-11">
                  <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="grid">
                  <div className="font-semibold">Michael</div>
                  <div className="text-sm text-muted-foreground">
                    Los Angeles, CA
                  </div>
                </div>
                <div className="flex items-center gap-px ml-auto">
                  <StarIcon className="w-2.5 h-2.5 fill-primary" />
                  <StarIcon className="w-2.5 h-2.5 fill-primary" />
                  <StarIcon className="w-2.5 h-2.5 fill-primary" />
                  <StarIcon className="w-2.5 h-2.5 fill-primary" />
                  <StarIcon className="w-2.5 h-2.5" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
