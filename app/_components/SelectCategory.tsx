"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { categoryItems } from "../utils/categoryItems";
import { useState } from "react";

const SelectCategory = () => {
  const [selectedCategory, setSelectCategory] = useState<string | null>(null);
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {categoryItems.map((item) => (
        <div key={item.id} className="cursor-pointer">
          <Card
            className={
              selectedCategory === item.name
                ? "border-2 border-primary"
                : "border-2 border-primary/10"
            }
            onClick={() => setSelectCategory(item.name)}
          >
            <CardHeader>
              {item.image}
              <h3 className="font-medium">{item.title}</h3>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default SelectCategory;
