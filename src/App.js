import './App.css';

function Child({className = ''}) {
  return (
    <div>
      <h2 className={`text-big ${className}`}>Some content</h2>

      <h2 className={className}>bobbyhadz.com</h2>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Child className="bg-lime" />
    </div>
  );
}
