// 3. Liskov Substitution Principle (LSP)
// Subclasses (or derived components) should be replaceable by 
// their base classes without affecting correctness.

// Parent Component
export default function List({ items, renderItem }) {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{renderItem(item)}</li>
        ))}
      </ul>
    );
  }
  