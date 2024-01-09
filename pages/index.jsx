import { decremented, incremented } from "@/src/store/features/counterSlice";
import Head from "next/head";
import Layout from "@/components/Layout";
import Search from "@/components/Search";
import CardList from "@/components/cardList"
import {useState} from "react";
export default function Home() {
    const [OptionData, setOptionData] = useState(true);
    const [SearchData,setSearchData] = useState("");
    return (
        <Layout>
           <Search setOptionData={setOptionData} setSearchData={setSearchData}  />
           <CardList OptionData={OptionData} SearchData={SearchData} />
        </Layout>
    )
}
