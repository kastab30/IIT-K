import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, XCircle, RotateCcw, Trophy } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language", 
      "HyperText Markup Language",
      "Hyperlinking Text Management Language"
    ],
    correctAnswer: 2,
    explanation: "HTML stands for HyperText Markup Language, the standard markup language for web pages."
  },
  {
    id: 2, 
    question: "Which CSS property is used to control the text size?",
    options: [
      "text-style",
      "font-size",
      "text-size", 
      "font-style"
    ],
    correctAnswer: 1,
    explanation: "The font-size property controls the size of text in CSS."
  },
  {
    id: 3,
    question: "What is the correct way to write a JavaScript array?",
    options: [
      "var colors = 'red', 'green', 'blue'",
      "var colors = (1:'red', 2:'green', 3:'blue')",
      "var colors = ['red', 'green', 'blue']",
      "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
    ],
    correctAnswer: 2,
    explanation: "JavaScript arrays are written with square brackets and comma-separated values."
  },
  {
    id: 4,
    question: "Which HTML element is used to specify a footer for a document?",
    options: [
      "<bottom>",
      "<section>", 
      "<footer>",
      "<foot>"
    ],
    correctAnswer: 2,
    explanation: "The <footer> element represents a footer for its nearest sectioning content."
  },
  {
    id: 5,
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets", 
      "Colorful Style Sheets"
    ],
    correctAnswer: 1,
    explanation: "CSS stands for Cascading Style Sheets, used to style and layout web pages."
  },
  {
    id: 6,
    question: "Which JavaScript method is used to write content to the HTML document?",
    options: [
      "document.write()",
      "document.output()",
      "document.print()",
      "document.display()"
    ],
    correctAnswer: 0,
    explanation: "document.write() is used to write content directly to the HTML document."
  }
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResults) return;
    
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(questions.length).fill(-1));
    setShowResults(false);
    setIsComplete(false);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return answer === questions[index].correctAnswer ? score + 1 : score;
    }, 0);
  };

  const getScoreMessage = (score: number) => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "Excellent work! You have a strong understanding of web development fundamentals.";
    if (percentage >= 60) return "Good job! You have a solid grasp of the concepts with room for improvement.";
    if (percentage >= 40) return "Not bad! Consider reviewing the topics and practicing more.";
    return "Keep studying! Web development takes time to master - you'll get there!";
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const score = calculateScore();

  if (showResults) {
    return (
      <div className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-card shadow-strong animate-bounce-in">
            <div className="text-center mb-8">
              <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-2">Quiz Complete!</h2>
              <div className="text-5xl font-bold text-primary mb-2">
                {score}/{questions.length}
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                {getScoreMessage(score)}
              </p>
            </div>

            <div className="space-y-6">
              {questions.map((question, index) => (
                <Card key={question.id} className="p-6 border-l-4 border-l-primary">
                  <div className="flex items-start gap-3">
                    {selectedAnswers[index] === question.correctAnswer ? (
                      <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-6 h-6 text-error flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-3">
                        {index + 1}. {question.question}
                      </h3>
                      <div className="space-y-2">
                        {question.options.map((option, optionIndex) => (
                          <div
                            key={optionIndex}
                            className={`p-3 rounded-lg border ${
                              optionIndex === question.correctAnswer
                                ? "bg-success/10 border-success text-success-foreground"
                                : optionIndex === selectedAnswers[index] && selectedAnswers[index] !== question.correctAnswer
                                ? "bg-error/10 border-error text-error-foreground"
                                : "bg-muted border-border"
                            }`}
                          >
                            {option}
                            {optionIndex === question.correctAnswer && (
                              <span className="ml-2 text-sm font-medium">✓ Correct</span>
                            )}
                            {optionIndex === selectedAnswers[index] && selectedAnswers[index] !== question.correctAnswer && (
                              <span className="ml-2 text-sm font-medium">✗ Your answer</span>
                            )}
                          </div>
                        ))}
                      </div>
                      {question.explanation && (
                        <div className="mt-3 p-3 bg-accent rounded-lg">
                          <p className="text-sm text-accent-foreground">
                            <strong>Explanation:</strong> {question.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button 
                onClick={handleRestart}
                variant="default"
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-smooth"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Take Quiz Again
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-foreground">KDAG Web Development Quiz</h1>
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <Progress value={progress} className="w-full h-2" />
        </div>

        {/* Question Card */}
        <Card className="p-8 mb-8 bg-gradient-card shadow-medium animate-slide-up">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            {questions[currentQuestion].question}
          </h2>
          
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-smooth hover:shadow-soft ${
                  selectedAnswers[currentQuestion] === index
                    ? "border-primary bg-primary/10 text-primary-foreground"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                    selectedAnswers[currentQuestion] === index
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border"
                  }`}>
                    {selectedAnswers[currentQuestion] === index && (
                      <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                    )}
                  </div>
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center animate-fade-in">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            variant="outline"
            className="transition-smooth"
          >
            Previous
          </Button>

          <div className="flex gap-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index <= currentQuestion
                    ? "bg-primary"
                    : "bg-border"
                }`}
              />
            ))}
          </div>

          {!isComplete ? (
            <Button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === -1}
              variant="default"
              className="bg-gradient-primary hover:opacity-90 transition-smooth"
            >
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              variant="default"
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-smooth"
            >
              Submit Quiz
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;