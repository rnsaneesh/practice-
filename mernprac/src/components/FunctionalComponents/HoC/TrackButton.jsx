const TrackButton =(Component)=>{
    return(props)=>{
        const handleBtnClick=()=>{
            alert("the tracking info on clicking this Btn"+ props.trackingInfo.CustID)
        }
        return(
            <form onClick={handleBtnClick}>
                Email:<input type="text" />
                Password : <input type="text" />
                <Component {...props} />
            </form>
        )
    }
}
export default TrackButton;