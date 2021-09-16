import Layout from "../components/Layouts/Layout";
import SearchInput from "../components/SearchInput/Searchinput";
import CountriesTable from "../components/CountriesTable/CountriesTable.js";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home({ countries }) {
  
  const [keyword, setKeyWord] = useState("");

  const filterCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(keyword)
  );
  return (
    <Layout>
      <div className={styles.heading}> Found {countries.length} countries</div>
      <SearchInput placeHolder="Filter by Name , Region or SubRegion" />
      <CountriesTable countries={countries} />
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
