-- 전체 사원조회 : 페이징 적용
SELECT e.emp_no,
       e.first_name,
       e.last_name,
       e.gender,
       e.hire_date,
       s.salary,
       d.dept_no,
       d.dept_name
FROM employees e JOIN dept_emp h
				 ON( e.emp_no = h.emp_no)
                 JOIN departments d
                 ON( h.dept_no = d.dept_no )
				 JOIN salaries s
                 ON( e.emp_no = s.emp_no)
WHERE h.to_date = CAST('9999-01-01' AS DATE)
AND s.to_date = CAST('9999-01-01' AS DATE)
ORDER BY e.emp_no
LIMIT 0, 10;

-- 사원 정보 조회
SELECT e.emp_no,
       e.first_name,
       e.last_name,
       e.gender,
       e.hire_date,
       s.salary,
       d.dept_no,
       d.dept_name
FROM employees e JOIN dept_emp h
				 ON( e.emp_no = h.emp_no)
                 JOIN departments d
                 ON( h.dept_no = d.dept_no )
				 JOIN salaries s
                 ON( e.emp_no = s.emp_no)
WHERE h.to_date = CAST('9999-01-01' AS DATE)
AND s.to_date = CAST('9999-01-01' AS DATE)
AND e.emp_no = 500000;

-- 사원 등록
-- 1) 부서정보조회
SELECT dept_no,
       dept_name
FROM departments
ORDER BY dept_no;

-- 2) 사원정보 등록 -> employees, dept_emp, salaries
INSERT INTO employees 
SET emp_no = '500000', first_name = 'Kil-Dong', last_name = 'Hong', gender = 'M', hire_date = '2023-12-06';

INSERT INTO dept_emp
SET emp_no = '500000', dept_no = 'd003', from_date = '2023-12-06', to_date = CAST('9999-01-01' AS date);

INSERT INTO salaries
SET emp_no = '500000', salary = '10000', from_date = '2023-12-06', to_date = CAST('9999-01-01' AS date);

-- 사원 수정 ( employees 테이블만 수정 )
UPDATE employees 
SET first_name = 'Kil-Dong', last_name = 'Hong', gender = 'M', hire_date = '2023-12-06'
WHERE emp_no = '500000';

-- 사원 삭제 
UPDATE dept_emp
SET to_date = '2023-12-06'
WHERE emp_no = '500000';



