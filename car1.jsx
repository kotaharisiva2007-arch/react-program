function Car(props) {
  return <h2>I am a {props.color} {props.brand} {props.model}!</h2>;
}

export default function App() {
  return <Car brand="Ford" model="Mustang" color="red" />;
}