export class Settings {
    calltype?: number;
    companyname?: string;
    login?: string;
    phone?: string;
    fname?: string;
    lname?: string;
    email?: string;
    telegramChat?: string;
    sendMethod?: number;
    redirecttarget?: number;
    timezone?: number;
    private locklentaupdate?: boolean;
    private colorlenta?: boolean;

    get locklenta() {
        return !!this.locklentaupdate;
    }

    set locklenta(newval: any) {
        this.locklentaupdate = !!newval;
    }

    get lentacolor() {
        return !!this.colorlenta;
    }

    set lentacolor(newval: any) {
        this.colorlenta = !!newval;
    }

    // Выгрузка из новых настроек только необходимых полей
    setup(newSettings: any): void {
        this.calltype = Number(newSettings.calltype);
        this.companyname = newSettings.companyname;
        this.login = newSettings.login;
        this.phone = newSettings.phone;
        this.fname = newSettings.fname;
        this.lname = newSettings.lname;
        this.email = newSettings.email;
        this.telegramChat = newSettings.telegramChat;
        this.sendMethod = Number(newSettings.sendMethod);
        this.redirecttarget = Number(newSettings.redirecttarget);
        this.timezone = Number(newSettings.timezone);
        this.locklenta = newSettings.locklentaupdate;
        this.lentacolor = newSettings.colorlenta;
    }
}