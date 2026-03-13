"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Course = {
  title: string;
  description: string;
  image: string;
};

type CoursesSectionProps = {
  courses: Course[];
  skoolCommunityUrl: string;
  skoolClassroomUrl: string;
};

function CourseCard({
  course,
  isAnimated,
  index = 0,
  skoolClassroomUrl,
}: {
  course: Course;
  isAnimated: boolean;
  index?: number;
  skoolClassroomUrl: string;
}) {
  const content = (
    <>
      <a href={skoolClassroomUrl} target="_blank" rel="noopener noreferrer" className="course-link">
        <div className="course-cover">
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 25vw"
            className="course-cover-img"
          />
        </div>
        <div className="course-body">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
        </div>
      </a>
    </>
  );

  if (isAnimated) {
    return (
      <motion.article
        className="course-card"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
      >
        {content}
      </motion.article>
    );
  }

  return <article className="course-card">{content}</article>;
}

export default function CoursesSection({
  courses,
  skoolCommunityUrl,
  skoolClassroomUrl,
}: CoursesSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const initialCourses = courses.slice(0, 8);
  const moreCourses = courses.slice(8);

  return (
    <>
      <div className="courses-grid">
        {initialCourses.map((course) => (
          <CourseCard
            key={course.title}
            course={course}
            isAnimated={false}
            skoolClassroomUrl={skoolClassroomUrl}
          />
        ))}
        <AnimatePresence>
          {expanded &&
            moreCourses.map((course, index) => (
              <CourseCard
                key={course.title}
                course={course}
                isAnimated
                index={index}
                skoolClassroomUrl={skoolClassroomUrl}
              />
            ))}
        </AnimatePresence>
      </div>

      <div className="section-cta">
        {expanded ? (
          <div className="section-cta-expanded">
            <a
              className="button button-primary courses-see-all"
              href={skoolCommunityUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to the community
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <p className="courses-community-text">Join our free community built for AI.</p>
          </div>
        ) : (
          <button
            type="button"
            className="button button-primary courses-see-all"
            onClick={() => setExpanded(true)}
          >
            See all
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </>
  );
}
