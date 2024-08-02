import TextField from "@/components/Custom/TextField";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CornerUpLeft } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const schema = z.object({
  name: z.string({ message: "This field is required" }),
  description: z.string({ message: "This field is required" }),
  type: z.string(),
});

const ActionTypeReport = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: "", description: "", type: "shop" },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data, "test");
      })}
    >
      <div className="flex justify-between p-4 mb-4">
        <p className="text-primary text-4xl flex gap-1">
          <Button variant={"ghost"} onClick={() => navigate(-1)}>
            <CornerUpLeft />
          </Button>
          {id ? "Edit Report Type" : "Add Report Type"}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <TextField
          name="name"
          label="Name"
          placeholder="Enter Report Type Name"
          control={control}
        />
        {errors.name?.message && (
          <p className="text-red-500">{errors.name?.message}</p>
        )}
        <TextField
          name="description"
          label="Description"
          placeholder="Enter Report Type Description"
          control={control}
        />
        {errors.description?.message && (
          <p className="text-red-500">{errors.description?.message}</p>
        )}
      </div>

      <div className="flex justify-around m-4">
        <Label className="flex-col flex">
          <Input
            className="mb-2"
            type="radio"
            value="shop"
            {...register("type")}
          />
          Shop
        </Label>
        <Label className="flex-col flex">
          <Input
            className="mb-2"
            type="radio"
            value="dor"
            {...register("type")}
          />
          Worker
        </Label>
      </div>

      <div className="flex justify-end mt-4">
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ActionTypeReport;
