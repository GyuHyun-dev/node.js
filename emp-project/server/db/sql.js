module.exports = {
    empList : `SELECT e.emp_no,
    e.first_name,
    e.last_name,
    e.gender,
    e.hire_date,
    (SELECT salary FROM salaries WHERE to_date = CAST('9999-01-01' AS DATE) AND emp_no = e.emp_no) as salary,
    d.dept_no,
    d.dept_name
FROM employees e JOIN dept_emp h
        ON(e.emp_no = h.emp_no)
        JOIN departments d
        ON( h.dept_no = d.dept_no )
        JOIN salaries s
        ON( e.emp_no = s.emp_no)
WHERE h.to_date = CAST('9999-01-01' AS DATE)
AND s.to_date = CAST('9999-01-01' AS DATE)
ORDER BY e.emp_no DESC
LIMIT 0, 10;`,
    empInfo : `select e.emp_no,
    e.first_name,
    e.last_name,
    e.gender,
    e.hire_date,
    s.salary,
    d.dept_no,
    d.dept_name
from employees e join dept_emp h
            on(e.emp_no = h.emp_no)
            join departments d
            on(h.dept_no = d.dept_no)
            join salaries s
            on(e.emp_no = s.emp_no)
where h.to_date = CAST('9999-01-01' as date)
and s.to_date = CAST('9999-01-01' as date)
and e.emp_no = ?`,
    empInsert : `insert into employees
    set ?`,
    
    deptInsert : `insert into dept_emp
    set emp_no = ?, dept_no = ?, from_date = ?, to_date = CAST('9999-01-01' as date)`,

    salInsert : `insert into salaries
    set ?`,
    
    empUpdate : `update employees set ? where emp_no = ? `,
    empDelete : `update dept_emp set to_date = ? where emp_no = ?`
}

