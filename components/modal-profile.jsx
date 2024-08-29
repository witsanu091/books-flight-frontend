import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

export function ModalProfile() {
  return (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[420px]">
        <div className="flex flex-col items-center gap-4 p-6">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="space-y-1 text-center">
            <h4 className="text-2xl font-bold">John Doe</h4>
            <p className="text-sm text-muted-foreground">@johndoe</p>
          </div>
        </div>
        <Separator />
        <div className="grid gap-4 p-6">
          <div className="grid gap-2">
            <h5 className="text-sm font-medium">Account Information</h5>
            <div className="grid grid-cols-2 items-center gap-4">
              <div className="text-muted-foreground">Email</div>
              <div>john@example.com</div>
              <div className="text-muted-foreground">Password</div>
              <div>********</div>
            </div>
          </div>
          <div className="grid gap-2">
            <h5 className="text-sm font-medium">Settings</h5>
            <div className="grid grid-cols-2 items-center gap-4">
              <div className="text-muted-foreground">Notifications</div>
              <Switch />
              <div className="text-muted-foreground">Dark Mode</div>
              <Switch />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="destructive" className="w-full">
            Logout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
