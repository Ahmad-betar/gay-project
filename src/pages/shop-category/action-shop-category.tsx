import TextField from "@/components/Custom/TextField";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CornerUpLeft } from "lucide-react";
import { SHOP_CATEGORY_QUERIES } from "@/api/shop-category/shop-category-query";
import { toast } from "sonner";

const schema = z.object({
  name: z.string({ message: "This field is required" }),
  description: z.string({ message: "This field is required" }),
});

const ActionShopCategory = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    control,
    handleSubmit,
    formState: {},
  } = useForm({
    resolver: zodResolver(schema),
  });

  const { mutate: addshop, isLoading: isAdding } =
    SHOP_CATEGORY_QUERIES.ADD_SHOP_CATEGORY_QUERY();

  const { mutate: editshop, isLoading: isEditing } =
    SHOP_CATEGORY_QUERIES.EDIT_SHOP_CATEGORY_QUERY();

  const submitHandler = (data: any) => {
    id
      ? editshop(
          { id, ...data },
          {
            onSuccess: (data) => {
              toast(data.message);
              navigate(-1);
            },
            onError: () => {
              toast(data.message);
            },
          }
        )
      : addshop(data, {
          onSuccess: (data) => {
            toast(data.message);
            navigate(-1);
          },
          onError: () => {
            toast(data.message);
          },
        });
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="flex justify-between p-4 mb-4">
        <p className="text-primary text-4xl flex gap-1">
          <Button variant={"ghost"} onClick={() => navigate(-1)}>
            <CornerUpLeft />
          </Button>
          {id ? "Edit Shop Category" : "Add Shop Category"}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <TextField
          name="name"
          label="Name"
          placeholder="Enter Shop Category Name"
          control={control}
        />
        {/* {errors.name?.message && (
          <p className="text-red-500">{errors.name?.message}</p>
        )} */}
        <TextField
          name="description"
          label="Description"
          placeholder="Enter Shop Category Description"
          control={control}
        />
        {/* {errors.description?.message && (
          <p className="text-red-500">{errors.description?.message}</p>
        )} */}
      </div>
      <div className="flex justify-end mt-4">
        <Button disabled={isAdding || isEditing} className="w-full">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ActionShopCategory;
