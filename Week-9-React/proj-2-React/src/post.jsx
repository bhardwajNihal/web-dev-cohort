

// Either pass the props argument and extract its attributes by .dot operator
// OR destructure the props object and directly use the attributes key
export function PostComponent(props) {

    const style = {
      height : "auto", 
      width: 350,
      backgroundColor: "white",
      borderRadius: 10,
      padding : 5,
      color : "black",
      margin:10
    }
      return <div style={style}>
        <div style={{display:"flex", margin:5 , gap:10}}>
            <div className="creator-image" style={{height:50, width:50, borderRadius:100, overflow:"hidden"}}>
                <img style={{height:"100%", width:"100%", objectFit:"cover"}} src={props.image} alt="" />
            </div>
            <div>
                <div style={{fontWeight : "bold"}} className="title">{props.name}</div>
                <div style={{fontSize:14}} className="sub-title">{props.followerCount} </div>
                {/* conditional rendering */}
                {props.time && <div style={{fontSize:14,}} className="time">{props.time}. <img style={{width:14, marginBottom:-2}} src="https://static-00.iconduck.com/assets.00/clock-icon-2048x2048-o0dud9zx.png" alt="" /></div>}
            </div>
        </div>
    
        <div className="post-Content" style={{margin:15}}>
          {props.description}
        </div>
      </div>
    }