export default function Input() {
    function getdata(value){
        console.log(value,"kimmidcdsc")
    }
    return (
        
        <div className="App">
        <h1>Get the Input value</h1>
        <input type="text" onChange={getdata}></input>
        </div>
    );
}
