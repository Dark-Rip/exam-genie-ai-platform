
export interface Exam {
  id: string;
  title: string;
  subject: string;
  timeLimit: number; // in minutes
  questionCount: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  status?: 'Not Started' | 'In Progress' | 'Completed';
}

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  text: string;
  type: 'multiple-choice' | 'short-answer';
  options?: Option[];
}

// Mock exams data
export const exams: Exam[] = [
  {
    id: '1',
    title: 'Introduction to Algebra',
    subject: 'Mathematics',
    timeLimit: 45,
    questionCount: 20,
    difficulty: 'Easy',
    status: 'Not Started',
  },
  {
    id: '2',
    title: 'Advanced Calculus',
    subject: 'Mathematics',
    timeLimit: 60,
    questionCount: 15,
    difficulty: 'Hard',
    status: 'Not Started',
  },
  {
    id: '3',
    title: 'Cell Biology Fundamentals',
    subject: 'Biology',
    timeLimit: 50,
    questionCount: 25,
    difficulty: 'Medium',
    status: 'In Progress',
  },
  {
    id: '4',
    title: 'Chemical Reactions',
    subject: 'Chemistry',
    timeLimit: 55,
    questionCount: 22,
    difficulty: 'Medium',
    status: 'Not Started',
  },
  {
    id: '5',
    title: 'English Literature',
    subject: 'English',
    timeLimit: 40,
    questionCount: 30,
    difficulty: 'Easy',
    status: 'Completed',
  },
  {
    id: '6',
    title: 'World History: 20th Century',
    subject: 'History',
    timeLimit: 60,
    questionCount: 40,
    difficulty: 'Medium',
    status: 'Not Started',
  },
];

// Mock questions data
export const questions: Question[] = [
  {
    id: '1',
    text: 'What is the value of x in the equation 2x + 5 = 15?',
    type: 'multiple-choice',
    options: [
      { id: 'a', text: 'x = 5' },
      { id: 'b', text: 'x = 7' },
      { id: 'c', text: 'x = 8' },
      { id: 'd', text: 'x = 10' },
    ],
  },
  {
    id: '2',
    text: 'Which of the following is the derivative of f(x) = x³?',
    type: 'multiple-choice',
    options: [
      { id: 'a', text: '3x²' },
      { id: 'b', text: '3x' },
      { id: 'c', text: 'x²' },
      { id: 'd', text: '3' },
    ],
  },
  {
    id: '3',
    text: 'Explain the process of photosynthesis and why it is important for life on Earth.',
    type: 'short-answer',
  },
  {
    id: '4',
    text: 'Which of the following is NOT a primary function of the cell membrane?',
    type: 'multiple-choice',
    options: [
      { id: 'a', text: 'Regulating what enters and exits the cell' },
      { id: 'b', text: 'Providing structural support to the cell' },
      { id: 'c', text: 'Energy production through cellular respiration' },
      { id: 'd', text: 'Cell-to-cell recognition and communication' },
    ],
  },
  {
    id: '5',
    text: 'Balance the following chemical equation: H₂ + O₂ → H₂O',
    type: 'multiple-choice',
    options: [
      { id: 'a', text: 'H₂ + O₂ → H₂O' },
      { id: 'b', text: '2H₂ + O₂ → 2H₂O' },
      { id: 'c', text: 'H₂ + 2O₂ → H₂O' },
      { id: 'd', text: '2H₂ + 2O₂ → 2H₂O' },
    ],
  },
  {
    id: '6',
    text: 'Which literary technique involves giving human qualities to non-human objects?',
    type: 'multiple-choice',
    options: [
      { id: 'a', text: 'Metaphor' },
      { id: 'b', text: 'Simile' },
      { id: 'c', text: 'Personification' },
      { id: 'd', text: 'Alliteration' },
    ],
  },
  {
    id: '7',
    text: 'What was a major cause of World War I?',
    type: 'multiple-choice',
    options: [
      { id: 'a', text: 'The assassination of Archduke Franz Ferdinand' },
      { id: 'b', text: 'The Great Depression' },
      { id: 'c', text: 'The invention of nuclear weapons' },
      { id: 'd', text: 'The Russian Revolution' },
    ],
  },
  {
    id: '8',
    text: 'Describe the main themes in George Orwell\'s "1984" and their relevance today.',
    type: 'short-answer',
  },
  {
    id: '9',
    text: 'Which of the following best represents the quadratic formula?',
    type: 'multiple-choice',
    options: [
      { id: 'a', text: 'x = (-b ± √(b² - 4ac)) / 2a' },
      { id: 'b', text: 'x = (-b ± √(b² + 4ac)) / 2a' },
      { id: 'c', text: 'x = (b ± √(b² - 4ac)) / 2a' },
      { id: 'd', text: 'x = (-b ± √(4ac - b²)) / 2a' },
    ],
  },
  {
    id: '10',
    text: 'Explain the significance of DNA replication in cell division.',
    type: 'short-answer',
  },
];
