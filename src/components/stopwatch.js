import React,  {Component} from "react";
import Time from "./format_time";
import Laptimer from "./lapTimer";



class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "stopped",
            start: null,
            elapsed: 0,
            lapTime: "00:00:00.00"

        };
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.update = this.update.bind(this);
        this.reset = this.reset.bind(this);
        this.lap = this.lap.bind(this);
    }

     render(){
        const {lapTime, elapsed, status} = this.state;
         return (
             <div className="jumbotron">
                 <h1 className="display-3"><Time elapsed={elapsed}/></h1>
                 <p className="lead text-center">{status}</p>
                 <hr className="my-3"></hr>
                 <p className="text-center">
                     <button className="btn btn-outline-success mx-3" onClick={this.start}>Start</button>
                     <button className="btn btn-outline-danger mx-3" onClick={this.stop}>Stop</button>
                     <button className="btn btn-outline-warning mx-3" onClick={this.reset}>Reset</button>
                     <button className="btn btn-outline-info mx-3" onClick={this.lap}>Lap</button>
                 </p>
                 <hr className="my-3"></hr>
                 <p className="lead text-center">{lapTime}</p>
             </div>
         )
     }

     start(){
        const {lapTime, start, elapsed} = this.state;
        let newStart = new Date().getTime();
        if (start !== null) {
            newStart = newStart - elapsed;
        }

        this.setState({
            status: "running",
            start: newStart
        });
        setTimeout(this.update, 10);
     }
     stop(){
        this.setState({
            status: "stopped"
        });
     }
     update(){
        const {status, start} = this.state;
        if(status === "running") {
            this.setState ({
             elapsed: new Date().getTime() - start

            });
            setTimeout(this.update, 10);


        }
     }
     reset(){
        this.setState ({
            status: "stopped",
            start: null,
            elapsed: 0,
            lapTime: "00:00:00.00"
        })
     }

     lap(){
        let {elapsed} = this.state;
        this.setState ({
            lapTime: <Laptimer elapsed={elapsed}/>
        });


     }
}

export default Stopwatch;