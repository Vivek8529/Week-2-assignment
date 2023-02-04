import React,{Component} from "react";
import { testapi } from "../apis/testapi";
class Sumnumbers extends Component{
    state={
        fNumber:12,
        sNumber:10,
        sum:0,
        sumString :"The component has not updated the states"
    }
    componentDidMount(){
      console.log("We are in component did mount of sumnumbers");
      testapi(4,8).then((sum)=>{
        this.setSum(sum);
      })
    }
    componentDidUpdate(){
      console.log("Component has updated");
      // this.setState({...this.state,sumString :`The sum is : ${this.state.sum}`});
    }
    setSum=(sum,firstnum,secondnum)=>{
      if(typeof sum !== "undefined")
        this.setState({...this.state,sum});
      else{
        this.setState({...this.state,
        sum:this.state.fNumber+this.state.sNumber});
      }
    }
    render(){
        return (
          <div>
            First Number :
            <input
              type="number"
              onChange={(e) => {
                this.setState({
                  ...this.state,
                  fNumber: parseInt(e.target.value),
                });
              }}
              value={this.state.fNumber}
            />
            <br />
            Second Number :
            <input
              type="number"
              onChange={(e) => {
                this.setState({
                  ...this.state,
                  sNumber: parseInt(e.target.value),
                });
              }}
              value={this.state.sNumber}
            />
            <br />
            <button onClick={(e)=>this.setSum()}>Add Numbers</button>
            <br />
            <h1>The sum is:{this.state.sum}</h1>
          </div>
        );
    }
}
export default Sumnumbers;