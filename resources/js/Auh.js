class Auth {
    constructor() {
        this.init();
        console.log(this);
    }

    init(){
        this.name = localStorage.getItem('womuser_name');
        this.email = localStorage.getItem('womuser_email');
        this.loggedIn = localStorage.getItem('womuser_logued');
    }

    authenticated(data, callback){
        localStorage.setItem('womuser_name', data.name);
        localStorage.setItem('womuser_email', data.email);
        localStorage.setItem('womuser_logued', true);

        this.init();

        callback();
    }

    isLoggued(){
        console.log(this.loggedIn);
        return Boolean(this.loggedIn) === true || this.loggedIn === 'true';
    }
}

export default new Auth();
