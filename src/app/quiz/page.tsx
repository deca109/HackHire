import Quiz from '@/components/Quiz';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">MCQ Quiz</h1>
      <Quiz />
    </main>
  );
}