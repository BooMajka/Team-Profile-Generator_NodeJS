
const generateMarkdownManager = data => {
	return `
	<div class="gallery-item item-${data.manager_id}">
            <div class="description-wrapper">
                <h2 class="name">${data.manager_name}</h2>
                <span class="position-title">
                    <h3>Manager</h2>
                        <p>id: ${data.manager_id}</p>
                        <a href="mailto:${data.manager_email}">email: ${data.manager_email}</a>
                        <p>office number: ${data.manager_number}</p>
                </span>
            </div>
        </div>
	`
}

const generateMarkdownEngineer = data => {
	return `
	<div class="gallery-item item-${data.engineer_id}">
            <div class="description-wrapper">
                <h2 class="name">${data.engineer_name}</h2>
                <span class="position-title">
                    <h3>Engineer</h2>
                        <p>id: ${data.engineer_id}</p>
                        <a href="mailto:${data.engineer_email}">email: ${data.engineer_email}</a></br>
                        <a href="https://github.com/BooMajka" target="_blank">GitHub: ${data.engineer_github}</a>
                </span>
            </div>
        </div>
			`
}

const generateMarkdownIntern = data => {
	return `
	<div class="gallery-item item-${data.intern_id}">
            <div class="description-wrapper">
                <h2 class="name">${data.intern_name}</h2>
                <span class="position-title">
                    <h3>Intern</h2>
                        <p>id: ${data.intern_id}</p>
                        <a href="mailto:${data.intern_email}">email: ${data.intern_email}</a></br>
                        <p>School: ${data.intern_school}</p>
                </span>
            </div>
        </div>
			`
}

const generatePage = (manager, engineers, interns) => {
  return `

	<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>My Team</title>
</head>
<body>
    <header class="title">My Team</header>
    <div class="gallery-wrapper">

	${manager.forEach((el) => generateMarkdownManager(el))}

	${engineers.forEach((el) => generateMarkdownEngineer(el))}

	${interns.forEach((el) => generateMarkdownIntern(el))}

	</div>
	</body>
	</html>
	`;
};