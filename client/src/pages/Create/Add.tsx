import React,{useState} from "react";
import { Button, TextField } from '@mui/material';
import { type } from '../Main/components/SearchBar';
import { Container } from 'src/components';
import DatePicker from "react-datepicker";




const Add=()=>{
    const [location, setLocation]=useState('');
    const [weekStartTime, setWeekStartTime] = useState(new Date());
    const [weekEndTime, setWeekEndTime] = useState(new Date());
    const []
    const [price, setPrice] = useState('');
   
   
    return (
        <>
        <Container>
            <h2>새로운 사물함 등록</h2>
            <img className="locationImg" alt='loca.svg' src="./src/assets"/>
            <h4>tmap위치</h4>
            <img className="flagImg" alt="flag.svg" src="./src/assets"/>
            <h4>장소 입력</h4>
            <TextField
                type="lacation"
                name="loaction"
                value={location}
                onChange={}
                id="outlined-loaction"
                label="location"
                variant="outlined"
                fullWidth/>
            <img className="picImg" alt="pic.svg" src="./src/assets"/>
            <h4>사진</h4>
            <h4>사진위치</h4>
            <img className="timeImg" alt="time.svg" src="./src/assets"/>
            <h4>운영 시간</h4>
            <div> 평일 </div>
            <DatePicker
                selected={startTime}
                onChange={(time) => setStartTime(time)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
            />
            <DatePicker
                selected={endTime}
                onChange={(time) => setEndTime(time)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
            />
            <div>주말</div>
            <DatePicker
                selected={startTime}
                onChange={(time) => setStartTime(time)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
            />
            <DatePicker
                selected={endTime}
                onChange={(time) => setEndTime(time)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
            />
            <img className="walletImg" src="./src/assets" alt="wallet.svg"/>
            <h4>가격 (기본요금)</h4>
            <Button className="smallBox" fullWidth type="submit" variant="outlined" onClick={(setPrice)}></Button>
            

        </Container>
        </>
    );
};

export default Add;