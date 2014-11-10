var Student = function (fname, lname) {
  this.name = fname + " " + lname;
  this.courses = []
};

// Student.prototype.courses = function () {
// };

Student.prototype.enroll = function (course) {
  if (!this.courses.indexOf(course) === -1) {
    this.courses.push(course);
    course.students.push(this);
  }
};

Student.prototype.courseLoad = function () {
  var cLoad = {};
  for (var i = 0; i < this.courses.length; i++) {
    var currCourse = this.courses[i];
    if (cLoad.(currCourse.dept) === undefined) {
      cLoad.(currCourse.dept) === currCourse.credits;
    } else {
      cLoad.(currCourse.dept) += currCourse.credits;
    }
  }
  return cLoad;
}

var Course = function (courseName, dept, credits) {
  this.courseName = courseName;
  this.dept = dept;
  this.credits = credits;
  this.students = [];
};

Course.prototype.add_student = function (student) {
  student.enroll(this);
};