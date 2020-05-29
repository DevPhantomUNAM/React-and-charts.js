import React, { Component } from 'react';

export default class RunnerCard extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="col-12 col-md-4 mt-3">
                <div className="card">
                    <div className="card-header">
                        {
                            this.props.runnerName
                        }
                    </div>                     
                    <div className="card-body">
                        <div className=" btn btn-primary" 
                        data-runner-key={this.props.runnerKey} 
                        onClick={this.props.handleRunnerClick}>Ver Grafica</div> 
                    </div>
                </div>
            </div>
        )
    }
}