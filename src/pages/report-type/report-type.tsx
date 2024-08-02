import { REPORTED_TYPE_QUERIES } from "@/api/report-types/report-types-query";
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
} from "@/components/ui/dialog";
import Loading from "@/components/ui/loading";
import NoData from "@/components/ui/no-data";
import { cn } from "@/lib/utils";
import { Pencil, Plus, Trash } from "lucide-react";
import { Link } from "react-router-dom";

const ReportType = () => {
  const { data, isLoading } = REPORTED_TYPE_QUERIES.GET_SHOP_CATEGORIES_QUERY();

  return (
    <>
      <div className="flex justify-between p-4">
        <p className="text-primary text-4xl">Report Type</p>
        <Link
          to={"/add-report-type"}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "flex items-center"
          )}
        >
          Add Report Type <Plus className="p-1" />
        </Link>
      </div>
      {isLoading && <Loading />}
      {!isLoading && data?.reportTypes.length === 0 && <NoData />}
      {!isLoading && data?.reportTypes.length !== 0 && (
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data?.reportTypes.map((report) => {
            return (
              <Card className="pt-2 flex flex-col justify-between">
                <CardContent className="mt-2 flex flex-col gap-4">
                  <span>
                    <p>Name : {report.name}</p>
                  </span>
                  <span>
                    <p>Description : {report.description}</p>
                  </span>
                </CardContent>
                <CardFooter className="flex items-end justify-end gap-4">
                  <Link
                    className={buttonVariants({ variant: "outline" })}
                    to={"/edit-report-type/" + report._id}
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
                        <DialogFooter>
                          <Button variant={"outline"}>Cancel</Button>
                          <Button className="bg-red-500 hover:bg-red-500">
                            Yes
                          </Button>
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

export default ReportType;
