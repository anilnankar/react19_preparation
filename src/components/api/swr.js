import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

function SWR() {

    const [randomRangeForSlice, setRandomRangeForSlice] = useState(Math.floor(Math.random() * 10) + 1); // Random number between 1 and 10

    const {data, error, isLoading, mutate} = useSWR(
        "https://jsonplaceholder.typicode.com/posts",
        fetcher,
        {
            refreshInterval: 10000, // Re-fetch every 10 seconds
            shouldRetryOnError: true, // Retry on failure
            onSuccess: (data) => {
                console.log("Data fetched using SWR:", data);
                setRandomRangeForSlice(Math.floor(Math.random() * 10) + 1);
            }
        }
    );

    if (isLoading) return <div className="app-container">Loading...</div>;
    if (error) return <div className="app-container">Error loading data!</div>;

    return (
        <div>
            <h3>Stale While Revalidate (SWR)</h3>
            <h4>Fetched Data:</h4>
            {!isLoading && data ? (
            <ul>
                {data.slice(0, randomRangeForSlice).map((post) => (
                <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            )
            : (
                <p>Loading data...</p>
            )}

            <button onClick={() => mutate()}>Refresh Data</button>
        </div>
    );
}

export default SWR;