import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, Trophy, ArrowRight } from "lucide-react";
import Quiz from "@/components/Quiz";

const Index = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  if (showQuiz) {
    return <Quiz />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary text-primary-foreground py-6 px-4 shadow-strong">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold">KDAG Associates</h1>
          <p className="text-primary-foreground/90 mt-2">Selection Round 2 - Web Development Assessment</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold text-foreground mb-6">
              Web Development Knowledge Quiz
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Test your understanding of web development fundamentals including HTML, CSS, and JavaScript. 
              This interactive quiz will assess your knowledge and provide detailed feedback on your performance.
            </p>
            
            <Card className="p-8 bg-gradient-card shadow-medium max-w-2xl mx-auto mb-8 animate-slide-up">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <BookOpen className="w-12 h-12 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">6 Questions</h3>
                  <p className="text-sm text-muted-foreground">Covering HTML, CSS & JavaScript fundamentals</p>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="w-12 h-12 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Multiple Choice</h3>
                  <p className="text-sm text-muted-foreground">Select the best answer for each question</p>
                </div>
                <div className="flex flex-col items-center">
                  <Trophy className="w-12 h-12 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Instant Results</h3>
                  <p className="text-sm text-muted-foreground">Get your score and detailed explanations</p>
                </div>
              </div>
            </Card>

            <Button
              onClick={() => setShowQuiz(true)}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-bounce text-lg px-8 py-3 shadow-medium"
            >
              Start Quiz
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">What You'll Be Tested On</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-card shadow-soft animate-fade-in">
              <h4 className="text-lg font-semibold text-foreground mb-3">HTML Fundamentals</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• HTML structure and syntax</li>
                <li>• Semantic HTML elements</li>
                <li>• Document structure best practices</li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-card shadow-soft animate-fade-in">
              <h4 className="text-lg font-semibold text-foreground mb-3">CSS Styling</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• CSS properties and values</li>
                <li>• Styling techniques</li>
                <li>• Layout and positioning</li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-card shadow-soft animate-fade-in">
              <h4 className="text-lg font-semibold text-foreground mb-3">JavaScript Basics</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• JavaScript syntax</li>
                <li>• Data types and structures</li>
                <li>• DOM manipulation methods</li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-card shadow-soft animate-fade-in">
              <h4 className="text-lg font-semibold text-foreground mb-3">Best Practices</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Code organization</li>
                <li>• Web standards compliance</li>
                <li>• Modern development approaches</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-primary-foreground/90">
            KDAG Associates Selection Process • Web Development Assessment
          </p>
          <p className="text-sm text-primary-foreground/70 mt-2">
            Good luck with your assessment!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
