export interface Project {
    id: string;
    title: string;
    desc: string;
    img: string;
    alt: string;
    tech: string[];
    repo: string;
    demo: string;
}

export interface HigherEducationCourse {
    year: string;
    type: string;
    degree: string;
    university: string;
}

export interface IntensiveCourse {
    id: string;
    course: string;
    place: string;
}

export interface FileData {
    projects: Project[];
    higherEducationCourses: HigherEducationCourse[];
    intensiveCourses: IntensiveCourse[];
}
