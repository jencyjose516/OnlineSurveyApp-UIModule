import React from "react";
import { IconType } from "react-icons/lib";
import { JsxEmit } from "typescript";

interface InputProps {
  id: string;
  label?: string;
  maxLength?: number;
  minLength?: number;
  name?: string;
  placeholder?: string;
  isRequired?: boolean;
  type: "text" | "email" | "password";
  autoComplete?: "password" | "email";
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  value?: string;
  readOnly?: boolean;
}

interface RadioInputProps {
  id: string;
  name: string;
  label: string;
  type: "radio";
  value?: string;
  isRequired?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
}
interface CheckBoxInputProps {
  id: string;
  name: string;
  label: string;
  type: "checkbox";
  value?: string;
  checked?: boolean;
  isRequired?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
}

interface StarInputProps {
  id?: string;
  name: string;
  value?: string;
  isRequired?: boolean;
  size: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
}

interface TextareaProps {
  id: string;
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
  rows: number;
  autoComplete?: "password" | "email";
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
}

interface ButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
  variant: "primary" | "secondary" | "danger" | "grayed";
  wFull?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

interface DeleteButtonProps {
  deleteAction: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  wFull?: boolean;
}

interface EditProfileProps {
  disabled?: boolean;
  children: React.ReactNode;
}

interface LayoutProps {
  children: React.ReactNode;
}

interface SurveyCardProps extends DataCardProps, AddCardProps {
  type: "data" | "add";
}

interface DataCardProps {
  title?: string;
  description?: string;
  users?: User[];
  onClick: () => void;
  onDelete?: () => void;
}

interface AddCardProps {
  onClick: () => void;
}

interface ModalProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  action?: () => void;
  cancel?: boolean;
  actionType?: "danger" | "primary" | "secondary";
}

interface PopupProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  action?: () => void;
  cancel?: boolean;
  actionType?: "danger" | "primary" | "secondary";
  actionName?: string;
}

interface SelectProps {
  id: string;
  label: string;
  placeholder: string;
  isRequired?: boolean;
  multiple?: boolean;
  options: Option[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  value?: string;
}

interface ItemCreationFormProps {
  onSubmit: (item: SurveyItemCreationSubmit) => void;
}

interface SurveyDetailsProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  tags: string;
  setTags: React.Dispatch<React.SetStateAction<string>>;
  endDate: Date;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
}

interface QuestionItemsProps {
  isOpen: boolean;
  items: SurveyItem[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setItems: React.Dispatch<React.SetStateAction<SurveyItem[]>>;
}

interface DatePickerProps {
  id: string;
  label: string;
  placeholder: string;
  selectedDay: Date;
  setSelectedDays: React.Dispatch<React.SetStateAction<Date>>;
}

interface SurveyListProps {
  surveys: APISurvey[];
  handleDelete?: (uniqueId: string) => void;
}

interface ViewSurveyResponseItemProps {
  response?: APISurveyQuestionResponse[];
  survey?: APISurvey;
  user?: User;
}

interface AttendSurveyProps {
  survey: APISurvey;
  submitAction: (surveyResponse: SurveyQuestionResponseProps[]) => void;
}

interface UserProfileProps {
  user: User;
}

interface UserProfileEditViewProps {
  user: User;
  editAction: (user: User) => void;
}

interface LoaderProps {
  fullPage?: boolean;
}

interface SurveyFormProps {
  data?: APISurvey;
}

interface Error404Props {
  header: string;
  descripton: string;
}

interface CardProps {
  title: string;
  titleDesc: string;
  icon?: React.ReactNode;
  iconBg?: string;
  bodyText?: string;
  bodyDesc?: string;
  viewLink?: string;
  linkDesc?: string;
}

interface AdminDashBoardViewProps {
  adminAnalytics: APIAdminAnalytics;
}

interface UserDashBoardViewProps {
  data: UserAnalytics;
}

interface LineChartSimpleProps {
  data: APIWeeklyUserSurveyData[];
  title: string;
  xAxisLabel: string;
  lineLabel: string;
}

interface BasicTableProps {
  data: object[];
  tableHeaders: string[];
  title: string;
}

interface ProtectedRouteProps extends ReactRouteProps {
  isAuthenticated: boolean;
  authenticationPath: string;
}

type ReactRouteProps = import("react-router/").RouteProps;
