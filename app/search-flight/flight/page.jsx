"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { callSearchFlight } from "@/lib/call-api/callFlight";
import {
  convertTime24to12,
  formatCurrency,
  formatDate,
} from "@/lib/utils/utils";
import { useEffect, useState } from "react";

export default function FlightSearching({ searchParams }) {
  const { search } = searchParams;
  const [flightDeparture, setFlightDeparture] = useState({});
  const [flightArrival, setFlightArrival] = useState({});
  const [dateGo, setDateGo] = useState("");
  const [dateReturn, setdateReturn] = useState("");
  const [responseDeparture, setResponseDeparture] = useState([]);
  const [responseArrival, setResponseArrival] = useState([]);
  const [selectDeparture, setSelectDeparture] = useState(null);

  const searchFlightDeparture = async (data) => {
    try {
      const response = await callSearchFlight(data);
      setResponseDeparture(response.data.response_data);
    } catch (error) {
      console.log("🚀  error:", error);
    }
  };

  const searchFlightArrival = async (data) => {
    try {
      const response = await callSearchFlight(data);
      setResponseArrival(response.data.response_data);
    } catch (error) {
      console.log("🚀  error:", error);
    }
  };

  useEffect(() => {
    if (search) {
      const data = JSON.parse(search);
      setFlightDeparture(data.searchFlightDeparture);
      setFlightArrival(data.searchFlightArrival);
      setDateGo(formatDate(data.searchFlightDeparture.flight_date));
      setdateReturn(formatDate(data.searchFlightArrival.flight_date));
      const fetchData = async () => {
        try {
          await searchFlightDeparture(data.searchFlightDeparture);
          if (data.searchFlightArrival.flight_date) {
            await searchFlightArrival(data.searchFlightArrival);
          }
        } catch (error) {
          console.log("🚀  error:", error);
        }
      };
      fetchData();
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
                {flightDeparture.airport_take_off_name} {"=>"}{" "}
                {flightDeparture.airport_landing_name}
              </div>
              <div className="text-sm text-primary-foreground/80">
                {`${dateGo}`}
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectDeparture !== null && selectDeparture !== {} && (
        <div className="py-4 mx-2 sm:mx-6 md:px-6 items-center justify-center">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-muted rounded-lg p-4 flex flex-col gap-2 hover:bg-accent hover:text-accent-foreground transition-colors">
              <div className="grid gap-4">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src="/placeholder.svg"
                      alt="United Airlines"
                      width={32}
                      height={32}
                      className="rounded-full"
                      style={{ aspectRatio: "1", objectFit: "cover" }}
                    />
                    <div>
                      <div className="font-medium">
                        {selectDeparture.airline_name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {selectDeparture.airline_number}
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-0">
                      Duration: {selectDeparture.hour_travel}h 0m
                    </div>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold">
                    {formatCurrency(selectDeparture.price)}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="grid gap-1">
                    <div className="text-sm text-muted-foreground">Depart</div>
                    <div className="flex items-center gap-2">
                      <div className="text-lg font-medium">
                        {convertTime24to12(selectDeparture.time_take_off)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {selectDeparture.takeoff_airport}
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-1">
                    <div className="text-sm text-muted-foreground">Arrive</div>
                    <div className="flex items-center gap-2">
                      <div className="text-lg font-medium">
                        {convertTime24to12(selectDeparture.time_landing)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {selectDeparture.landing_airport}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-6xl mx-auto py-8 md:py-10 lg:py-16 px-4 md:px-6">
        <div className="grid gap-6">
          {responseDeparture &&
            responseDeparture?.map((departure, index) => (
              <Card key={index}>
                <CardContent className="grid gap-4 mt-4">
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
                      <div className="font-medium">
                        {departure.airline_name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {departure.airline_number}
                      </div>
                    </div>
                    <div className="text-2xl font-bold">
                      {formatCurrency(departure.price)}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="grid gap-1">
                      <div className="text-sm text-muted-foreground">
                        Depart
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-xl font-medium">
                          {convertTime24to12(departure.time_take_off)}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {departure.takeoff_airport}
                      </div>
                    </div>
                    <div className="grid gap-1">
                      <div className="text-sm text-muted-foreground">
                        Arrive
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-xl font-medium">
                          {convertTime24to12(departure.time_landing)}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {departure.landing_airport}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Duration: {departure.hour_travel}h 0m
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectDeparture(departure)}
                    >
                      Select
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>

      {responseArrival && responseArrival.length > 0 && (
        <>
          <div className="bg-primary text-primary-foreground py-4 px-6">
            <div className=" mx-auto flex items-center justify-between">
              <div className="flex items-center gap-4">
                <PlaneIcon className="w-6 h-6" />
                <div className="grid gap-1">
                  <div className="text-lg font-medium">
                    {flightArrival.airport_take_off_name} {"=>"}{" "}
                    {flightArrival.airport_landing_name}
                  </div>
                  <div className="text-sm text-primary-foreground/80">
                    {`${dateReturn}`}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-6xl mx-auto py-12 md:py-16 lg:py-20 px-4 md:px-6">
            <div className="grid gap-6">
              {responseArrival && responseArrival.length > 0 ? (
                responseArrival.map((arrival, index) => (
                  <Card key={index}>
                    <CardContent className="grid gap-4 mt-4">
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
                          <div className="font-medium">
                            {arrival.airline_name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {arrival.airline_number}
                          </div>
                        </div>
                        <div className="text-2xl font-bold">
                          {formatCurrency(arrival.price)}
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="grid gap-1">
                          <div className="text-sm text-muted-foreground">
                            Depart
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="text-xl font-medium">
                              {convertTime24to12(arrival.time_take_off)}
                            </div>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {arrival.takeoff_airport}
                          </div>
                        </div>
                        <div className="grid gap-1">
                          <div className="text-sm text-muted-foreground">
                            Arrive
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="text-xl font-medium">
                              {convertTime24to12(arrival.time_landing)}
                            </div>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {arrival.landing_airport}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          Duration: {arrival.hour_travel}h 0m
                        </div>
                        <Button variant="outline" size="sm">
                          Select
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-10">
                  <h2>Flight Not Found</h2>
                  <p>Please try different search criteria.</p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
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
