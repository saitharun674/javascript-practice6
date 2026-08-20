// ============================================
// JAVASCRIPT EMPLOYEE MANAGEMENT SYSTEM
// ============================================
 
// 1. CREATE EMPLOYEE ARRAY
// ============================================
 
let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2,
        skills: ["HTML", "CSS", "JavaScript"],
        joiningDate: new Date("2022-06-15")
    },
 
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 38000,
        experience: 3,
        skills: ["Recruitment", "Communication"],
        joiningDate: new Date("2021-04-10")
    },
 
    {
        id: 103,
        name: "Rahul",
        department: "Finance",
        salary: 65000,
        experience: 5,
        skills: ["Excel", "Accounting"],
        joiningDate: new Date("2019-08-20")
    },
 
    {
        id: 104,
        name: "Sneha",
        department: "IT",
        salary: 75000,
        experience: 4,
        skills: ["Java", "Python", "SQL"],
        joiningDate: new Date("2020-01-15")
    },
 
    {
        id: 105,
        name: "Kiran",
        department: "Marketing",
        salary: 28000,
        experience: 1,
        skills: ["SEO", "Marketing"],
        joiningDate: new Date("2023-07-05")
    },
 
    {
        id: 106,
        name: "Anjali",
        department: "IT",
        salary: 55000,
        experience: 2,
        skills: ["JavaScript", "React", "Node.js"],
        joiningDate: new Date("2022-09-12")
    },
 
    {
        id: 107,
        name: "Vikram",
        department: "Sales",
        salary: 42000,
        experience: 3,
        skills: ["Sales", "Communication"],
        joiningDate: new Date("2021-11-18")
    },
 
    {
        id: 108,
        name: "Ravi",
        department: "Management",
        salary: 120000,
        experience: 8,
        skills: ["Leadership", "Management"],
        joiningDate: new Date("2016-03-25")
    }
];
 
 
// ============================================
// 2. DISPLAY ALL EMPLOYEES
// Use forEach()
// ============================================
 
function displayEmployees() {
 
    console.log("===== ALL EMPLOYEES =====");
 
    employees.forEach(function(employee) {
 
        console.log(
            "ID:", employee.id,
            "| Name:", employee.name,
            "| Department:", employee.department,
            "| Salary:", employee.salary,
            "| Experience:", employee.experience
        );
 
    });
}

displayEmployees();
 
 
// ============================================
// 3. FIND EMPLOYEES
// Salary greater than ₹40,000
// Use filter()
// ============================================
 
function filterHighSalaryEmployees() {
 
    let highSalaryEmployees = employees.filter(function(employee) {
 
        return employee.salary > 40000;
 
    });
 
    console.log("===== SALARY ABOVE ₹40,000 =====");
 
    console.log(highSalaryEmployees);
 
    return highSalaryEmployees;
}
 
filterHighSalaryEmployees();
 
// ============================================
// 4. FIND PARTICULAR EMPLOYEE
// Use find()
// ============================================
 
function searchEmployee(id) {
 
    let employee = employees.find(function(employee) {
 
        return employee.id === id;
 
    });
 
    if (employee) {
 
        console.log("===== EMPLOYEE FOUND =====");
 
        console.log(employee);
 
    } else {
 
        console.log("Employee not found.");
 
    }
 
    return employee;
}
searchEmployee(101);

 
 
// ============================================
// 5. CALCULATE TOTAL SALARY
// Use reduce()
// ============================================
 
function calculateTotalSalary() {
 
    let totalSalary = employees.reduce(function(total, employee) {
 
        return total + employee.salary;
 
    }, 0);
 
    console.log("Total Salary = ₹" + totalSalary);
 
    return totalSalary;
}
calculateTotalSalary();
 

// =================================================
// 6. CHECK SALARY CONDITION
// Use some()
// =================================================
 
let salaryAboveOneLakh = employees.some(function(employee) {
    return employee.salary > 100000;
});
 
console.log(
    "Is there an employee earning above ₹1,00,000?",
    salaryAboveOneLakh
);
 
if (salaryAboveOneLakh) {
 
    let employee = employees.find(function(employee) {
        return employee.salary > 100000;
    });
 
    console.log("===== EMPLOYEE EARNING ABOVE ₹1,00,000 =====");
 
    console.log(
        "ID:", employee.id,
        "| Name:", employee.name,
        "| Department:", employee.department,
        "| Salary:", employee.salary,
        "| Experience:", employee.experience
    );
}

 
// ============================================
// 7. CHECK EXPERIENCE
// Use every()
// ============================================
 
let allHaveExperience = employees.every(function(employee) {
 
    return employee.experience >= 1;
 
});
 
console.log(
    "Does every employee have at least 1 year experience?",
    allHaveExperience
);
 
 
// ============================================
// 8. SORT EMPLOYEES
// Highest salary to lowest salary
// ============================================
 
function sortEmployeesBySalary() {
 
    employees.sort(function(a, b) {
 
        return b.salary - a.salary;
 
    });
 
    console.log("===== SORTED BY SALARY =====");
 
    console.log(employees);
}
sortEmployeesBySalary();
 
 
// ============================================
// 9. ARRAY MANIPULATION
// push(), pop(), unshift(), shift()
// ============================================
 
// PUSH - Add employee at the end
 
let employee109 = {
    id: 109,
    name: "Suresh",
    department: "IT",
    salary: 50000,
    experience: 2,
    skills: ["C", "C++"],
    joiningDate: new Date("2024-01-10")
};
 
employees.push(employee109);
 
console.log("After push():");
console.log(employees);
 
 
// POP - Remove last employee
 
let removedLastEmployee = employees.pop();
 
console.log("Removed using pop():");
console.log(removedLastEmployee);
 
 
// UNSHIFT - Add employee at beginning
 
let employee110 = {
    id: 110,
    name: "Meena",
    department: "HR",
    salary: 35000,
    experience: 2,
    skills: ["HR", "Communication"],
    joiningDate: new Date("2024-02-10")
};
 
employees.unshift(employee110);
 
console.log("After unshift():");
console.log(employees);
 
 
// SHIFT - Remove first employee
 
let removedFirstEmployee = employees.shift();
 
console.log("Removed using shift():");
console.log(removedFirstEmployee);
 
 
// ============================================
// 10. OBJECT DESTRUCTURING
// ============================================
 
let firstEmployee = employees[0];
 
let {
    name,
    department,
    salary
} = firstEmployee;
 
console.log("===== OBJECT DESTRUCTURING =====");
 
console.log("Name:", name);
console.log("Department:", department);
console.log("Salary:", salary);
 
 
// ============================================
// 11. ARRAY DESTRUCTURING
// ============================================
 
let [skill1, skill2, skill3] = firstEmployee.skills;
 
console.log("===== ARRAY DESTRUCTURING =====");
 
console.log("Skill 1:", skill1);
console.log("Skill 2:", skill2);
console.log("Skill 3:", skill3);
 
 
// ============================================
// 12. SPREAD OPERATOR
// ============================================
 
let newEmployeeArray = [...employees];
 
console.log("===== SPREAD OPERATOR =====");
 
console.log(newEmployeeArray);
 
 
// ============================================
// 13. REST OPERATOR
// ============================================
 
function addEmployeeSkills(name, ...skills) {
 
    console.log("Employee Name:", name);
 
    console.log("Skills:");
 
    console.log(skills);
 
}
 
addEmployeeSkills(
    "Ramesh",
    "HTML",
    "CSS",
    "JavaScript",
    "React"
);
 
 

//  14 . FUNCTIONS
 
function displayEmployees() {
 
    console.log("==============================================");
    console.log("           ALL EMPLOYEE DETAILS");
    console.log("==============================================");
 
    employees.forEach(function(employee) {
 
        console.log("----------------------------------------------");
 
        console.log("ID          :", employee.id);
        console.log("Name        :", employee.name);
        console.log("Department  :", employee.department);
        console.log("Salary      : ₹" + employee.salary);
        console.log("Experience  :", employee.experience + " years");
        console.log("Skills      :", employee.skills.join(", "));
        console.log(
            "Joining Date:",
            employee.joiningDate.toLocaleDateString("en-IN")
        );
 
    });
 
    console.log("----------------------------------------------");
    console.log("Total Employees:", employees.length);
}
 
 
// =====================================================
// ADD EMPLOYEE
// =====================================================
 
function addEmployee(employee) {
 
    employees.push(employee);
 
    console.log("");
    console.log("==============================================");
    console.log("             EMPLOYEE ADDED");
    console.log("==============================================");
 
    console.log("ID          :", employee.id);
    console.log("Name        :", employee.name);
    console.log("Department  :", employee.department);
    console.log("Salary      : ₹" + employee.salary);
    console.log("Experience  :", employee.experience + " years");
    console.log("Skills      :", employee.skills.join(", "));
    console.log(
        "Joining Date:",
        employee.joiningDate.toLocaleDateString("en-IN")
    );
 
    console.log("----------------------------------------------");
    console.log("Total Employees:", employees.length);
}
 
 
// =====================================================
// DELETE EMPLOYEE
// =====================================================
 
function deleteEmployee(id) {
 
    let index = employees.findIndex(function(employee) {
        return employee.id === id;
    });
 
    console.log("");
    console.log("==============================================");
    console.log("             DELETE EMPLOYEE");
    console.log("==============================================");
 
    if (index !== -1) {
 
        let deletedEmployee = employees[index];
 
        employees.splice(index, 1);
 
        console.log("Employee deleted successfully!");
        console.log("----------------------------------------------");
 
        console.log("ID          :", deletedEmployee.id);
        console.log("Name        :", deletedEmployee.name);
        console.log("Department  :", deletedEmployee.department);
        console.log("Salary      : ₹" + deletedEmployee.salary);
        console.log("Experience  :", deletedEmployee.experience + " years");
        console.log("Skills      :", deletedEmployee.skills.join(", "));
 
        console.log("----------------------------------------------");
        console.log("Total Employees:", employees.length);
 
    } else {
 
        console.log("Employee with ID", id, "not found.");
 
    }
}
 
 
// =====================================================
//  SEARCH EMPLOYEE
// =====================================================
 
function searchEmployee(id) {
 
    let employee = employees.find(function(employee) {
        return employee.id === id;
    });
 
    console.log("");
    console.log("==============================================");
    console.log("             SEARCH EMPLOYEE");
    console.log("==============================================");
 
    if (employee) {
 
        console.log("Employee found!");
        console.log("----------------------------------------------");
 
        console.log("ID          :", employee.id);
        console.log("Name        :", employee.name);
        console.log("Department  :", employee.department);
        console.log("Salary      : ₹" + employee.salary);
        console.log("Experience  :", employee.experience + " years");
        console.log("Skills      :", employee.skills.join(", "));
        console.log(
            "Joining Date:",
            employee.joiningDate.toLocaleDateString("en-IN")
        );
 
    } else {
 
        console.log("Employee with ID", id, "not found.");
 
    }
}
 
 
// =====================================================
// CALCULATE TOTAL SALARY
// =====================================================
 
function calculateTotalSalary() {
 
    let totalSalary = employees.reduce(function(total, employee) {
 
        return total + employee.salary;
 
    }, 0);
 
    console.log("");
    console.log("==============================================");
    console.log("             TOTAL SALARY");
    console.log("==============================================");
 
    console.log("Total Employees :", employees.length);
    console.log("Total Salary    : ₹" + totalSalary);
 
    return totalSalary;
}
 
 
// =====================================================
// RUN ALL FUNCTIONS
// =====================================================
 
 
// 1. Display all 8 employees
displayEmployees();
 
 
// 2. Add employee
let employee115 = {
 
    id: 115,
    name: "Suresh",
    department: "IT",
    salary: 50000,
    experience: 2,
    skills: ["C", "C++"],
    joiningDate: new Date("2024-01-10")
 
};
 
addEmployee(employee115);
 
 
// 3. Search employee
searchEmployee(104);
 
 
// 4. Calculate total salary
calculateTotalSalary();
 
 
// 5. Delete employee 115
deleteEmployee(115);
 
 
// 6. Display employees again
displayEmployees();
 
 
 
// ============================================
// 15. SALARY CATEGORY
// Conditional statements
// ============================================
 
function getSalaryCategory(salary) {
 
    if (salary <= 30000) {
 
        return "Junior";
 
    } else if (salary <= 60000) {
 
        return "Mid Level";
 
    } else {
 
        return "Senior";
 
    }
 
}
 
 
// Display salary category
 
console.log("===== SALARY CATEGORIES =====");
 
employees.forEach(function(employee) {
 
    console.log(
        employee.name + " : " +
        getSalaryCategory(employee.salary)
    );
 
});
 
 
// ============================================
// 17. JOINING DATE
// getFullYear() and getMonth()
// ============================================
 
console.log("===== JOINING DATE =====");
 
employees.forEach(function(employee) {
 
    console.log(
        employee.name +
        " | Year: " +
        employee.joiningDate.getFullYear() +
        " | Month: " +
        (employee.joiningDate.getMonth() + 1)
    );
 
});
 
 
// ============================================
// 18. USER INPUT
// prompt()
// ============================================
 
let userId = Number(
    prompt("Enter Employee ID:")
);
 
let searchedEmployee = searchEmployee(userId);
 
if (searchedEmployee) {
 
    console.log("===== EMPLOYEE DETAILS =====");
 
    console.log("ID:", searchedEmployee.id);
    console.log("Name:", searchedEmployee.name);
    console.log("Department:", searchedEmployee.department);
    console.log("Salary:", searchedEmployee.salary);
    console.log("Experience:", searchedEmployee.experience);
    console.log("Skills:", searchedEmployee.skills);
 
}
 
