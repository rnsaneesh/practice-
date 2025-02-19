function Home(props){
    var homestyle={
        textAlign:"center",
        color : "red",
        backgroundColor : "black"

    };
    return(
        <div>
            <h1 style={homestyle}>Home</h1>
            <h2 >Pro: {props.properties},{props.sjit}</h2>
        </div>
    );
}
export default Home;