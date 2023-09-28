import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { FilterMovieByYear } from "../redux/reducers/GetMoviesByCategory";
import { useDispatch, useSelector } from "react-redux";

const people = [
  { year: 1970 },
  { year: 1971 },
  { year: 1972 },
  { year: 1973 },
  { year: 1974 },
  { year: 1975 },
  { year: 1976 },
  { year: 1977 },
  { year: 1978 },
  { year: 1979 },
  { year: 1980 },
  { year: 1981 },
  { year: 1982 },
  { year: 1983 },
  { year: 1984 },
  { year: 1985 },
  { year: 1986 },
  { year: 1987 },
  { year: 1988 },
  { year: 1989 },
  { year: 1990 },
  { year: 1991 },
  { year: 1992 },
  { year: 1993 },
  { year: 1994 },
  { year: 1995 },
  { year: 1996 },
  { year: 1997 },
  { year: 1998 },
  { year: 1999 },
  { year: 2000 },
  { year: 2001 },
  { year: 2002 },
  { year: 2003 },
  { year: 2004 },
  { year: 2005 },
  { year: 2006 },
  { year: 2007 },
  { year: 2008 },
  { year: 2009 },
  { year: 2010 },
  { year: 2011 },
  { year: 2012 },
  { year: 2013 },
  { year: 2014 },
  { year: 2015 },
  { year: 2016 },
  { year: 2017 },
  { year: 2018 },
  { year: 2019 },
  { year: 2020 },
  { year: 2021 },
  { year: 2022 },
  { year: 2023 },
];

export default function CustomFilter() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.GetMoviesByCategory);
  console.log(data);
  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === "" ? people : people.filter((person) => person.year);

  return (
    <div className=" w-72">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-white focus:ring-0"
              displayValue={(person) => person.year}
              onChange={(event) => {
                dispatch(FilterMovieByYear(event.target.value));
                setQuery(event.target.value);
              }}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md text-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : "text-white-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.year}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
