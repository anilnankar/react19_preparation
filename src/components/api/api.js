import React, { useEffect, useState } from 'react';
import ContentSection from '../utils/contentsection';
import axios from 'axios';
import SWR from './swr';
function Api() {

    const [data, setData] = useState(null);
    const [loader, setLoader] = useState(true);
    const [axiosData, setAxiosData] = useState(null);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>response.json())
        .then((json)=>setData(json))
        .catch((error)=>console.error("Error fetching data:", error));

        axios("https://jsonplaceholder.typicode.com/todos")
        .then((response)=>setAxiosData(response.data))
        .catch((error)=>console.error("Error fetching data:", error))
        .finally(()=>setLoader(false));

    }, []);

    return (
        <div className="app-container">
            <ContentSection title="API using fetch()" tooltip="">
                <h4>Fetched Data:</h4>
                {data ? (
                    <ul>
                    {data.slice(0, 5).map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                    </ul>
                ) : (
                    <p>Loading data...</p>
                )}
            </ContentSection>

            <ContentSection title="API using axios()" tooltip="">
                <h4>Fetched Data:</h4>
                {axiosData ? (
                    <ul>
                    {axiosData.slice(0, 5).map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                    </ul>
                ) : (
                    <p>Loading data...</p>
                )}
            </ContentSection>


            <ContentSection title="API using SWR" tooltip="">
                <SWR />
            </ContentSection>
        </div>
    );

}

export default Api;