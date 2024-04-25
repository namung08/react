import './css/Header.css';
import {memo, useEffect, useState} from "react";

const Header = () => {
    const [date, setDate] = useState(new Date().toLocaleString()); // 현재 시간을 초기값으로 설정

    useEffect(() => {
        const timer = setInterval(() => { // 1초마다 날짜와 시간을 갱신
            setDate(new Date().toLocaleString());
        }, 1000);

        return () => clearInterval(timer); // 컴포넌트가 언마운트될 때 타이머 정리
    }, []);

    return (
        <div className="Header">
            <h3>오늘은 🗓️</h3>
            <h1>{date}</h1>
        </div>
    );
}

// const memoizedHeader = memo(Header)
// export default memoizedHeader;

export default memo(Header)