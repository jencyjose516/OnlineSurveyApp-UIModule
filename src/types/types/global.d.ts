type User = {
  username: string;
  image?: string;
  uniqueId: string;
  firstname: string;
  lastname: string;
  address: string;
  phoneNumber: string;
  email: string;
};

type Option = { label: string; value: string };

type SurveyItemCreationSubmit = {
  answerType: string;
  description: string;
  question: string;
  optionItems: string[];
};

type SurveyItem = {
  uniqueId?: string;
  answerType: string;
  description: string;
  question: string;
  optionItems: string[];
};

type AnswerType =
  | ""
  | "Single Line Text"
  | "Multi Line Text"
  | "Rating (5)"
  | "Rating (10)"
  | "Single Select Option"
  | "Multi Select Options";

type APISurvey = {
  uniqueId: string;
  name: string;
  description: string;
  startDate: string;
  expiryDate: string;
  tags: string;
  items: APIQuestionItem[];
};

type APIQuestionItem = {
  uniqueId: string;
  answerType: string;
  question: string;
  description: string;
  optionItems: string[];
};

type AuthContextInterface = {
  name: string;
  token: string;
  role: Role;
};

type Role = "Admin" | "User" | "";

type UpdateType = (auth: AuthContextInterface) => void;

type APILogin = {
  username: string;
  token: string;
  role: string;
};

type APISignUP = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

type APISurveyQuestionResponse = {
  questionId?: string;
  question?: APIQuestionItem;
  answerType?: string;
  singleAnswer?: string;
  multipleAnswer?: string[];
  answers?: string[];
};

type APISurveyResponse = {
  userId?: string;
  user?: User;
  surveyId?: string;
  survey?: APISurvey;
  responses: APISurveyQuestionResponse[];
};

type APIUserAnalytics = {
  lastname: string;
  username: string;
  points: string;
  weeklyPoints: string;
  attendedSurvey: string;
  weeklyAttendedSurvey: string;
  availableSurvey: string;
  weeklyAvailableSurvey: string;
  populerTopics: string[];
  totalTopics: string;
};

type APIWeeklyUserSurveyData = {
  date: string;
  noOfUsers: number;
};

type APIMostActiveUser = {
  user: string;
  noOfSurveysAttended: string;
};

type APIAdminAnalytics = {
  totalSurveys: string;
  weeklySurveys: string;
  totalActiveSurveys: string;
  weeklyActiveSurveys: string;
  totalUpcomingSurveys: string;
  totalSurveyResponses: string;
  totalUsers: string;
  newUsers: string;
  recentSurveys: APISurveyResponse[];
  weeklyUserSurveyData: APIWeeklyUserSurveyData[];
  mostActiveUsers: APIMostActiveUser[];
};
