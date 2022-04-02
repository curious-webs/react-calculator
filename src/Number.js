import {Component} from 'react';
class Number extends Component {
  state = {
    num: '',
    result: '',
  };
  handleChange = e => {
    console.log (e.target.value);
    this.setState ({[e.target.name]: e.target.value});
  };
  handleClick = e => {
    let nmbr = this.state.num;
    let odd = '';
    let even = '';
    let prime = 'yes';
    let sum = 0;
    let revrseStr = '';
    let arr = [];
    let palindrome = 'yes';
    /************Even/Odd******* */
    if (nmbr % 2 === 0) {
      odd = 'no';
      even = 'yes';
    } else {
      odd = 'yes';
      even = 'no';
    }
    /************Prime Number******* */
    for (let i = 2; i < nmbr; i++) {
      if (nmbr % i === 0) {
        prime = 'no';
        break;
      }
    }

    /*************Sum Of Digits *****/
    for (let i = 0; i < nmbr.split ('').length; i++) {
      sum = sum + parseInt (nmbr[i]);
      arr.unshift (nmbr[i]);
    }
    /*************Reverse String**** */
    revrseStr = arr.join ('');
    /************Palindrome******** */
    if (revrseStr !== nmbr) {
      palindrome = 'no';
    }
    this.setState ({odd, even, prime, sum, revrseStr, palindrome});
  };
  render () {
    return (
      <div>
        <h2>Number Component is loading</h2>
        <input
          type="text"
          name="num"
          value={this.state.num}
          onChange={this.handleChange}
        />
        <input type="button" value="Check" onClick={this.handleClick} />
        <div>
          <p>
            <strong> Entered Number is  :</strong>{this.state.num}
          </p>
          <p>
            <strong>Even :</strong>{this.state.even}
          </p>
          <p>
            <strong> odd :</strong>{this.state.odd}
          </p>
          <p>
            <strong> prime :</strong>{this.state.prime}
          </p>
          <p>
            <strong>Sum of Digits :</strong>{this.state.sum}
          </p>
          <p>
            <strong>Reverse :</strong>{this.state.revrseStr}
          </p>
          <p>
            <strong>Palindrome :</strong> {this.state.palindrome}
          </p>
        </div>
      </div>
    );
  }
}

export default Number;
