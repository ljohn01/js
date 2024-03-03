// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140 //late x0.10
      }
    }
  ];
  
  // START OF WORK
try {
  function getPercent(score, points_possible) {
    return (score / points_possible)*100;
  }


// checking if work is on time
const workOnTime = (submitted_at, due_at) => {
    return submitted_at <= due_at;
}

// checking if work for assignment 1 is late
const workLate1 = (due_at) => {
    return due_at <= "2023-01-25"
}

// checking if work for assignment 2 is late
const workLate2 = (due_at) => {
    return due_at <= "2023-02-27"
}
} catch (error) {
    return  error;
}



  function getLearnerData(course, ag, submissions) {

    const result = [
      {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0 // 150 / 150
      },
      {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833 // late: (140 - 15) / 150
      }
    ];
  
    return result;
  }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  const realResult1 = getPercent(197, 200); //weighted score and the points possible stays the same
  const realResult2 = getPercent(165, 200); //weighted score (-10% for late work) and the points possible stays the same
  


  console.log("Over both assignments 1 and 2, Learner ID 125 scored a ",realResult1,"%.");
  console.log("Over both assignments 1 and 2, Learner ID 132 scored a weighted average of ",realResult2,"%.");

  console.log(result);
  
