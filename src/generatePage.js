
const generateMarkdownManager = data => {
    console.log(data.name)
	return `
	<div class="gallery-item item-${data.id}">
            <div class="description-wrapper">
                <h2 class="name">${data.name}</h2>
                <span class="position-title">
                    <h3>Manager</h2>
                        <p>id: ${data.id}</p>
                        <a href="mailto:${data.email}">email: ${data.email}</a>
                        <p>office number: ${data.number}</p>
                </span>
            </div>
        </div>
	`
}

const generateMarkdownEngineer = data => {
	return `
	<div class="gallery-item item-${data.id}">
            <div class="description-wrapper">
                <h2 class="name">${data.name}</h2>
                <span class="position-title">
                    <h3>Engineer</h2>
                        <p>id: ${data.id}</p>
                        <a href="mailto:${data.email}">email: ${data.email}</a></br>
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
console.log(manager, engineers, interns);
manager.forEach(el => console.log(el));
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

module.exports = generatePage;