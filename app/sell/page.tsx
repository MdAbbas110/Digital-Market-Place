import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SelectCategory from "../_components/SelectCategory";
import { Textarea } from "@/components/ui/textarea";
import { TipTapEditor } from "../_components/Editor";

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
              <Label>Small Summary 2</Label>
              <TipTapEditor />
            </div>
          </CardContent>
        </form>
      </Card>
    </section>
  );
};

export default SellRoute;
