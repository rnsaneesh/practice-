import Button from "./Button"
import TrackButton from "./TrackButton";

const HoC = ()=>{
    const ButtonTrack=TrackButton(Button)
    return(
        <div>
            <h1>Welcome to higeher order Componenets(HoC)</h1>
           <Button value={"login"} />
           <ButtonTrack value={"login"} trackingInfo={{"CustID":"Hello","password":"password"}} />
        </div>
    )
}
export default HoC;