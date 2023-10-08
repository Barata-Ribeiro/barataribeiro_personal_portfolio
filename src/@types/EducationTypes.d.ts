export interface IntensiveCourse {
  id: string;
  course: string;
  place: string;
}

export interface IntensiveCourseProps {
  intensiveCourses: IntensiveCourse[];
}

export interface HigherEducationCourse {
  year: string;
  degree: string;
  university: string;
}

export interface HigherEducationProps {
  highEducationCourses: HigherEducationCourse[];
}

export type DataEducation = IntensiveCourseProps & HigherEducationProps;
