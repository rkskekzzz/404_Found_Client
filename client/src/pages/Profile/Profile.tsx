import React from 'react';
import { Footer } from 'src/components';
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

const dummy = {
  "id": 1,
  "locker": null,
  "number": 12,
  "password": "1217",
  "usage_time": "2022-08-19T06:42:16.122888Z"
}


const Profile = () => {
  const [name, setName] = useState<string>('');
  const [useNumber, setuseNumber] = useState(dummy.number);
  const [passWord, setpassWord] = useState(dummy.password);
  const [useTime, setuseTime] = useState(dummy.usage_time);


  return (
    <Container>
      <div className='title'>
        <h2>마이 페이지</h2>
      </div>
      <div className='top'>
        <div className='topBox'>
          <img src='./locker.png' alt='logo' />
          <p className='name'>{name}</p>
          <p>님 반가워요!</p>
        </div>
        <Button className='Logout'>로그아웃</Button>
      </div>
      <div className='middle'>
        <p>사용중인 사물함</p>
        <div className='middleBox'>
          <div className='middleBoxTop'>
            <img src='./gps.png' alt='gps' />
            <div>
              <div className='place'>
                <h2>중앙로역 2번출구</h2>
                <p className='detail'>detail</p>
              </div>
              <div className='numbers'>
                <p>사용번호</p>
                <p className='user'>{useNumber}</p>
                <p>비밀번호</p>
                <p className='user'>{passWord}</p>
              </div>
            </div>
          </div>
          <div className='time'>
            <div >사용시간 :</div>
            <p className='user'>{useTime}</p>
          </div>
        </div>
        <div className='complete'>
          사용 완료
        </div>
        <Button className='leave'>탈퇴하기</Button>
      </div>
      <Footer />
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;

  .user{
    color: #2694FF;
  }
  .title{
    display: flex;
    justify-content: center; 
    width: 100vw;
    border-bottom: 0.5px solid #D2D2D2;
    margin-bottom: 2vh;
  }

  .top{
    display: flex;
    flex-direction: column;

    .topBox{
      display: flex;
      width: 90vw;
      height: 15vh;
      align-items: center;
      background: #FFFFFF;
      box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.1);
      border-radius: 6px;
        
        img{
          margin: 10px;
        }
        .name{
          color: #2694FF;
        }
    }
    .Logout{
      color: #2694FF;
      align-self: flex-end;
    }
  }
  .middle{
    display: flex;
    flex-direction: column;

    .middleBox{
      display: flex;
      flex-direction: column;
      width: 90vw;
      height: 35vh;
      background: #FFFFFF;
      box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.1);
      border-radius: 6px;
      padding: 4vh;

        img{
          width: 16px;
          height: 20px;
          margin-top: 1vh;
          margin-right: 2vw;
          align-self: flex-start;
        }

        .middleBoxTop{
          display: flex;
          height: 65%;
          align-items: flex-start;
          
          h2{
            margin-block-start: 0;
            margin-block-end: 0;
          }
          p{
            margin-block-start: 0;
            margin-block-end: 0;
          }
          .place{
            width: 70vw;
            padding-bottom: 2vh;
            border-bottom: 0.5px solid #D2D2D2;
          }
          .numbers{
            font-size: 0.8rem;
            padding-top: 2vh;
          }
        }
        .time{
          margin-top: 10%;
          display: flex;
          justify-content: center; 
          align-self: flex-end;
        }
      }
      .detail{
        font-size: 0.6rem;
        color : #8B8B8B;
      }
    }
  }
  .complete{
    width: 100%;
    display: flex;
    justify-content: center; 
    background-color: #65B3FF;
    color : white;
    margin-top: 3vh;
    border-radius: 6px;
  }
  .leave{
    align-self: flex-end;
    color: #CBCBCB
  }
`