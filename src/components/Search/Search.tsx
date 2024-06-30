'use client';
import { Button } from "@/ui/Button/Button";
import { Input } from "@/ui/Input/Input";
import { SearchIcon } from "../../../public/icons/SerarcIcon";
import { CancelIcon } from "../../../public/icons/CancelIcon";
import styles from './Search.module.css';
import { useRef, useState } from "react";

const Search = ({ setSearchValue}: {
  setSearchValue: (value: string) => void
}) => {
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClearSearchValue = () => {
    setInputValue("");
    setSearchValue("");
    if (inputRef.current) inputRef.current.focus();
  };

  const onSearch = () => {
    setSearchValue(inputValue);
  };

  return (
    <div className={styles.Search}>
      <Input
        ref={inputRef}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Телефоны, яблоки, груши..."
        leftIcon={<SearchIcon />}
        rightIcon={
          inputValue && (
            <Button variant="icon" onClick={onClearSearchValue}>
              <CancelIcon />
            </Button>
          )
        }
      />
      <Button onClick={onSearch}>Искать</Button>
    </div>
  );
};

export { Search }