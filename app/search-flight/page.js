"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AutocompleteDepartFrom from "@/components/autocomplete/autocompleteDepartFrom";
import AutocompleteDestination from "@/components/autocomplete/autocompleteDestination";
import {
  callGetFlightRecommend,
  callSearchFlight,
} from "@/lib/call-api/callFlight";

export default function SearchFlight() {
  const router = useRouter();
  const [valueDepartFrom, setValueDepartFrom] = useState({});
  const [valueDestination, setValueDestination] = useState({});
  const [countCustomer, setCountCustomer] = useState("1");
  const [flightRecommend, setFlightRecommend] = useState(null);
  const [tripType, setTripType] = useState("2");
  const [dateTravel, setDateTravel] = useState({
    date_go: "",
    date_return: "",
  });

  const [searchFlightDeparture, setSearchFlightDeparture] = useState({});
  const [searchFlightArrival, setSearchFlightArrival] = useState({});

  const [responseDeparture, setResponseDeparture] = useState([]);
  const [responseArrival, setResponseArrival] = useState([]);

  const handleDateGoChange = (e) => {
    const { value } = e.target;
    setDateTravel({ ...dateTravel, date_go: value });
  };

  const handleDateReturnChange = (e) => {
    const { value } = e.target;
    setDateTravel({ ...dateTravel, date_return: value });
  };

  const getAllFlightRecommend = async () => {
    try {
      const response = await callGetFlightRecommend();
      setFlightRecommend(response.data?.response_data);
    } catch (error) {}
  };

  const submitSearch = async () => {
    try {
      const response1 = await callSearchFlight(searchFlightDeparture);
      console.log("🚀  response:", response1);
      setResponseDeparture(response1);
      if (tripType === 2) {
        const response2 = await callSearchFlight(searchFlightArrival);
        console.log("🚀  response:", response2);
        setResponseArrival(response2);
      }
    } catch (error) {
      console.log("🚀  error:", error);
    }
  };

  const handleNavigate = () => {
    router.push({
      pathname: "/flight-searching",
      query: {
        data: JSON.stringify({
          searchFlightDeparture,
          searchFlightArrival,
        }),
      },
    });
  };

  if (!router) {
    return null;
  }

  useEffect(() => {
    getAllFlightRecommend();
  }, []);

  useEffect(() => {
    setSearchFlightDeparture({
      airport_take_off: valueDepartFrom.airport_id,
      airport_landing: valueDestination.airport_id,
      flight_date: dateTravel.date_go,
    });
    setSearchFlightArrival({
      airport_take_off: valueDestination.airport_id,
      airport_landing: valueDepartFrom.airport_id,
      flight_date: dateTravel.date_return,
    });
  }, [valueDepartFrom, dateTravel]);

  return (
    <div className="w-full max-w-6xl mx-auto py-12 md:py-16 lg:py-20 px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Find your next adventure
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            Search for flights and book your trip with ease.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="departure">Departure</Label>

                <AutocompleteDepartFrom airport={setValueDepartFrom} />
              </div>
              {tripType === "2" && (
                <div className="space-y-2">
                  <Label htmlFor="arrival">Arrival</Label>
                  <AutocompleteDestination airport={setValueDestination} />
                </div>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="departure-date">Departure Date</Label>
                <Input
                  id="departure-date"
                  type="date"
                  onChange={handleDateGoChange}
                />
              </div>
              {tripType === "2" && (
                <div className="space-y-2">
                  <Label htmlFor="return-date">Return Date</Label>
                  <Input
                    id="return-date"
                    type="date"
                    onChange={handleDateReturnChange}
                  />
                </div>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Passengers</Label>
                <Select
                  id="passengers"
                  value={countCustomer}
                  onValueChange={(value) => setCountCustomer(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={countCustomer} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Trip Type</Label>
                <div className="flex items-center space-x-4">
                  <RadioGroup
                    value={tripType}
                    onValueChange={(value) => setTripType(value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem id="one-way" value="1" />
                      <Label htmlFor="one-way">One-way</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem id="round-trip" value="2" />
                      <Label htmlFor="round-trip">Round trip</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
            <Button
              className="w-full"
              onClick={() => {
                handleNavigate();
              }}
            >
              Search Flights
            </Button>
          </form>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Popular Destinations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {flightRecommend &&
              flightRecommend.map((flight, index) => (
                <Link
                  href="#"
                  className="bg-muted rounded-lg p-4 flex flex-col gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  prefetch={false}
                  index={index}
                >
                  <PlaneIcon className="w-8 h-8" />
                  <div className="font-medium">{flight.landing_airport}</div>
                  <div className="text-sm text-muted-foreground">
                    {flight.airline_name}
                  </div>
                </Link>
              ))}
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
