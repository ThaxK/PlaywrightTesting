import { Locator, Page } from "@playwright/test";

export class LoginPage{
    private readonly username: Locator;
    private readonly password: Locator;
    private readonly loginButton: Locator;

    constructor(page:Page){
        this.username=page.getByRole('textbox',{name:'Username'});
        this.password=page.getByRole('textbox',{name:'Password'});
        this.loginButton=page.getByRole('button',{name:'Login'});
    }

    async fillUsername(){
        await this.username.fill('standard_user');
    }
    
    async fillPassword(){
        await this.password.fill('secret_sauce');
    }

    async clickButton(){
        await this.loginButton.click();
    }
}