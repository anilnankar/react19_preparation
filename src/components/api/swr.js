import React from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetcher(url).then((res) => res.json());

function SWR() {

    const {data, error, isLoading, mutate} = useSWR(
        "https://jsonplaceholder.typicode.com/posts",
        fetcher,
        {
            refreshInterval: 10000, // Re-fetch every 10 seconds
            shouldRetryOnError: true, // Retry on failure
        }
    );

    if (isLoading) return <div className="app-container">Loading...</div>;
    if (error) return <div className="app-container">Error loading data!</div>;

    return (
        <div>
            <h4>Fetched Data:</h4>
            <ul>
                {data.slice(0, 5).map((post) => (
                <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            <button onClick={() => mutate()}>Refresh Data</button>
        </div>
    );
}

export default SWR;