"use client";
import { Button } from "@/components/ui/button";

export default function BookingDetail({ searchParams }) {
  const { book_no } = searchParams;
  console.log("🚀  book_no:", book_no);
  return (
    <div className="w-full max-w-6xl mx-auto md:py-16 lg:py-16 px-4 md:px-6">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <PlaneIcon className="w-8 h-8" />
          <div>
            <div className="text-lg font-medium">Flight #AB123</div>
            <div className="text-sm">10:30 AM - 5:45 PM</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm text-muted-foreground">
            Operated by Acme Airlines
          </div>
          <Button variant="outline" size="sm">
            Manage Booking
          </Button>
        </div>
      </header>
      <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10">
        <div className="grid gap-6">
          <div className="grid gap-2">
            <div className="text-sm text-muted-foreground">Departure</div>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-medium">SFO</div>
              <div className="text-sm text-muted-foreground">San Francisco</div>
            </div>
          </div>
          <div className="grid gap-2">
            <div className="text-sm text-muted-foreground">Arrival</div>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-medium">JFK</div>
              <div className="text-sm text-muted-foreground">New York</div>
            </div>
          </div>
          <div className="grid gap-2">
            <div className="text-sm text-muted-foreground">Flight Duration</div>
            <div>7h 15m</div>
          </div>
          <div className="grid gap-2">
            <div className="text-sm text-muted-foreground">Seat</div>
            <div>12A</div>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <div className="text-sm text-muted-foreground">Baggage</div>
            <div>
              1 Carry-on Bag, 1 Personal Item
              <Button variant="outline" size="sm" className="ml-4">
                Add Baggage
              </Button>
            </div>
          </div>
          <div className="grid gap-2">
            <div className="text-sm text-muted-foreground">Meals</div>
            <div>
              Complimentary Snack and Beverage
              <Button variant="outline" size="sm" className="ml-4">
                Upgrade Meal
              </Button>
            </div>
          </div>
          <div className="grid gap-2">
            <div className="text-sm text-muted-foreground">Extras</div>
            <div>
              In-Flight WiFi, Inflight Entertainment
              <Button variant="outline" size="sm" className="ml-4">
                Add Extras
              </Button>
            </div>
          </div>
        </div>
      </div>
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
