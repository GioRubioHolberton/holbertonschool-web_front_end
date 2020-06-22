function createClassRoom(numbersOfStudents) {
	function studentSeat(seat) {
    	return function() {
            return seat;
        }
    }
    let students = [];
    for (let a = 0; a < numbersOfStudents; a++) {
        students.push(studentSeat(a + 1));
    }
    return students;
}

let classRoom = createClassRoom(10);