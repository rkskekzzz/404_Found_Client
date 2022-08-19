import React,{useState} from "react";
import { Button, TextField } from '@mui/material';
import { Container, Footer } from 'src/components';
import DatePicker from "react-datepicker";




const Create=()=>{
    const [location, setLocation]=useState('');
    const [weekStartTime, setWeekStartTime] = useState(new Date());
    const [weekEndTime, setWeekEndTime] = useState(new Date());
    const [weekendStartTime, setWeekendStartTime] = useState(new Date());
    const [weekendEndTime, setWeekendEndTime] =useState(new Date());
    const [bigBox, setBigBox] = useState('')
    const [middleBox, setMiddleBox] = useState('')
    const [smallBox, setSmallBox] = useState('')
    const [price, setPrice] = useState('');

    const handleSmallBox =(e)=>{
      setSmallBox(e.target.text);
    }
    const handleMiddleBox =(e)=>{
      setMiddleBox(e.target.text);
    }
    const handleBigBox =(e)=>{
      setBigBox(e.target.text);
    }
    // const buttonPressed=(모든 state)=>{}
   
    return (
        <>
        <div className="container">
            <h2>새로운 사물함 등록</h2>
            <div className="locationBox">
              <img className="locationImg" alt='loca.svg' src="./src/assets"/>
              <h4>위치</h4>
              <p>!!!!!!!!!tmap위치!!!!!!!!!!!!!!</p>
            </div>
            <div className="location">
              <img className="flagImg" alt="flag.svg" src="./src/assets"/>
              <h4>장소 입력</h4>  
              <TextField
                  type="lacation"
                  name="loaction"
                  value={location}
                  // onChange={}
                  id="outlined-loaction"
                  label="location"
                  variant="outlined"
                  fullWidth/>
            </div>

            <div className="pic">
              <img className="picImg" alt="pic.svg" src="./src/assets"/>
              <h4>사진</h4>
              <p>!!!!!!!!!!!!사진위치!!!!!!!!!!!!!!!</p>
            </div>

            <div className="timer">
              <img className="timeImg" alt="time.svg" src="./src/assets"/>
              <h4>운영 시간</h4>
              <div> 평일 </div>
              <DatePicker
                  selected={weekStartTime}
                  onChange={(time) => setWeekStartTime(time)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
              />
              <DatePicker
                  selected={weekEndTime}
                  onChange={(time) => setWeekEndTime(time)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
              />
              <div>주말</div>
              <DatePicker
                  selected={weekendStartTime}
                  onChange={(time) => setWeekendStartTime(time)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
              />
              <DatePicker
                  selected={weekendEndTime}
                  onChange={(time) => setWeekendEndTime(time)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
              />
            </div>
            
            <div className="price">
              <img className="walletImg" src="./src/assets" alt="wallet.svg"/>
              <p>가격 (기본요금)</p>
              <TextField type='smallBox' name="smallBox" value={smallBox} onChange={handleSmallBox} variant="outlined" label="소형" fullWidth id="outlined-smallBox"/>
              <TextField type='middleBox' name="middleBox" value={middleBox} onChange={handleMiddleBox} variant="outlined" label="중형" fullWidth id="outlined-middleBox"/>
              <TextField type='bigBox' name="bigBox" value={bigBox} onChange={handleBigBox} variant="outlined" label="대형" fullWidth id="outlined-bigBox"/>
            </div>
        <Button className="addBoxButton" variant="contained" type="submit" fullWidth>
          등록하기
        </Button>
        <Footer/>
        </div>
        </>
    );
};

export default Create;
