export type EventType = {
  title: string;
  subtitle: string;
  // dateDebut: string;
  // dateFin: string;
  audience?: string;
  additionlInfo?: string;
  // startTime?: string;
  // endTime?: string;
  datePeriod?: string;
  TimePeriod?: string;
  borderColor?: string;
  status: 'Declined' | 'Accepted' | 'Terminated' | 'extended';
  // onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
