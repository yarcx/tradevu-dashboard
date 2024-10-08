import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ICustomProps } from "@/lib/types";
import { cn } from "@/lib/utils";

function CustomSelect({ placeholder, options, label, classNames }: ICustomProps) {
  return (
    <Select>
      <SelectTrigger className={cn("w-auto", classNames)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {label && <SelectLabel>{label}</SelectLabel>}
          {options?.map(({ label, value }, index) => (
            <SelectItem
              key={`${index}-${value}`}
              value={value}
              className="flex justify-start items-center flex-row gap-x-2"
            >
              {/* make the source of the coutry flag dynamic */}
              {/* {img ? (
                <Image src={img} height={10} width={10} alt="flag" className="rounded-full" />
              ) : null} */}
              <span>{label}</span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default CustomSelect;
