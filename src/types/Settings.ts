export class Settings {
    calltype?: number;
    companyname?: string;
    login?: string;
    phone?: string;
    fname?: string;
    lname?: string;
    sendMethod: any;

    // Выгрузка из новых настроек только необходимых полей
    setup(newSettings: Settings): void {
        this.calltype = newSettings.calltype;
        this.companyname = newSettings.companyname;
        this.login = newSettings.login;
        this.phone = newSettings.phone;
        this.fname = newSettings.fname;
        this.lname = newSettings.lname;
    }
}