import React ,{Component, useEffect} from 'react';
import { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import {Form,Col,Row,Button} from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import { Doughnut } from 'react-chartjs-2';

//const investment=document.getElementById('range-slider1').value;
//const interest =document.getElementById('range-slider2').value;
 const FDchart=()=>{
     const [chartData, setChartData]= useState({});
     const chart=()=>{
         setChartData({
             labels:['Total Investment' , 'Total Interest'],
             datasets:[
                 {
                   label:'FD calculator',
                   data:[10000,2000],
                  backgroundColor:['#9932CC','#00FA9A'],
                  borderWidth:1
                 }
             ]
         })
     }
     useEffect(()=>{
         chart()
     })
     return(
         <div>
        <Doughnut
         data={chartData}
         options={{ 
            responsive:true, 
            maintainAspectRatio: true}}
       /></div>
     )

 }


const SimpleSlider = () => {
    const [ value1, setValue1 ] = useState(0);
    const [ value2, setValue2 ] = useState(0);
    const [ value3, setValue3 ] = useState(0);
  
    return (
   <div className='slider'>
    <Form>
     <Form.Group as ={Row}>
    <Col sm='10'>
        <Typography gutterBottom> PRINCIPAL: Rs. {value1}</Typography>
       <RangeSlider id="range-slider1" 
          value={value1}
          onChange={e => setValue1(e.target.value)}
          tooltip='on'
          tooltipLabel={currentValue => `Rs.${currentValue}`}
          min={0}
          max={2000000}
          size='sm'/>
          </Col>
         </Form.Group>   
        
        
 <Form.Group as ={Row}>
    <Col sm='10'>         
    <div className="Slider2">
    <Typography  gutterBottom> INTEREST RATE:  {value2}%</Typography>
     <RangeSlider  id="range-slider2"
  value={value2}
  onChange={e => setValue2(e.target.value)}
  tooltip='on'
  tooltipLabel={currentValue => `${currentValue}%`}
  min={0}
  max={15}
  size='sm' />
        </div>
        </Col>
         </Form.Group>   

    <Form.Group as ={Row}>
    <Col sm='10'> 
 <div className="Slider3">
<Typography  gutterBottom> TIME-PERIOD:  {value3} years</Typography>
<RangeSlider id="range-slider3"
  value={value3}
  onChange={e => setValue3(e.target.value)}
  tooltip='on'
  min={0}
  max={15}
  size='sm' />
</div>
</Col>
 </Form.Group> 
</Form>
 </div>
       
    );
  
  };

 class FixedDeposits extends Component{
    render(){
        return(
            <div className="deposits">
                <h1>FixedDeposits</h1>
                <Form>
                <Form.Group as={Row}>
                <Col ><SimpleSlider/> </Col>    
                <Col ><FDchart/></Col>
                </Form.Group>
               
               </Form>
               <Button variant="outline-success">SUBMIT</Button>
            </div>
        )
    }
}
export default FixedDeposits;
