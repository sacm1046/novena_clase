//Open a new terminal and execute this code:
npm i jquery@~3.4.1 popper.js bootstrap @fortawesome/fontawesome-free@5.1.0-9 react-router-dom prop-types --save


npm i jquery@~3.4.1 popper.js materialize-css@next @fortawesome/fontawesome-free@5.1.0-9 react-router-dom --save

//Install SCSS 
npm install node-sass

//Send Email from javascript
npm install emailjs-com --save

//Custom Alerts
npm install sweetalert --save

//Animations 
npm install aos --save

//Hash React Links
npm i typescript (required)
npm i react-router-hash-link 

//Create a mask whith youtube video
npm install react-player --save

//Materialize CSS
npm install --save materialize-css@next

//Google Fonts
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">wesome/fontawesome-free@5.1.0-9 react-router-dom --save




<tr key={index}>
    <th scope="row">{task.id}</th>
    <td>{task.user}</td>
    <td>{task.description}</td>
    <td>
        <i onClick={() => setForm(task.user, task.description, index)} className={`fas fa-edit ${mode ? "text-secondary" : "text-success"}`} />
        <i onClick={() => deleteTask(task)} className="fas fa-trash ml-3 mr-3" />
    </td>
</tr>


    < TableRow
        key={index}
        id={task.id}
        user={task.user}
        description={task.description}
        edit={() => setForm(task.user, task.description, index)}
        delete={() => deleteTask(task)}
        mode={mode}
    />