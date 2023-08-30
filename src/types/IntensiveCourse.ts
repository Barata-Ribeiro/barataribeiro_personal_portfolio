export interface IntensiveCourse {
  id: string;
  course: string;
  place: string;
}

export interface IntensiveCourseProps {
  intensiveCourses: IntensiveCourse[];
}

export interface EducationCardProps {
  year: string;
  degree: string;
  university: string;
}
