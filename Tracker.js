import React ,{Component} from 'react';
import { Doughnut } from 'react-chartjs-2'; 
import Badge from 'react-bootstrap/Badge';
import STracker from './savings';
import CTracker from './credit';
import CUTracker from './current';
 

let bg;
let Expense_spent=[50000];
let ExpenseLimit=[50000];

const chartColors ={
    red:"#ff0000",
    blue:"#00bfff",
    green:"#80ff00"
};

   
    


class Tracker extends Component{
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
            <div style={{ margin: `50px`, display: `flex`, flexDirection: `row` }}>
            <div></div>
            <STracker />
            <CTracker />
            <CUTracker />
            </div>
            

        )
    }
}

export default Tracker;