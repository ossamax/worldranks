import React from "react";
import { SearchRounded } from "@material-ui/icons";
import styles from "./Searchinput.module.css";

const SearchInput = ({ placeHolder }) => {
  return (
    <div className={styles.wrapper}>
      <SearchRounded  color="inherit"/>
      <input type="text" placeholder={placeHolder} className={styles.input} />
    </div>
  );
};

export default SearchInput;
