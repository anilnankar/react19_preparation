import React, {useState, useEffect, useMemo} from 'react';
import ContentSection from "../utils/contentsection";

const users = [
  "Anil", "Pranay", "Rajeshwari", "Smita", "Dipali"
]; // Simulated large dataset

function UseMemo() {

  const [query, setQuery] = useState("");
  const [query2, setQuery2] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [otherState, setOtherState] = useState(0);

   useEffect(() => {
      console.log("otherState changed, but filter logic should not run");
   }, [otherState]); // This effect is just to demonstrate that `otherState` changes do not trigger the filter logic

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
    console.log("run filter user code with debounce");
    return users.filter((user) => 
      user.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [debouncedQuery]);

  // Memoized filtering logic (Runs only when query changes)
  // This demonstrates that `useMemo` prevents re-running the filter when unrelated state changes.
  const filteredUsers = useMemo(() => {
    console.log("1111) run filter user code (query)");

    // Return all users when query is empty (common UX expectation)
    if (!query.trim()) {
      return users;
    }

    return users.filter((user) => {
      console.log(`Filtering user: ${user} with query: ${query}`);
      // Use `includes` for partial matches (more user-friendly)
      return user.toLowerCase().includes(query.toLowerCase());
    });
  }, [query]);

  // Non-memoized filtering logic (Runs on every render)
  // This shows the behavior when you *don't* use useMemo.
  const filteredUsersNoMemo = (() => {
    console.log("2222) run filter user code (no memo)");

    if (!query.trim()) {
      return users;
    }

    return users.filter((user) => {
      console.log(`Filtering user: ${user} with query: ${query} (no memo)`);
      return user.toLowerCase().includes(query.toLowerCase())
    });
  })();

  return (
    <>
      <ContentSection title="Cached Filtered Result using useMemo" tooltip="">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search users..."
        />
        <button onClick={() => setOtherState((prev) => prev + 1)}>
          Increment unrelated state ({otherState})
        </button>

        <ul>
          {filteredUsers.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>

        <p style={{ fontSize: 12, color: "#666" }}>
          Tip: Open the console and click the button above; the filter code should not rerun.
        </p>
      </ContentSection>

      <ContentSection title="Filtered Result without useMemo" tooltip="">
        <p style={{ fontSize: 12, color: "#666" }}>
          This list recalculates on every render (including when unrelated state changes).
        </p>

        <ul>
          {filteredUsersNoMemo.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>

        <p style={{ fontSize: 12, color: "#666" }}>
          Tip: Click the "Increment unrelated state" button and watch the console; this list will rerun its filter logic.
        </p>
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
