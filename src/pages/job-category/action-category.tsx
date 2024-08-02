import TextField from "@/components/Custom/TextField";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CornerUpLeft } from "lucide-react";

const schema = z.object({
  name: z.string({ message: "This field is required" }),
  description: z.string({ message: "This field is required" }),
});

const ActionCategory = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(() => {})}>
      <div className="flex justify-between p-4 mb-4">
        <p className="text-primary text-4xl flex gap-1">
          <Button variant={"ghost"} onClick={() => navigate(-1)}>
            <CornerUpLeft />
          </Button>
          {id ? "Edit Job Category" : "Add Job Category"}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <TextField
          name="name"
          label="Name"
          placeholder="Enter Job Category Name"
          control={control}
        />
        {errors.name?.message && (
          <p className="text-red-500">{errors.name?.message}</p>
        )}
        <TextField
          name="description"
          label="Description"
          placeholder="Enter Job Category Description"
          control={control}
        />
        {errors.description?.message && (
          <p className="text-red-500">{errors.description?.message}</p>
        )}
      </div>
      <div className="flex justify-end mt-4">
        <Button className="w-full">Submit</Button>
      </div>
    </form>
  );
};

export default ActionCategory;
