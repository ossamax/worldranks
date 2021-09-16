import Layout from "../components/Layouts/Layout";
import SearchInput from "../components/SearchInput/Searchinput";
import CountriesTable from "../components/CountriesTable/CountriesTable.js";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home({ countries }) {
  const [keyword, setKeyword] = useState("");

  const filterCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  );
  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <div className={styles.heading}> Found {countries.length} countries</div>
      <SearchInput
        placeHolder="Filter by Name , Region or SubRegion"
        onChange={onInputChange}
      />
      <CountriesTable countries={filterCountries} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();
  return {
    props: {
      countries,
    },
  };
};
