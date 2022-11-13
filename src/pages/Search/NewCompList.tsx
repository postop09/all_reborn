import React, {useEffect, useState} from 'react';
import {TitleH3} from "../../style/style";
import CardList from "../../components/CardList";

const NewCompList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchList();
    }, []);

    const fetchList = async () => {
        const res = await fetch("/list");
        const json = await res.json();
        const data = json.data;
        setList(data);
    }

    return (
        <section>
            <TitleH3>최근에 등록되었어요</TitleH3>
            <CardList data={list}/>
        </section>
    );
};

export default NewCompList;