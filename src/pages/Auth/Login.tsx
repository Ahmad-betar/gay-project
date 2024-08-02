import { LOGIN_QUERY } from "@/api/Login/login-query";
import TextField from "@/components/Custom/TextField";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const schema = z.object({
  email: z.string().email({ message: "Enter valid Email" }),
  password: z.string().min(5, { message: "must be at least 5 characters" }),
});

const Login = () => {
  const navigate = useNavigate();
  const { mutate, isLoading } = LOGIN_QUERY();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const submitHandler: SubmitHandler<FieldValues> = (data) => {
    mutate(
      { email: data.email, password: data.password },
      {
        onSuccess: (data) => {
          localStorage.setItem("token", data.JWT);
          toast("Logged In Successfully");
          navigate("/");
        },
        onError: ({ message }) => {
          toast(message);
        },
      }
    );
  };

  return (
    <form
      className="h-screen flex bg-gradient-to-r from-primary from-0% to-50% to-black"
      onSubmit={handleSubmit(submitHandler)}
    >
      <Card className="w-[350px] m-auto ">
        <CardHeader>
          <p className="text-primary m-auto mb-5 text-4xl">TeleJob</p>
          <CardTitle>Welcome to Telejob</CardTitle>
          <CardDescription>Sign in to come closer.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              control={control}
              name="email"
            />
            {errors.email?.message && (
              <p className="text-red-500">{errors.email?.message.toString()}</p>
            )}
            <TextField
              placeholder="Enter Your Password"
              label="Password"
              control={control}
              name="password"
            />
            {errors.password?.message && (
              <p className="text-red-500">
                {errors.password?.message.toString()}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button disabled={isLoading}>Login</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default Login;
