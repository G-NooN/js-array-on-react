import { useState } from "react";
import "App.css";

function App() {
  /* 변수 */
  const originalArray = ["apple", "banana", "cherry", "date", "elderberry"];

  const [array, setArray] = useState(originalArray);
  const [resultArray, setResultArray] = useState("");
  const [query, setQuery] = useState("");

  /* 함수 */
  // input 빈 값 체크
  const checkQuery = () => {
    if (!query) {
      alert("[Error] No Input!!");
      return false;
    }
  };

  // eventHandlers
  const handleForEach = () => {
    let result = "";
    array.forEach((item, index) => {
      result += `${index}: ${item}, `;
    });
    setResultArray(result.slice(0, -2));
  };
  const handleFilter = () => {
    const filteredArray = array.filter((item) => item.includes(query));
    setResultArray(filteredArray.join(", "));
  };
  const handleMap = () => {
    const mappedArray = array.map((item) => item.toUpperCase());
    setResultArray(mappedArray.join(", "));
  };
  const handleReduce = () => {
    const reducedArray = array.reduce((acc, cur) => `${acc} + ${cur}`);
    setResultArray(reducedArray);
  };
  const handlePush = () => {
    checkQuery();
    const newArray = [...array, query];
    setArray(newArray);
    setResultArray(newArray.join(", "));
  };
  const handlePop = () => {
    const newArray = [...array];
    //REVIEW - pop() 질문
    // pop()의 return 값은 pop()한 값이다.
    // 따라서 pop()을 한 번 실행한 다음에, 해당 값이 undefined인지 확인하는 것이 내 의도이다.
    // 근데 왜, pop을 '조건문' 안에서 실행했는데, 왜 pop()한 결과가 실제 result에 반영되는 것인가?
    if (newArray.pop() === undefined) {
      alert("[Error] Nothing in Array!!");
      return;
    }
    setArray(newArray);
    setResultArray(newArray.join(", "));
  };
  const handleSlice = () => {
    const slicedArray = array.slice(0, array.length - 2);
    setResultArray(slicedArray.join(", "));
  };
  const handleSplice = () => {
    const newArray = [...array];
    newArray.splice(2, 2, "kiwi", "lime");
    setResultArray(newArray.join(", "));
  };
  const handleIndexOf = () => {
    const queryIndex = array.indexOf(query);
    setResultArray(queryIndex.toString());
  };
  const handleIncludes = () => {
    const isArrayIncludesQuery = array.includes(query);
    setResultArray(isArrayIncludesQuery.toString());
  };
  const handleFind = () => {
    const isArrayFindQuery = array.find((item) => item.includes(query));
    //REVIEW - 빈 값을 입력했는데 왜 apple이 나올까
    query === "" || isArrayFindQuery === undefined
      ? setResultArray("Not Found")
      : setResultArray(isArrayFindQuery);
  };
  const handleSome = () => {
    const isArrayFindQuery = array.some((item) => item.includes(query));
    //REVIEW - 빈 값을 입력했는데 왜 true가 나올까
    query === "" ? setResultArray("false") : setResultArray(isArrayFindQuery.toString());
  };
  const handleEvery = () => {
    const isEveryItemLengthOverFive = array.every((item) => item.length > 5);
    setResultArray(isEveryItemLengthOverFive.toString());
  };
  const handleSort = () => {
    //REVIEW - 왜 내림차순으로 설정했는데 설정이 안될까
    const sortedArray = [...array].sort((a, b) => b - a).reverse();
    setResultArray(sortedArray.join(", "));
  };
  const handleJoin = () => {
    const joinedArray = array.join(", ");
    setResultArray(joinedArray);
  };

  return (
    <div className="App">
      <h1>Standard반 배열 API</h1>
      <div>
        <input value={query} placeholder="Enter text" onChange={(e) => setQuery(e.target.value)} />
        <div>
          <button onClick={handleForEach}>forEach</button>
          <button onClick={handleFilter}>filter</button>
          <button onClick={handleMap}>map</button>
          <button onClick={handleReduce}>reduce</button>
          <button onClick={handlePush}>push</button>
          <button onClick={handlePop}>pop</button>
          <button onClick={handleSlice}>slice</button>
          <button onClick={handleSplice}>splice</button>
          <button onClick={handleIndexOf}>indexOf</button>
          <button onClick={handleIncludes}>includes</button>
          <button onClick={handleFind}>find</button>
          <button onClick={handleSome}>some</button>
          <button onClick={handleEvery}>every</button>
          <button onClick={handleSort}>sort</button>
          <button onClick={handleJoin}>join</button>
        </div>
        <div className="original">
          <strong>원본배열 : </strong> {originalArray.join(", ")}
        </div>
        <div className="result">
          <strong>결과물 : </strong> {resultArray}
        </div>
      </div>
    </div>
  );
}

export default App;
