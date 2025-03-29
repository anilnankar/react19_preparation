
// 4. Interface Segregation Principle (ISP)
// Components should not be forced to depend on interfaces they do not use.
// Small, Focused Components

export function Title({ text }) {
    return <h1>{text}</h1>;
}
  
export function Description({ text }) {
    return <p>{text}</p>;
}
  

