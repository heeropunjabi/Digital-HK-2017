import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

import Checkbox from 'material-ui/Checkbox';

import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
/**
 * Vertical steppers are designed for narrow screen sizes. They are ideal for mobile.
 *
 * To use the vertical stepper with the contained content as seen in spec examples,
 * you must use the `<StepContent>` component inside the `<Step>`.
 *
 * <small>(The vertical stepper can also be used without `<StepContent>` to display a basic stepper.)</small>
 */
 const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

class VerticalLinearStepper extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div  style={{margin: '12px 0'}}>
        <RaisedButton id="nextButton"
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton id="backButton"
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {finished, stepIndex} = this.state;

    return (
      <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>Select Plan</StepLabel>
            <StepContent>
               <RadioButtonGroup id="plan" name="shipSpeed" defaultSelected="simonly">
      <RadioButton id="combo1"
        value="combo1"
        label="Combo 1 (Lorem ipsuem)"      
      />
      <RadioButton   id="combo2"
        value="combo2"
        label="Combo 2 (Lorem ipsuem)"
    
      />
       <RadioButton  id="combo3"
        value="combo3"
        label="Combo  3 (Lorem ipsuem)"
    
      />
       <RadioButton id="combo4"
        value="simonly"
        label="Sim only starter (Lorem ipsuem)"
    
      />
   
     
    </RadioButtonGroup>
   
  
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Select Device</StepLabel>
            <StepContent>
        <Checkbox id="device1"
          label="iPhone 8 pluse"
          style={styles.checkbox}
        />
        <Checkbox id="device2"
          label="iPhone 8"
          
         
          style={styles.checkbox}
        />
         <Checkbox id="device3"
          label="iPhone 6 plus"
        
         
          style={styles.checkbox}
        />
        
         <Checkbox id="device4"
          label="iPhone 5s"       
         
          style={styles.checkbox}
        />
        
         <Checkbox id="device5"
          label="iPhone 5"         
          style={styles.checkbox}
        />
        
        
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Order Summary</StepLabel>
            <StepContent>
               <p>Lorem ipsuem    Lorem ipsuem  Lorem ipsuem  Lorem ipsuem  Lorem ipsuem.</p>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
        {finished && (
          <p style={{margin: '20px 0', textAlign: 'center'}}>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to reset the example.
          </p>
        )}
      </div>
    );
  }
}

export default VerticalLinearStepper;