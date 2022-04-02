let handleClick = e => {
  console.log ('clicked...');
  console.log (e.target);
  console.log (e.target.value);

 
};

let Calf = () => {
  return (
    <div>
      <h1>Calculator from Functional Component</h1>

      <div className="calcWrap">
        <div className="row">
          <input type="text" id="result" name="result" value="" />
        </div>
        <div className="row">
          <input
            type="button"
            name="calfVal[0]"
            value="0"
            onClick={handleClick}
          />
          <input type="button" name="calfVal[1]" value="1" />
          <input type="button" name="calfVal[2]" value="2" />
          <input type="button" name="calfVal[backspace]" value="BackSpace" />
        </div>
        <div className="row">
          <input type="button" name="calfVal[3]" value="3" />
          <input type="button" name="calfVal[4]" value="4" />
          <input type="button" name="calfVal[5]" value="5" />
          <input type="button" name="calfVal[plus]" value="+" />
        </div>
        <div className="row">
          <input type="button" name="calfVal[6]" value="6" />
          <input type="button" name="calfVal[7]" value="7" />
          <input type="button" name="calfVal[8]" value="8" />
          <input type="button" name="calfVal[minus]" value="-" />
        </div>
        <div className="row">
          <input type="button" name="calfVal[9]" value="9" />
          <input type="button" name="calfVal[div]" value="/" />
          <input type="button" name="calfVal[multiply]" value="*" />
          <input type="button" name="calfVal[cl]" value="cl" />

        </div>

      </div>

    </div>
  );
};

export default Calf;
