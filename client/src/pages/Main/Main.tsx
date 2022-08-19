import React from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { Footer } from 'src/components';
import SearchBar from './components';

const Main = () => {
  return (
    <>
      <SearchBar />
      <div>
        <Map
          center={{
            // 지도의 중심좌표
            lat: 33.450701,
            lng: 126.570667,
          }}
          style={{
            // 지도의 크기
            width: '100%',
            height: '100vh',
          }}
          level={3}
        />
      </div>
      <Footer />
    </>
  );
};

export default Main;
