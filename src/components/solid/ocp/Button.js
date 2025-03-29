// 2. Open/Closed Principle (OCP)
// Components should be open for extension but closed for modification.

export function Button({ label, onClick, style }) {
  return (
    <button onClick={onClick} style={{ padding: "10px", ...style }}>
      {label}
    </button>
  );
}
