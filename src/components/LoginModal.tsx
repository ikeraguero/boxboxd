import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/lib/ui/card";
import { Input } from "@/lib/ui/input";
import { Label } from "@/lib/ui/label";
import { Button } from "@/shared/ui/Button";

type LoginModalProps = {
    isOpen: boolean,
    onClose: () => void
}

export function LoginModal({isOpen, onClose} : LoginModalProps) {
    if (!isOpen) return;

    return <Card className="w-full max-w-sm bg-card text-white border-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-1000">
        <CardHeader>
            <CardTitle>
                Login to your account
            </CardTitle>
            <CardDescription className="text-white">
                Enter your username and password to login to your account
            </CardDescription>
            <CardAction >
                <Button variant="link" className="text-white" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </Button>
            </CardAction>
        </CardHeader>
        <CardContent>
            <form>
                <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                        <Label>Username</Label>
                        <Input
                            className="bg-card-input border-none shadow-[0_0_0_1px_#ffffff1a]"
                            id="username"
                            placeholder="Username"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            className="bg-card-input border-none shadow-[0_0_0_1px_#ffffff1a]"
                            id="password"
                            type="password"
                        />
                    </div>
                </div>
            </form>
        </CardContent>
        <CardFooter className="flex-col gap-3">
            <Button className="w-full">Login</Button>
            <Button className="w-full">Sign Up</Button>
        </CardFooter>
    </Card>
}