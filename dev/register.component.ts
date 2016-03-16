/**
 * Created by wendywang on 2016-03-16.
 */
import {Component,View} from 'angular2/core';

@Component({
    selector:'patient',
    template:
        `<div class="container">
    <div class="page-header">
        <div class="page-header" style="margin-top: 60px">
        <h1>Register your account</h1>
    </div>
    <form method="post" role="form" class="login-form form-horizontal">
        <input name="_csrf" type="hidden"/>
        <div class="form-group">
            <label class="col-sm-4">Username</label>
            <div class="col-sm-8">
                <input placeholder="username" required="required" name="username" type="text" class="form-control"/>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-4">Password</label>
            <div class="col-sm-8">
                <input placeholder="4-20 digits password" required="required" name="password" type="password"
                       minlength="4" maxlength="20" class="form-control"/>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-4">Confirm Password</label>
            <div class="col-sm-8">
                <input placeholder="confirm password" required="required" name="confirmPassword" type="password"
                       class="form-control"/>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-4">Security Question</label>
            <div class="col-sm-8">
                <input placeholder="Security Question" required="required" name="securityQuestion" type="text"
                       class="form-control"/>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-4">Security Answer</label>
            <div class="col-sm-8">
                <input placeholder="Security Answer" required="required" name="securityAnswer" type="text"
                       class="form-control"/>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-4 col-sm-8">
                <button type="submit" class="login btn btn-primary">Register</button>
            </div>
        </div>
    </form>
</div>
    </div>`
})


export class RegisterComponent{
}
