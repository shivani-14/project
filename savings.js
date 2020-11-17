import React ,{Component} from 'react';
import { Doughnut } from 'react-chartjs-2'; 
import Badge from 'react-bootstrap/Badge';
 

let bg;
let Expense_spent=[50000];
let ExpenseLimit=[50000];

const chartColors ={
    red:"#ff0000",
    blue:"#00bfff",
    green:"#80ff00"
};

   
    


class STracker extends Component{
 constructor(props){
     super(props)
     this.state={
        data1:{
            labels:["Expense spent","Monthly Expense Limit"],
               datasets:[{
                       data: [Expense_spent.map(function(value){
                         if(value<=10000) {
                          bg=chartColors.green;
                          return value;
                         }
                         else if(value>10000 && value<50000)
                         {
                             bg=chartColors.blue;
                             return value;
                         }
                         else{ 
                          bg=chartColors.red;
                          return value;
                      }
                      }), ExpenseLimit],
                     backgroundColor:[bg,"#9932CC"],
                     borderWidth:3,
                     borderColor:"gray"
                   }]
  }
    }}
    render(){
        return(
            <div id="Trackerchart"  style={{height:900,width:900}}>
            <h1>Savings :</h1>
 <Doughnut data={this.state.data1}   options={{responsive:true, maintainAspectRatio: true}}/>
                
<div><h5>ExpenseLimit Indicators: <Badge variant="success">Normal</Badge>{' '}
  <Badge variant="primary">Moderate</Badge>{' '}
  <Badge variant="danger">ExceedLimit</Badge>{' '}</h5>
</div>
                
                </div>
            

        )
    }
}

export default STracker;