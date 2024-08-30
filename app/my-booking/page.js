import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MyBooking() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 md:py-16 lg:py-20 px-4 md:px-6">
      <main className="flex-1 py-8 px-6 md:px-10 lg:px-16">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Current Flight</h2>
          <Link
            href={{
              pathname: "/booking-detail",
              query: { book_no: "1245" },
            }}
          >
            <div className="bg-muted rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center gap-4">
                {/* <a>Go to Booking Detail</a> */}
                <div className="flex flex-col">
                  <div className="text-lg font-medium">San Francisco (SFO)</div>
                  <div className="text-muted-foreground">Departure</div>
                </div>

                <PlaneIcon className="w-8 h-8" />
                <div className="flex flex-col">
                  <div className="text-lg font-medium">New York (JFK)</div>
                  <div className="text-muted-foreground">Arrival</div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-lg font-medium">Flight #AB123</div>
                <div className="text-muted-foreground">
                  June 15, 2023 - 8:30 AM
                </div>
              </div>
            </div>
          </Link>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">Your Flights</h2>
          <div className="grid gap-4">
            <div className="bg-muted rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <div className="text-lg font-medium">San Francisco (SFO)</div>
                  <div className="text-muted-foreground">Departure</div>
                </div>
                <PlaneIcon className="w-8 h-8" />
                <div className="flex flex-col">
                  <div className="text-lg font-medium">New York (JFK)</div>
                  <div className="text-muted-foreground">Arrival</div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-lg font-medium">Flight #AB123</div>
                <div className="text-muted-foreground">
                  June 15, 2023 - 8:30 AM
                </div>
                <Button variant="outline" size="sm" className="mt-2">
                  View Details
                </Button>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <div className="text-lg font-medium">New York (JFK)</div>
                  <div className="text-muted-foreground">Departure</div>
                </div>
                <PlaneIcon className="w-8 h-8" />
                <div className="flex flex-col">
                  <div className="text-lg font-medium">San Francisco (SFO)</div>
                  <div className="text-muted-foreground">Arrival</div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-lg font-medium">Flight #CD456</div>
                <div className="text-muted-foreground">
                  July 1, 2023 - 5:45 PM
                </div>
                <Button variant="outline" size="sm" className="mt-2">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function PlaneIcon(props) {
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
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}
