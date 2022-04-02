import Student from './Student';
import {Result} from './Student';
import Calf from './Calf';
import Calc from './Calc';
import Number from './Number';
import Assignment1 from './Assignment1';


const app = () => {
  return (
    <div>
         <Calc />
      {/* <h1>From App Component</h1> */}
      {/* <Assignment1 /> */}
      {/* <Student name="Jass" class="Science">
        <h1>Some inner tags in Student COmponent</h1>
        <Result />
        <Calc />
      </Student> */}
      {/*
      <Calf /> 
      <Number />*/}
    </div>
  );
};

export default app;
