import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export type GetAppsInput = {
  sortBy?: "reviewCount" | "averageScore" | "alphabetical";
  order?: "asc" | "desc";
};

export type SortOption = {
  id: number;
  label: string;
  value: GetAppsInput;
};

const sortOptions: SortOption[] = [
  {
    id: 0,
    label: "Alphabetical (A-Z)",
    value: { sortBy: "alphabetical", order: "asc" },
  },
  {
    id: 1,
    label: "Alphabetical (Z-A)",
    value: { sortBy: "alphabetical", order: "desc" },
  },
  {
    id: 2,
    label: "Most Reviewed",
    value: { sortBy: "reviewCount", order: "desc" },
  },
  {
    id: 3,
    label: "Least Reviewed",
    value: { sortBy: "reviewCount", order: "asc" },
  },
  {
    id: 4,
    label: "Best Score",
    value: { sortBy: "averageScore", order: "desc" },
  },
  {
    id: 5,
    label: "Worst Score",
    value: { sortBy: "averageScore", order: "asc" },
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SortDropdown({
  onSortChange,
  currentSort,
}: {
  onSortChange: (value: GetAppsInput) => void;
  currentSort: GetAppsInput;
}) {
  const getCurrentLabel = () => {
    return (
      sortOptions.find(
        (option) =>
          option.value.sortBy === currentSort.sortBy &&
          option.value.order === currentSort.order
      )?.label || "Sort by"
    );
  };

  return (
    <Listbox value={currentSort} onChange={onSortChange}>
      {({ open }) => (
        <>
          <div className="relative mt-2">
            <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 sm:text-sm sm:leading-6">
              <span className="block truncate">
                Sort by: {getCurrentLabel()}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {sortOptions.map((option) => (
                <ListboxOption
                  key={option.id}
                  className={({ focus }) =>
                    classNames(
                      focus ? "bg-red-600 text-white" : "",
                      !focus ? "text-gray-900" : "",
                      "relative cursor-default select-none py-2 pl-3 pr-9"
                    )
                  }
                  value={option.value}
                >
                  {({ selected, focus }) => (
                    <>
                      <span
                        className={classNames(
                          selected ? "font-semibold" : "font-normal",
                          "block truncate"
                        )}
                      >
                        {option.label}
                      </span>

                      {selected ? (
                        <span
                          className={classNames(
                            focus ? "text-white" : "text-red-600",
                            "absolute inset-y-0 right-0 flex items-center pr-4"
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </>
      )}
    </Listbox>
  );
}
