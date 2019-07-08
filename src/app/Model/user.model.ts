export class UserModel {
    name: string;
    mail: string;
    password: string;

    constructor(name: string, mail: string, password: string) {
        this.name = name;
        this.mail = mail;
        this.password = password;
    }

}