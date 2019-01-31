import React from "react";
import { FormGroup, Form, FormControl, ControlLabel, PageHeader, Button, Table } from 'react-bootstrap';
//import DayPickerInput from 'react-day-picker';
import './search.css'
//import 'react-day-picker/lib/style.css';
import CounterInput from 'react-bootstrap-counter';



class HomeSearch extends React.Component {

  render() {
    return (
      <div>
        <center>
        <Form>
          <Table bordered responsive bsClass="new1">
            <tbody>
              <PageHeader>
                Plan your next Trip
          <br></br>
                <small>Your Choice, Our Range </small>
              </PageHeader>
              <tr>
                <ControlLabel>Where?</ControlLabel>
                <FormGroup bsSize="large">
                  <FormControl type="text" placeholder="Anywhere" />
                </FormGroup>
              </tr>

              <tr>
              <ControlLabel>Number of Adults</ControlLabel>
              <CounterInput max={40} onChange={ (value) => { console.log(value) } }  />
              </tr>
              <tr>
              <ControlLabel>Number of Children</ControlLabel>
              <CounterInput max={40} onChange={ (value) => { console.log(value) } }  />
              </tr>
              <br></br>  
              <tr><Button type="submit">Submit</Button></tr>
            </tbody>
          </Table>
        </Form>
        
        </center>
      </div>

    );

  }

}


//render(<HomeSearch />);
export default HomeSearch; 