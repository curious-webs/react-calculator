import React, {Component} from 'react';
import as1css from './Assignment1.module.css';

class Assignment1 extends Component {
  constructor () {
    super ();
    this.state = {students: [], currentVal: {roll: '', stuName: ''},error:false};
  }
 handleChange = e => {
    let arr = this.state.currentVal;
    arr[e.target.name] = e.target.value;
    this.setState ({currentVal: arr});
  };
  handleClick = e => {
    if (e.target.name === 'removeRecord') {
      console.log ('removed');
      let arrIndex = this.state.students.findIndex (
        item => item.roll === e.target.value
      );
      console.log (arrIndex);
      let newArr = this.state.students;
      newArr.splice (arrIndex, 1);
      console.log (newArr);
      this.setState ({students: newArr});
    } else {
      // console.log ('clicked');

      let arrIndex = this.state.students.findIndex (
        item => item.roll === this.state.currentVal.roll
      );
      if (arrIndex === -1) {
        let arr = this.state.students;
        arr.push (this.state.currentVal);

        this.setState ({students: arr, currentVal: {roll: '', stuName: ''}});
      } else {
        this.setState ({currentVal: {roll: '', stuName: ''},error:true});
      }
    }
  };
  render () {
    // console.log ('render state');
    // console.log (this.state);
    // console.log("renderrrrr ");
    // console.log(this.state.currentVal);
    //   console.log(this.state.currentVal.length);
    const isEmpty = Object.keys (this.state.currentVal).length === 0;
    // if (isEmpty) {
    //   console.log ('Empty');
    // } else {
    //   console.log ('Not Empty');
    // }
    return (
      <div>
        <h1>Assignemnet 1 </h1>
        <p>
          Add Student Name and Roll Number. Display them in box and give functionality to remove also

        </p>
        <p className={this.state.error ? "error" : 'hide'}>Roll Number Already Exist. Please Try Again</p>
        <div className={as1css.row}>
          <input
            type="text"
            name="roll"
            id=""
            value={isEmpty ? '' : this.state.currentVal.roll}
            placeholder="Enter Roll"
            required
            className='input'
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="stuName"
            id=""
            value={isEmpty ? '' : this.state.currentVal.stuName}
            placeholder="Enter Name"
            required
            className='input'
            onChange={this.handleChange}
          />
          <input
            type="button"
            name=""
            id=""
            value="Add"
            className='btn'
            onClick={this.handleClick}
          />
        </div>
        <div className={as1css.row}>
          {this.state.students &&
            this.state.students.map ((item, i) => {
              return (
                <div key={item.roll} className={as1css.box}>
                  <div key={item.roll} className={as1css.innerBox}>
                    <p><strong>Roll Number : </strong>{item.roll}</p>
                    <p><strong>Name : </strong>{item.stuName}</p>
                    <button
                      name="removeRecord"
                      id="removeRecord"
                      value={item.roll}
                      className={as1css.removeRecord}
                      onClick={this.handleClick}
                    >
                      X
                    </button>
                  </div>
                </div>
              );
            })}

        </div>
      </div>
    );
  }
}

export default Assignment1;
