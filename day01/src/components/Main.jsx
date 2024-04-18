const number = 10;
const obj = {a:1};
const Main = () => {
    return(
        <main>
            <h1>main</h1>
            <h2>{number % 2 == 0 ? "짝수" : "홀수"}</h2>
            {10},{number},{[1,2,3]}
            <hr/>
            {true}
            {undefined}
            {null}
            {obj.a}
        </main>
    );
}

export default Main;