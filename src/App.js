import React from "react";
import Button from './button/button';
import c from './App.css';
import { OnClickFUNC } from './scripts/script';

class App extends React.Component {
  render() {
    return <>
      <div className='main_table'>
        <div className='container'>
          <Button id={1} OnClickFUNC={OnClickFUNC} />
          <div className='lineV V-Up'></div>
          <Button id={2} OnClickFUNC={OnClickFUNC} />
          <div className='lineV V-Up'></div>
          <Button id={3} OnClickFUNC={OnClickFUNC} />
          <div className="lineH H-Left"></div>
          <div className="lineH"></div>
          <div className="lineH"></div>
          <div className="lineH"></div>
          <div className="lineH H-right"></div>
          <Button id={4} OnClickFUNC={OnClickFUNC} />
          <div className='lineV'></div>
          <Button id={5} OnClickFUNC={OnClickFUNC} />
          <div className='lineV'></div>
          <Button id={6} OnClickFUNC={OnClickFUNC} />
          <div className="lineH H-Left"></div>
          <div className="lineH"></div>
          <div className="lineH"></div>
          <div className="lineH"></div>
          <div className="lineH H-right" ></div>
          <Button id={7} OnClickFUNC={OnClickFUNC} />
          <div className='lineV V-Down'></div>
          <Button id={8} OnClickFUNC={OnClickFUNC} />
          <div className='lineV V-Down'></div>
          <Button id={9} OnClickFUNC={OnClickFUNC} />
        </div>
        <div className={c.info}>
          <h1 className='info_text'>Score:</h1>
          <p className='info_text firstPlayer__name'>Player 1: </p>
          <p className='info_text secondPlayer__name'>Player 2: </p>
        </div>
      </div>
    </>
  }
};

export default App;