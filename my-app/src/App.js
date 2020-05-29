import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Line} from 'react-chartjs-2';
import './App.css';
import RunnerCard from './components/RunnerCards/index'
import ChartCard from './components/ChartCards/index'
// https://github.com/jerairrest/react-chartjs-2/tree/master/example/src/components



class App extends Component{
  constructor(){
    super();
    this.state = {
      runnersData:{},
      runnerKey:""
    }
    this.handleRunnerClick = this.handleRunnerClick.bind(this)
  }

  hadleRunnerClick(event){
    let runnerKey = event.target.dataset.runnerKey;
    this.setState({runnerKey});
    this.setState({selectedRunner: this.state.runnersData[runnerKey]})
  }

  componentDiMount(){
    fetch('https://runtracks-a4c10.firebaseio.com/.json').then(
      response =>{
        response.json().then(
          json =>{
            this.setState({runnersData:json})
          }          
        )
      }
    )
  }

  render(){
    return (
      <div className="container">
        <div className="row">

          {
            Object.keys(this.state.runnersData).map( runner =>{
              return <RunnerCard 
              runnerName = {this.state.runnesData[runner].name}
              key = {runner}
              runner = {runner}
              handleRunnerClick = {this.handleRunnerClick}
              />
            })
            
          }
          <div className="row">
            <div className="col-12">
                {
                  this.state.selectedRunner ? <ChartCard chartData = {this.state.selectedRunner}                    
                    /> : 
                    null
                }                    
            </div>
          </div>       
        </div>
      </div>
    );
  }
}


export default App;
