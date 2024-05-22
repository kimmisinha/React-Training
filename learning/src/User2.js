export default function User2() {
  function Apple() {
    return <div>Apple component</div>;
  }
  function updatedata() {
    var data = "kimmi";
    return (data = "kumari"), alert(data);
  }
  return (
    <div className="App">
      <button onClick={() => alert("Hello world is called")}>Click Me</button>
      <button onClick={updatedata}>Update Data</button>
      <h1>Hello User2 !{78 + 10}</h1>
      {Apple}
    </div>
  );
}
//In variable value will not update in case of state value will update
//state is also used to update value of object
