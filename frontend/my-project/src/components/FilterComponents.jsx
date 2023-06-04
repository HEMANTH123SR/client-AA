import { ChevronDown, } from "lucide-react";
/*max-w-4xl */
const  FilterOne=()=>{
  return (
    <div className="mx-auto w-full  max-w-4xl ">
      <div className="px-2 py-6">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="grid grid-cols-4 gap-x-6 gap-y-4">
            <button className="flex items-center justify-center text-sm font-semibold">
              Category
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            <button className="flex items-center justify-center text-sm font-semibold">
              Price
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            <button className="flex items-center justify-center text-sm font-semibold">
              Color
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            <button className="flex items-center justify-center text-sm font-semibold">
              Brand
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default FilterOne;