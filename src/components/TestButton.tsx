function TestButton(): JSX.Element {
  return <button onClick = {function () {
    console.log("Hello, world")
    window.alert("Alert test")
    window.open("https://google.com")}}>Make me do something when I'm clicked...</button>;
}

// function TestButton(): JSX.Element {
//   return <button onClick = {() => console.log("Hello, world")}>Make me do something when I'm clicked...</button>;
// }

export default TestButton;
