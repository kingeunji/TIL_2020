import React from 'react';
import './App.css';
import Hello from './components/Hello';

const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
};

function App() {
  const name = 'react';
  return (
    <div>
      <Hello/>
      {name} 님! 환영합니다!
      <div style={style}>영역</div>
      <div className="gray-box"></div>
    </div>
  );
}

export default App;
