import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SelectCategory from "../_components/SelectCategory";
import { Textarea } from "@/components/ui/textarea";
import { TipTapEditor } from "../_components/Editor";
import { UploadDropzone } from "../utils/uploadThing";
import { Button } from "@/components/ui/button";

const SellRoute = () => {
  return (
    <section className="mx-auto mb-14 max-w-7xl px-4 md:px-8">
      <Card>
        <form>
          <CardHeader>
            <CardTitle>Sell Your product with eases</CardTitle>
            <CardDescription>
              Please describe your product here so that it can be sold
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-2">
              <Label>Name</Label>
              <Input type="text" placeholder="Product Name" />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Category</Label>
              <SelectCategory />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Price</Label>
              <Input type="number" placeholder="$25" />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Small Summary</Label>
              <Textarea placeholder="Please describe the product shortly right here..." />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Description</Label>
              <TipTapEditor />
            </div>

            <div className="flex flex-col gap-y-2">
              <Label>Product Images</Label>
              <UploadDropzone endpoint="imageUploader" />
            </div>

            <div className="flex flex-col gap-y-2">
              <Label>Product zip file</Label>
              <UploadDropzone endpoint="zipFileUploader" />
            </div>
          </CardContent>
          <CardFooter className="mt-5">
            <Button>Submit Product</Button>
          </CardFooter>
        </form>
      </Card>
    </section>
  );
};

export default SellRoute;
