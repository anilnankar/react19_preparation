import React, {useState, useEffect, useMemo} from 'react';
import ContentSection from "../utils/contentsection";

const users = [
  "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace"
]; // Simulated large dataset

function UseMemo() {

  const [query, setQuery] = useState("");
  const [query2, setQuery2] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce logic (500ms delay)
  useEffect(() => {
    const handler = setTimeout(() => {
      if (query2.length >= 3) {
        setDebouncedQuery(query2);
      } else {
        setDebouncedQuery(""); // Reset if less than 3 chars
      }
    }, 500);

    return () => clearTimeout(handler);
  }, [query2]);

  // Memoized filtering logic (Runs only when debouncedQuery changes)
  const filteredUsersWithDebounce = useMemo(() => {
    return users.filter((user) => 
      user.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [debouncedQuery]);

  const filteredUsers = useMemo(() => {
    if(query) {
      console.log("run filter user code");
      return users.filter((user)=> {
        console.log("Iterate on users");
        return user.toLowerCase() == query.toLowerCase()
      });  
    }

    return [];
  }, [query]);
  
  return (
    <>
      <ContentSection title="Cached Filtered Result using useMemo" tooltip="">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search users..."
        />
        <ul>
          {filteredUsers.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection title="Filtered Result using useMemo & debounce" tooltip="">
        <input
          type="text"
          value={query2}
          onChange={(e) => setQuery2(e.target.value)}
          placeholder="Type to search..."
        />

        {debouncedQuery && (
          <ul>
            {filteredUsersWithDebounce.length > 0 ? (
              filteredUsersWithDebounce.map((user, index) => <li key={index}>{user}</li>)
            ) : (
              <li>No users found</li>
            )}
          </ul>
        )}
      </ContentSection>

    </>
  );
}

export default UseMemo;
