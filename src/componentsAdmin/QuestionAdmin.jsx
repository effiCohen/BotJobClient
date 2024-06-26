import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { API_URL, doApiGet } from '../services/apiService';
import { useNavigate } from 'react-router-dom';

function QuestionAdmin() {
  let nav = useNavigate();
  let [thisData, setThisData] = useState({});
  const ThisQuestion = useSelector(state => state.intervewSlice.ThisAdminQuestion);
  const buttons = [
    { text: "Question", tipe: "question" },
    { text: "User Answer", tipe: "userAnswer" },
    { text: "Ai Answer", tipe: "aiAnswer" }
  ];
  const [showText, setShowText] = useState();

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    let url = API_URL + "/questions/" + ThisQuestion;
    try {
      let resData = await doApiGet(url);
      setThisData(resData.data);
      setShowText(resData.data[buttons[0].tipe]);
    } catch (error) {
      console.log(error);
      nav("/admin");
    }
  };

  const onAnswerClick = (index) => {
    setShowText(thisData[buttons[index].tipe]);
  };

  const BackToQuestions = () => {
    nav("/admin/interview");
  };

  return (
    <>


      <div className="border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800" style={{ marginTop: '70px' }}>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <img onClick={() => BackToQuestions()} src="/src/assets/left-arrow.png" className="mr-3 h-6 sm:h-6" style={{ marginTop: '-110px', marginLeft: '-20px' ,height:'30px' }} alt="" />
          <h1 className="font-[Inter] text-2xl text-[#2E3837] font-bold">Details of questions and answers</h1>
          <div></div>
        </div>
      </div>



      <div className="flex items-center justify-center w-[32rem] mx-auto space-x-4" style={{ marginTop: '10px' }}>
        {buttons.map((item, index) => (
          <button
            onClick={() => onAnswerClick(index)}
            key={index}
           className="bg-[#B80672] w-[85%] lg:w-[29%] h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-300 ease-in-out shadow-md hover:scale-95 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#ac5089] before:to-[#ac5089] before:transition-all before:duration-700 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#FBF9F3] hover:text-[#FBF9F3]">
            <span className="">{buttons[index].text}</span>
            <img
              src="/src/assets/click (1).png"
              alt="Your Icon"
              className="w-4 h-4  ml-2 absolute right-2 lg:right-1 lg:flex-none hidden lg:block"
            />
          </button>
        ))}
      </div>

      {showText !== null && showText !== undefined ? (
        <div className="flex flex-col items-center w-[32rem] mx-auto shadow-md rounded-lg p-4 m-5 ">
          <p>{showText}</p>
          <div className="flex w-full justify-between py-1.5">
            <div className="flex gap-2"></div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default QuestionAdmin;

