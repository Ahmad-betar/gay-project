import { JOB_CATEGORY_QUERIES } from "@/api/job-category/job-category-query";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import Loading from "@/components/ui/loading";
import NoData from "@/components/ui/no-data";
import { cn } from "@/lib/utils";
import { Pencil, Plus, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const JobCategory = () => {
  const { data: categories, isLoading } =
    JOB_CATEGORY_QUERIES.GET_JOB_CATEGORIES_QUERY();
  const { mutate } = JOB_CATEGORY_QUERIES.DELETE_JOB_CATEGORY_QUERY();

  return (
    <>
      <div className="flex justify-between p-4 max-sm:flex-col max-sm:gap-4">
        <p className="text-primary text-4xl">Job Category</p>
        <Link
          to={"/add-job-category"}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "flex items-center"
          )}
        >
          Add Job Category <Plus className="p-1" />
        </Link>
      </div>
      {isLoading && <Loading />}
      {!isLoading && categories?.jobCategories.length === 0 && <NoData />}

      {!isLoading && categories?.jobCategories.length !== 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories?.jobCategories.map((category) => {
            return (
              <Card className="pt-2 flex flex-col justify-between">
                <CardContent className="mt-2 flex flex-col gap-4">
                  <span>
                    <p>Name : {category.name}</p>
                  </span>
                  <span>
                    <p>Description : {category.description}</p>
                  </span>
                </CardContent>
                <CardFooter className="flex items-end justify-end gap-4">
                  <Link
                    className={buttonVariants({ variant: "outline" })}
                    to={"/edit-job-category/" + category._id}
                  >
                    <Pencil className="p-1" />
                  </Link>
                  <Dialog>
                    <DialogTrigger>
                      <Button variant={"outline"}>
                        <Trash className="p-1" color="red" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. This will permanently
                          delete your your data from our servers.
                        </DialogDescription>
                        <DialogFooter className="gap-2">
                          <DialogClose className="w-full h-full">
                            <Button variant={"outline"} className="w-full">
                              Cancel
                            </Button>
                          </DialogClose>
                          <DialogClose className="w-full h-full">
                            <Button
                              onClick={() => {
                                mutate(category._id, {
                                  onSuccess: (data) => {
                                    toast(data.message);
                                  },
                                });
                              }}
                              className="bg-red-500 hover:bg-red-500 w-full"
                            >
                              Yes
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
};

export default JobCategory;
