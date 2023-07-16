import React from 'react'

export default function AddMatch() {


    const onSubmit =()=>{
        console.log('test here');
    }


    const OnChangeTeamOne =(data)=>{
        console.log(data);
    }

    const OnChangeTeamTwo =(data)=>{
        console.log(data);
    }

    const OnChangeScoreOne =(data)=>{
        console.log(data);
    }

    const OnChangeScoreTwo =(data)=>{
        console.log(data);
    }

    return (
    <div>
  <div className="hero overlay" style={{backgroundImage: 'url("assets/images/bg_3.jpg")'}}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-9 mx-auto text-center">
          <h1 className="text-white">AddMatch</h1>
        </div>
      </div>
    </div>
  </div>
  <div className="site-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <form action="#">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Team One"
              onChange={(event)=>OnChangeTeamOne(event.target.value)}
              />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Team Two"
              onChange={(event)=>OnChangeTeamTwo(event.target.value)}
              />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Score One" 
              onChange={(event)=>OnChangeScoreOne(event.target.value)}
              />
              
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Score Two" 
              onChange={(event)=>OnChangeScoreTwo(event.target.value)}
              />
            </div>
            <div className="form-group">
              <button  type="submit" className="btn btn-primary py-3 px-5" onClick={()=>onSubmit()}>Add Match</button>
            </div>
          </form>  
        </div>
        
      </div>
    </div>
  </div>
</div>


  )
}