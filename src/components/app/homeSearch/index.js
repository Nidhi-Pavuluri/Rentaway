import React from "react";
import { FormGroup, Form, FormControl, ControlLabel, PageHeader, Button, Table } from 'react-bootstrap';
//import DayPickerInput from 'react-day-picker';
import './search.css'
//import 'react-day-picker/lib/style.css';

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
                <FormGroup controlId="formControlsAdult" bsSize="large">
                  <ControlLabel>Number of Adults:</ControlLabel>
                  <FormControl componentClass="select" placeholder="select">
                    <option value="select">select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </FormControl>
                </FormGroup>
              </tr>
              <tr>
                <FormGroup controlId="formControlsChild" bsSize="large">
                  <ControlLabel>Number of Children:</ControlLabel>
                  <FormControl componentClass="select" placeholder="select">
                    <option value="select">select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </FormControl>
                </FormGroup>
              </tr>
                
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