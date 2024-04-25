import {Link} from 'react-router-dom'
import BasicLayout from "../layouts/BasicLayout.jsx";

function MainPage(){
    return(
        <BasicLayout>
            <div className={'text-3xl'}>
                {/*a태그를 이용하여 페이지 이동시에 페이지를 다시 그리는 비효율이 생겨 Link를 이용하여 이동*/}
                {/*<div className={'flex'}>*/}
                {/*    <Link to={'/about'}>about</Link>*/}
                {/*</div>*/}
                MainPage
            </div>
        </BasicLayout>
    );    
}

export default MainPage;