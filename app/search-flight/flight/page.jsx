"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function FlightSearching({ searchParams }) {
  const [searchFlightDeparture, setSearchFlightDeparture] = useState({});
  const [searchFlightArrival, setSearchFlightArrival] = useState({});
  const { search } = searchParams;
  console.log("🚀  search:", search);
  console.log("🚀  searchFlightDeparture:", searchFlightDeparture);
  console.log("🚀  searchFlightArrival:", searchFlightArrival);

  useEffect(() => {
    if (search) {
      const data = JSON.parse(search);
      setSearchFlightDeparture(data.searchFlightDeparture);
      setSearchFlightArrival(data.searchFlightArrival);
    }
  }, [search]);

  return (
    <div className="mt-16">
      <div className="bg-primary text-primary-foreground py-4 px-6">
        <div className=" mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <PlaneIcon className="w-6 h-6" />
            <div className="grid gap-1">
              <div className="text-lg font-medium">
                {searchFlightDeparture.airport_take_off_name} {"=>"}{" "}
                {searchFlightDeparture.airport_landing_name}
              </div>
              <div className="text-sm text-primary-foreground/80">
                Aug 15, 2024
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto py-12 md:py-16 lg:py-20 px-4 md:px-6">
        <div className="grid gap-6">
          <Card>
            <CardContent className="grid gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg"
                    alt="United Airlines"
                    width={32}
                    height={32}
                    className="rounded-full"
                    style={{ aspectRatio: "32/32", objectFit: "cover" }}
                  />
                  <div className="font-medium">United Airlines</div>
                  <div className="text-sm text-muted-foreground">UA 123</div>
                </div>
                <div className="text-2xl font-bold">$399</div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">Depart</div>
                  <div className="flex items-center gap-2">
                    <div className="text-xl font-medium">8:00 AM</div>
                    <div className="text-sm text-muted-foreground">SFO</div>
                  </div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">Arrive</div>
                  <div className="flex items-center gap-2">
                    <div className="text-xl font-medium">3:15 PM</div>
                    <div className="text-sm text-muted-foreground">JFK</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Duration: 7h 15m
                </div>
                <Button variant="outline" size="sm">
                  Select
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg"
                    alt="Delta Airlines"
                    width={32}
                    height={32}
                    className="rounded-full"
                    style={{ aspectRatio: "32/32", objectFit: "cover" }}
                  />
                  <div className="font-medium">Delta Airlines</div>
                  <div className="text-sm text-muted-foreground">DL 456</div>
                </div>
                <div className="text-2xl font-bold">$499</div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">Depart</div>
                  <div className="flex items-center gap-2">
                    <div className="text-xl font-medium">7:30 AM</div>
                    <div className="text-sm text-muted-foreground">SFO</div>
                  </div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">Arrive</div>
                  <div className="flex items-center gap-2">
                    <div className="text-xl font-medium">4:45 PM</div>
                    <div className="text-sm text-muted-foreground">JFK</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Duration: 9h 15m
                </div>
                <Button variant="outline" size="sm">
                  Select
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg"
                    alt="American Airlines"
                    width={32}
                    height={32}
                    className="rounded-full"
                    style={{ aspectRatio: "32/32", objectFit: "cover" }}
                  />
                  <div className="font-medium">American Airlines</div>
                  <div className="text-sm text-muted-foreground">AA 789</div>
                </div>
                <div className="text-2xl font-bold">$549</div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">Depart</div>
                  <div className="flex items-center gap-2">
                    <div className="text-xl font-medium">6:45 AM</div>
                    <div className="text-sm text-muted-foreground">SFO</div>
                  </div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm text-muted-foreground">Arrive</div>
                  <div className="flex items-center gap-2">
                    <div className="text-xl font-medium">5:00 PM</div>
                    <div className="text-sm text-muted-foreground">JFK</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Duration: 10h 15m
                </div>
                <Button variant="outline" size="sm">
                  Select
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function ArrowRightIcon(props) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function FilterIcon(props) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
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
