'use client'
import React, { useState, useEffect } from 'react';
import { decode } from 'html-entities';

interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface ApiResponse {
  response_code: number;
  results: Question[];
}

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sessionToken, setSessionToken] = useState<string | null>(null);

  useEffect(() => {
    getSessionToken();
  }, []);

  const getSessionToken = async () => {
    try {
      const response = await fetch('https://opentdb.com/api_token.php?command=request');
      const data = await response.json();
      if (data.response_code === 0) {
        setSessionToken(data.token);
        fetchQuestions(data.token);
      } else {
        throw new Error('Failed to get session token');
      }
    } catch (error) {
      console.error('Error getting session token:', error);
      setError('Failed to initialize quiz. Please try again later.');
      setLoading(false);
    }
  };

  const fetchQuestions = async (token: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`https://opentdb.com/api.php?amount=10&token=${token}`);
      if (!response.ok) {
        if (response.status === 429) {
          throw new Error('Rate limit exceeded. Please wait a moment and try again.');
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: ApiResponse = await response.json();
      console.log('API Response:', data);
      
      if (data.response_code === 0 && data.results && data.results.length > 0) {
        setQuestions(data.results);
      } else if (data.response_code === 4) {
        // Token empty, reset token and fetch new questions
        await getSessionToken();
      } else {
        throw new Error(`API Error: ${getErrorMessage(data.response_code)}`);
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
      setError(`Failed to load questions: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  const getErrorMessage = (responseCode: number): string => {
    switch (responseCode) {
      case 1:
        return "No results found. The API doesn't have enough questions for your query.";
      case 2:
        return "Invalid parameter. Check the API documentation for the correct parameters.";
      case 3:
        return "Session Token not found. Generate a new session token.";
      case 4:
        return "Session Token has retrieved all possible questions for the specified query.";
      default:
        return "Unknown error occurred.";
    }
  };

  const handleAnswerClick = (answer: string) => {
    if (answer === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const shuffleAnswers = (question: Question) => {
    return [...question.incorrect_answers, question.correct_answer]
      .sort(() => Math.random() - 0.5)
      .map(answer => decode(answer));
  };

  const handleRetry = () => {
    if (sessionToken) {
      fetchQuestions(sessionToken);
    } else {
      getSessionToken();
    }
  };

  if (loading) {
    return <div className="quiz-container">Loading questions...</div>;
  }

  if (error) {
    return (
      <div className="quiz-container">
        <p>Error: {error}</p>
        <button onClick={handleRetry}>Retry</button>
      </div>
    );
  }

  if (questions.length === 0) {
    return <div className="quiz-container">No questions available. Please try again.</div>;
  }

  if (showScore) {
    return (
      <div className="quiz-container">
        <h2>You scored {score} out of {questions.length}</h2>
        <button onClick={handleRetry}>Play Again</button>
      </div>
    );
  }

  const currentQuestionData = questions[currentQuestion];
  const answers = shuffleAnswers(currentQuestionData);

  return (
    <div className="quiz-container">
      <h2>Question {currentQuestion + 1}/{questions.length}</h2>
      <p>{decode(currentQuestionData.question)}</p>
      <div className="answers">
        {answers.map((answer, index) => (
          <button key={index} onClick={() => handleAnswerClick(answer)}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;