import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-1xl font-bold">Payment Your Flight</h1>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-background py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-[1fr_400px] gap-12 px-4 md:px-6">
          <div>
            <h2 className="text-2xl font-bold mb-6">Passenger Details</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="+1 (123) 456-7890" />
              </div>
            </form>
            <Separator className="my-8" />
            <h2 className="text-2xl font-bold mb-6">Flight Details</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid gap-2">
                <Label htmlFor="departure">Departure</Label>
                <Input id="departure" placeholder="New York (JFK)" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="arrival">Arrival</Label>
                <Input id="arrival" placeholder="Los Angeles (LAX)" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" />
              </div>
            </form>
            <Separator className="my-8" />
            <h2 className="text-2xl font-bold mb-6">Payment</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid gap-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input
                  id="card-number"
                  type="text"
                  placeholder="4111 1111 1111 1111"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="expiration">Expiration</Label>
                  <div className="flex gap-2">
                    <Select>
                      <SelectTrigger id="expiration-month">
                        <SelectValue placeholder="MM" />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(12).keys()].map((i) => (
                          <SelectItem key={i + 1} value={i + 1}>
                            {i + 1}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger id="expiration-year">
                        <SelectValue placeholder="YY" />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(10).keys()].map((i) => (
                          <SelectItem key={i + 2023} value={i + 2023}>
                            {i + 2023}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" type="text" placeholder="123" />
                </div>
              </div>
            </form>
          </div>
          <div className="bg-muted rounded-lg p-6 space-y-6">
            <h2 className="text-2xl font-bold">Flight Summary</h2>
            <div className="grid gap-2">
              <div className="flex justify-between">
                <span>Departure</span>
                <span>New York (JFK)</span>
              </div>
              <div className="flex justify-between">
                <span>Arrival</span>
                <span>Los Angeles (LAX)</span>
              </div>
              <div className="flex justify-between">
                <span>Date</span>
                <span>2023-06-15</span>
              </div>
            </div>
            <Separator />
            <div className="grid gap-2">
              <div className="flex justify-between">
                <span>Ticket Price</span>
                <span>$500</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes and Fees</span>
                <span>$50</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>$550</span>
              </div>
            </div>
            <Button className="w-full">Book Now</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
