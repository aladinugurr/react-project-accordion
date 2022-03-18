import data from './data';
import react,{useState} from 'react'
import Questions from './Questions';
import './index.css';

function App() {
  const [questions , setQuestions] = useState(data);
  return (
    <main>
    <div className='container'>
       
      
           <h3>Questions And Answers About Login</h3>      
          
          <div className='info'>
        {questions.map((question)=>{
           return <Questions key={question.id} {...question}/>
        })}
       </div>
     
     
      </div>
      </main>
  );
}

export default App;
