import React, {useState} from 'react';
import HomeHeader from "./HomeHeader";
import HomeContact from "./HomeContact";
import photo from "../assets/Header-Form-Background.png";
import decoration from "../assets/Decoration.svg";
import Form1Step from "./Form_1Step";
import Form2Step from "./Form_2Step";
import Form3Step from "./Form_3Step";
import {connect} from "react-redux";
import {saveData} from '../redux/actions'
import Form4Step from "./Form_4Step";
import FormSummary from "./FormSummary";
import FormEnd from "./FormEnd";


const Form5Step = ({user, isLogged, setIsLogged, saveDataDispatch}) => {

    const [currentStep, setCurrentStep] = useState(1);
    return (
        <div>
            <HomeHeader user={user} isLogged={isLogged} setIsLogged={setIsLogged}/>
            <div className="formSection">
                <img className="formPhoto" src={photo} alt=""/>
                <div className="formSection_Content">
                    <h2 className="title">Oddaj rzeczy, których już nie potrzebujesz</h2>
                    <h2 className="title">POTRZEBUJĄCYM</h2>
                    <img className="decoration" src={decoration} alt=""/>
                    <h2 className="formSection_text">Wystarczą 4 proste kroki</h2>
                    <div className="fourStep">
                        <div className="fourStep__Button"><span className="button_content"><span>1</span><br/>Wybierz rzeczy</span>
                        </div>
                        <div className="fourStep__Button"><span
                            className="button_content">2<br/>Spakuj je w worki</span></div>
                        <div className="fourStep__Button"><span
                            className="button_content">3<br/>Wybierz fundację</span>
                        </div>
                        <div className="fourStep__Button"><span
                            className="button_content">4<br/>Zamów kuriera</span>
                        </div>
                    </div>
                </div>
            </div>
            {(currentStep === 1) && <Form1Step setCurrentStep={setCurrentStep} saveData={saveDataDispatch}/>}
            {(currentStep === 2) && <Form2Step setCurrentStep={setCurrentStep} saveData={saveDataDispatch}/>}
            {(currentStep === 3) && <Form3Step setCurrentStep={setCurrentStep}  saveData={saveDataDispatch}/>}
            {(currentStep === 4) && <Form4Step setCurrentStep={setCurrentStep}  saveData={saveDataDispatch}/>}
            {(currentStep === 5) && <FormSummary setCurrentStep={setCurrentStep}/>}
            {(currentStep === 6) && <FormEnd setCurrentStep={setCurrentStep}/>}
            <HomeContact/>
        </div>
    );
};


const mapDispatchToProps = (dispatch) => {
    return {
        saveDataDispatch: (data) => {
            dispatch(saveData(data));
            console.log(data);
        },
    };
};

export default connect(null, mapDispatchToProps)(Form5Step);
