# Portfolio Website

This is my personal portfolio website created using React.js and styled with Tailwind CSS. The website showcases my projects, skills, and experiences.

## Live Demo
Check out the live demo of the portfolio website: [https://whoisaditya-portfolio.netlify.app/](https://whoisaditya-portfolio.netlify.app/)

## Features

- Clean and modern design
- Responsive layout for all devices
- Interactive sections to showcase projects and skills
- Contact form for easy communication

## Technologies Used

- React.js
- Tailwind CSS
- Netlify (for hosting)

## Installation

1. Clone the repository to your local machine:

```
git clone https://github.com/your-username/your-portfolio-website.git
cd your-portfolio-website
```

2. Install the dependencies:

```
npm install
```

3. Start the development server:

```
npm start
```

The portfolio website should now be running on `http://localhost:3000`.

## Customization

Feel free to customize the website to make it your own! You can modify the content, add or remove sections, and update the styling as per your preferences.

### Personal Information

Update your personal information such as name, bio, and social media links in the `src/data/data.js` file.

### Data

#### Project Data
To showcase your projects, update the project data in the `src/data.js` file. Each project has the following structure:

```javascript
export const projects  = [
    {
        title: 'Project Title',
        subtitle: 'Project Subtitle',
        description: 'Project description goes here...',
        github_link: 'https://github.com/username/your-project',
    },
]
```

Replace the example project data with your own projects.

#### Skill Data
To showcase your skills, update the skills data in the `src/data.js` file. Each skill has the following structure:
```javascript
export const skills = [
  {
    name: "Skill Name",
    icon: "Skill icon link",
  },
]
```
Replace the example skill data with your own skills.

#### Contact Data
To showcase your contacts, update the contacts data in the `src/data.js` file. Each contact has the following structure:
```javascript
export const contacts = [
  {
    name: "Contact Name",
    link: "Conatct Link",
    icon: "Conatct Icon Link",
  },
]
```
Replace the example contact with your own contacts.

## Deployment

The website can be easily deployed using Netlify. Simply connect your GitHub repository to Netlify and set up the build and deploy settings. Netlify will automatically build and deploy your portfolio website whenever you push changes to the main branch.

## Contributions

Contributions to enhance the website or fix any issues are welcome. Feel free to submit a pull request explaining the changes you've made.

## License

The content of this project is licensed under the [MIT license](LICENSE).