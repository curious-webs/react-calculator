import {Component} from 'react';
import calcss from './Calc.module.css';

class Calc extends Component {
  constructor () {
    super ();
    this.state = {
      currentVal: '',
      values: [],
      recentResult: 0,
    };
    this.board = [
      '9',
      '8',
      '7',
      'cl',
      '6',
      '5',
      '4',
      '+',
      '3',
      '2',
      '1',
      '-',
      '0',
      '*',
      '/',
      '=',
    ];
  }

  handleClick = e => {
    let typedChar = e.target.value;
    let rr = this.state.values;
    console.log ('currentval' + this.state.currentVal);
    if (typedChar === '=' && this.state.recentResult) {
      return;
    }

    if (typedChar === 'cl') {
      this.setState ({
        result: '',
        currentVal: '',
        values: [],
      });
      return;
    }

    if (typedChar === '=') {
      let expStr = rr.pop ();





      // const regex = new RegExp (/(\*|\/)/);
      // if (regex.test (expStr)) {
      //   console.log ('contain mult and div');
      // }

      let exp = expStr.split (/(\+|-|\*|\/)/);
      console.log ('exp is');
      console.log (exp);
      if(exp[exp.length-1] === ""){
        console.log("inside if");
        return;
      }
      let result = 0;
      while (exp.length !== 1) {
        console.log ('exp length' + exp.length);
        console.log ('inside while');
        let multPosition = -1;
        let divPosition = -1;
        if (exp.includes ('*')) {
          multPosition = exp.indexOf ('*');
        }
        console.log ('mul position' + multPosition);
        if (exp.includes ('/')) {
          divPosition = exp.indexOf ('/');
        }
        console.log ('div position' + divPosition);
        for (let i = 0; i <= exp.length; i++) {
          //  if (exp[i] === '+' || exp[i] === '-') {
          let firstEle = exp[i - 1];
          let secondEle = exp[i + 1];
          if (multPosition < divPosition || divPosition == -1) {
            if (exp[i] === '*') {
              result = parseFloat (firstEle) * parseFloat (secondEle);
              console.log (result);
              exp[i] = result;
              exp.splice (i - 1, 1);
              exp.splice (i, 1);
              break;
            }
          }
          if (divPosition < multPosition || multPosition == -1) {
            if (exp[i] === '/') {
              result = parseFloat (firstEle) / parseFloat (secondEle);
              console.log (result);
              exp[i] = result;
              exp.splice (i - 1, 1);
              exp.splice (i, 1);
              break;
            }
          }
          if (divPosition === -1 && multPosition === -1) {
            if (exp[i] === '+') {
              result = parseFloat (firstEle) + parseFloat (secondEle);
              console.log (result);
              exp[i] = result;
              exp.splice (i - 1, 1);
              exp.splice (i, 1);
              break;
            }
            if (exp[i] === '-') {
              result = parseFloat (firstEle) - parseFloat (secondEle);
              console.log (result);
              exp[i] = result;
              exp.splice (i - 1, 1);
              exp.splice (i, 1);
              break;
            }
          }

          // if(exp.length === 0){
          //   exp.push(result);
          // }

          console.log (exp);
          // }
        }
      }
      if (exp.length === 1) {
        this.setState ({result: result, recentResult: 1});
      }
      return;
    }

    let sign = ['+', '-', '*', '/'];
    if (sign.includes (this.state.currentVal)) {
      //typedChar = e.target.value;
    } else {
      let lastChar = this.state.currentVal.split ('').pop ();
      if (sign.includes (lastChar) && sign.includes (typedChar)) {
        console.log ('inside if');
        return;
      }

      if (this.state.result) {
        console.log ('here result  is calculated and state is');
        //this.setState({currentVal : "dshfergiu"});

        this.state.currentVal = this.state.result;
        console.log ('after setting the state is');
        console.log (this.state.currentVal);
        this.state.result = 0;
      }

      typedChar = this.state.currentVal + typedChar;
    }

    rr.push (typedChar);
    console.log (rr);

    this.setState ({currentVal: typedChar, values: rr, recentResult: 0});
  };

  /***  handleClick = e => {
     this.state = {
      firstVal: '',
      sign: '',
      secondVal: '',
      result: '',
      recent: '',
    };
    console.log ('clicked');
    console.log (e.target.value);
    if (e.target.value === '+') {
      console.log ('lets add the values');

      if (this.state.secondVal !== '') {
        console.log ('state is ');
        console.log (this.state);
        let ff = this.state.firstVal + this.state.sign + this.state.secondVal;
        console.log ('first val');
        console.log (ff);
        this.setState ({
          firstVal: ff,
          secondVal: '',
          sign: e.target.value,
          recent: 'firstVal',
        });
        console.log ('after state set');
        console.log (this.state);
      } else {
        this.setState ({sign: e.target.value, recent: 'sign'});
      }
    } else if (e.target.value === 'cl') {
      console.log ('empty state');
      this.setState ({
        firstVal: '',
        sign: '',
        secondVal: '',
        result: '',
        recent: '',
      });
    } else if (e.target.value === 'BackSpace') {
      console.log ('BackSpace');
      console.log ('this recent value');
      console.log (this.state.recent);
      if (this.state.recent === 'sign') {
        let val = this.state.firstVal.split ('');
        val.pop ();
        this.setState ({sign: '', recent: 'first'});
      }
      if (this.state.recent === 'first') {
        console.log (this.state.firstVal);
        let val = this.state.firstVal.split ('');
        val.pop ();
        this.setState ({firstVal: val.join (''), recent: 'first'});
      }
      if (this.state.recent === 'second') {
        console.log ('second recent');
        let val = this.state.secondVal.split ('');
        val.pop ();
        // this.setState ({secondVal: val});
        //let s = val.join('') + e.target.value;
        let r = 0;
        if (val.length !== 0) {
          if (this.state.result != '') {
            r = this.state.result + parseFloat (val.join (''));
          } else {
            r = parseFloat (this.state.firstVal) + parseFloat (val.join (''));
          }

          this.setState ({
            secondVal: val.join (''),
            result: r,
            recent: 'second',
          });
        } else {
          this.setState ({
            secondVal: '',
            result: '',
            recent: 'sign',
          });
        }
      }
    } else {
      if (this.state.sign === '') {
        let val = this.state.firstVal;
        val = val + e.target.value;
        this.setState ({firstVal: val, recent: 'first'});
        console.log (this.state);
      } else {
        let r = 0;
        if (!this.state.result) {
          r = parseFloat (this.state.firstVal) + parseFloat (e.target.value);
          this.setState ({
            secondVal: e.target.value,
            result: r,
            recent: 'second',
          });
        } else {
          let s = this.state.secondVal + e.target.value;

          if (this.state.result != '') {
            console.log ('result is not empty');
            console.log (this.state.secondVal);
            console.log (e.target.value);
            console.log (s);
            console.log (this.state.result);
            console.log (this.state.recent);
            if (this.state.secondVal === '' && this.state.sign !== '') {
              console.log("second");
           //   r = this.state.result + parseFloat (s);
              r = this.state.result + parseFloat (e.target.value);
            }else {
              r = parseFloat (this.state.firstVal) + parseFloat (s);
            }
          } else {
            r = parseFloat (this.state.firstVal) + parseFloat (s);
          }
          this.setState ({secondVal: s, result: r, recent: 'second'});
        }
      }
    }
  };***/

  render () {
    let btnClasses = ['btn','btn btn-outline-info', calcss.cutomBtn];

    return (
      <div className="section">
        <div className="container">

          <div className="calcWrap row">

            {/* <div id="result" className="row">
            {this.state.firstVal}
            {this.state.sign}
            {this.state.secondVal}<br />
            {this.state.result ? '=' + this.state.result : ''}
          </div> */}

            <div className={calcss.calcWrap}>
              <div className="row">
                {/* <div id="result" className="col-md-12">
                 
                </div> */}
                <div id="result" className={calcss.result}>
                  {this.state.currentVal}<br/>
                  {this.state.result}
                </div>
                {this.board.map ((item, i) => {
                  if (item === '=') {
                    btnClasses.push (calcss.red);
                  }
                  return (
                    <div className="col-md-3 p-0" key={i}>
                      <input
                        type="button"
                        name="calfVal[btn]"
                        value={item}
                        onClick={this.handleClick}
                        className={btnClasses.join (' ')}
                      />

                    </div>
                  );
                })}
              </div>
            </div>
            {/* <div className="row">
              <input
                type="button"
                name="calfVal[isEqual]"
                value="="
                onClick={this.handleClick}
              />
              <input
                type="button"
                name="calfVal[0]"
                value="0"
                onClick={this.handleClick}
              />
              <input
                type="button"
                name="calfVal[1]"
                value="1"
                onClick={this.handleClick}
              />
              <input
                type="button"
                name="calfVal[2]"
                value="2"
                onClick={this.handleClick}
              />
              <input
                type="button"
                name="calfVal[backspace]"
                value="BackSpace"
                onClick={this.handleClick}
              />
            </div>
            <div className="row">
              <input
                type="button"
                name="calfVal[3]"
                value="3"
                onClick={this.handleClick}
              />
              <input
                type="button"
                name="calfVal[4]"
                value="4"
                onClick={this.handleClick}
              />
              <input
                type="button"
                name="calfVal[5]"
                value="5"
                onClick={this.handleClick}
              />
              <input
                type="button"
                name="calfVal[plus]"
                value="+"
                onClick={this.handleClick}
              />
            </div>
            <div className="row">
              <input
                type="button"
                name="calfVal[6]"
                value="6"
                onClick={this.handleClick}
              />
              <input
                type="button"
                name="calfVal[7]"
                value="7"
                onClick={this.handleClick}
              />
              <input
                type="button"
                name="calfVal[8]"
                value="8"
                onClick={this.handleClick}
              />
              <input
                type="button"
                name="calfVal[minus]"
                value="-"
                onClick={this.handleClick}
              />
            </div>
            <div className="row">
              <input
                type="button"
                name="calfVal[9]"
                value="9"
                onClick={this.handleClick}
              />
              <input
                type="button"
                name="calfVal[div]"
                value="/"
                onClick={this.handleClick}
              />
              <input
                type="button"
                name="calfVal[multiply]"
                value="*"
                onClick={this.handleClick}
              />
              <input
                type="button"
                name="calfVal[cl]"
                value="cl"
                onClick={this.handleClick}
              />

            </div> */}

          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
