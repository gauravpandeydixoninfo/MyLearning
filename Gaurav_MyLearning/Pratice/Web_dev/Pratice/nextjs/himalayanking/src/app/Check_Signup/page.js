"use client"
export default function Home(){
    let handleSubmitttt=()=>{
        console.log("=====>clicked submit button");
    }
    return(
        <form>
            <label for="details">First name:</label><br></br>
            <input type="text" id="details" name="details" />
            <button onClick={handleSubmitttt}>On Submit</button>
        </form>
    )
}