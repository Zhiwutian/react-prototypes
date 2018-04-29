import React, {Component} from "react";

class Laptimer extends Component {
    constructor(props){
        super(props);
        console.log(props);
        const {elapsed} = props;
        const sec = elapsed/1000;
        const min = sec/60;
        this.state = {
            hour : Math.floor(min / 60),
            min : Math.floor(min % 60),
            sec : Math.floor(sec % 60),
            ms : Math.floor(elapsed % 100)
        };

    }

    componentWillReceiveProps(nextProps) {
        const {elapsed} = nextProps;
        const sec = elapsed/1000;
        const min = sec/60;
        this.setState({
            hour: Math.floor(min / 60),
            min: Math.floor(min % 60),
            sec: Math.floor(sec % 60),
            ms: Math.floor(elapsed % 100)
        })


    }

    leadingZero(number) {
        if (number < 10) {
            return "0"+ number;
        } else {
            return number;
        }

    }

    trailingZero(number) {
        if (number < 10){
            return number + "0"
        } else {
            return number
        }
    }

    render(){
        const {hour, min, sec, ms} = this.state;
        return <span className="lead text-center">{this.leadingZero(hour)}:{this.leadingZero(min)}:{this.leadingZero(sec)}.{this.trailingZero(ms)}</span>
    }
}

export default Laptimer;