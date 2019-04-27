class RestApi {
    constructor(){
        this.port = '8762';
    }

    getProject(id){
        return fetch('http://localhost:' + this.port + '/api/projects/' + id, {
            method: 'GET',
            headers: {'Accept': 'application/json'}
        }).then(res => res.json())
            .then(
                json => {
                    console.log(json);
                    return json;
                }
            );
    }

    addProject(title, description, technologies, studentAgreement, supervisorAgreement, external) {
        const payload = {name: title,
            describ: description,
            technologies: technologies,
            studentAgreement: studentAgreement,
            supervisorAgreement: supervisorAgreement,
            external: external};

        fetch('http://localhost:' + this.port + '/api/projects/', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json()).then(json => console.log(json)).catch(err => console.error(err));
    }

    removeProject(id){
        fetch('http://localhost:' + this.port + '/api/projects/' + id, {
            method: 'DELETE',
            headers: {'Accept': 'application/json'}
        }).then(res => res.json()).then(json => console.log(json)).catch(err => console.error(err));
    }

    updateProject(id, title, description, technologies, studentAgreement, supervisorAgreement, external) {
        const payload = {name: title,
            describ: description,
            technologies: technologies,
            studentAgreement: studentAgreement,
            supervisorAgreement: supervisorAgreement,
            external: external};

        fetch('http://localhost:' + this.port + '/api/projects/' + id, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json()).then(json => console.log(json)).catch(err => console.error(err));
    }

    getAllProjects() {
        return this.getProject('');
    }

    getUser(id) {
        return fetch('http://localhost:' + this.port + '/api/users/' + id, {
            method: 'GET',
            headers: {'Accept': 'application/json'}
        }).then(res => res.json())
            .then(
                json => {
                    console.log(json);
                    return json;
                }
            );
    }

    addUser(name, role, maxProjects, admin) {
        const payload = {name: name,
            role: role,
            maxProjects: maxProjects,
            admin: admin};

        fetch('http://localhost:' + this.port + '/api/users/', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json()).then(json => console.log(json)).catch(err => console.error(err));
    }

    updateUser(id, name, role, maxProjects, projects, admin) {
        const payload = {name: name,
            role: role,
            maxProjects: maxProjects,
            projects: projects,
            admin: admin};

        fetch('http://localhost:' + this.port + '/api/users/' + id, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json()).then(json => console.log(json)).catch(err => console.error(err));
    }

    removeUser(id){
        fetch('http://localhost:' + this.port + '/api/users/' + id, {
            method: 'DELETE',
            headers: {'Accept': 'application/json'}
        }).then(res => res.json()).then(json => console.log(json)).catch(err => console.error(err));
    }

    getAllUsers() {
        return this.getUser('');
    }
}

export default RestApi;

