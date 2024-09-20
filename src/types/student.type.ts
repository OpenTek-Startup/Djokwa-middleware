export type student = {
  name: string;
  discipline: disciplineType;
  attendance: studentAttendanceType;
};

type disciplineType = {
  noise: boolean;
  play: boolean;
  indiscipline: boolean;
};

type studentAttendanceType = {
  presence: boolean;
  absence: boolean;
};
