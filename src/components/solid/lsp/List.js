// 3. Liskov Substitution Principle (LSP)
// Subclasses (or derived components) should be replaceable by 
// their base classes without affecting correctness.

// Parent Component
export default function List({ items, renderItem }) {
    // Error handling for edge cases
    if (!items) {
      return <ul><li style={{ color: "red" }}>Error: items is required</li></ul>;
    }

    if (!Array.isArray(items)) {
      return <ul><li style={{ color: "red" }}>Error: items must be an array</li></ul>;
    }

    if (items.length === 0) {
      return <ul><li style={{ color: "gray" }}>No items to display</li></ul>;
    }

    // Default renderItem function if not provided
    const defaultRender = (item) => {
      if (typeof item === "object") {
        return JSON.stringify(item);
      }
      return String(item);
    };

    const render = renderItem || defaultRender;

    return (
      <ul>
        {items.map((item, index) => {
          try {
            return (
              <li key={index}>
                {render(item)}
              </li>
            );
          } catch (error) {
            return (
              <li key={index} style={{ color: "red" }}>
                Error rendering item: {error.message}
              </li>
            );
          }
        })}
      </ul>
    );
  }
  