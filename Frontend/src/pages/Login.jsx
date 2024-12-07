import Captcha from "@/components/captcha/Captcha"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,  
} from "@/components/ui/tabs"
import { useState } from "react"

const Login = () => {
    const [signupInput, setSignupInput] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        password: "",
      });
      const [loginInput, setLoginInput] = useState({ email: "", password: "" });

      const changeInputHandler = (e, type) => {
        const { name, value } = e.target;
        if (type === "signup") {
          setSignupInput({ ...signupInput, [name]: value });
        } else {
          setLoginInput({ ...loginInput, [name]: value });
        }
      };
  return (
    <div className="flex items-center w-full justify-center mt-20">
        <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2 shadow-md">
            <TabsTrigger value="signup">Signup</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup" className="shadow-md">
            <Card>
            <CardHeader>
                <CardTitle>Signup</CardTitle>
                <CardDescription>
                    Quick and easy sign-up for instant access to all our features!
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input type="text" name="name" value={signupInput.name} onChange={(e) => changeInputHandler(e, "signup")} placeholder="Eg. Lokesh Sharma" required="true"/>
                </div>
                <div className="space-y-1">
                <Label htmlFor="username">Email</Label>
                <Input type="email" name="email" value={signupInput.email} onChange={(e) => changeInputHandler(e, "signup")} placeholder="Eg. Lokesh@gmail.com" required="true"/>
                </div>
                <div className="space-y-1">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input type="number" name="phoneNumber" value={signupInput.phoneNumber} onChange={(e) => changeInputHandler(e, "signup")} placeholder="Eg. +91 4558745445" required="true"/>
                </div>
                <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input type="password" name="password" value={signupInput.password} onChange={(e) => changeInputHandler(e, "signup")} placeholder="Eg. abcde" required="true"/>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="flex-1">Signup</Button>
            </CardFooter>
            </Card>
        </TabsContent>
        <TabsContent value="login" className="shadow-md">
            <Card>
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                    Log in to access your account and get started!
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="space-y-1">
                <Label htmlFor="current">Email</Label>
                <Input type="email" name="email" value={loginInput.email} onChange={(e) => changeInputHandler(e, "login")} placeholder="Eg. Lokesh@gmail.com" required="true"/>
                </div>
                <div className="space-y-1">
                <Label htmlFor="new">Password</Label>
                <Input type="password" name="password" value={loginInput.password} onChange={(e) => changeInputHandler(e, "login")} placeholder="Eg. abcde" required="true"/>
                </div>
                <Captcha/>
            </CardContent>
            <CardFooter>
                <Button className="flex-1">Login</Button>
            </CardFooter>
            </Card>
        </TabsContent>
        </Tabs>
    </div>
  )
}

export default Login;