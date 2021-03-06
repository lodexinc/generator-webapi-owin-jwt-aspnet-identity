'use strict';

var path = require('path');
var assert = require('assert');
var helpers = require('yeoman-generator').test;

before(function (done) {
  helpers.run(path.join(__dirname, '../app'))
    .inDir(path.join(__dirname, './tmp'))
    .withPrompts(
    {
      applicationName: 'My Application',
      dbServerName: '.\sqlexpress'
    })
    .on('end', done);
});

describe('generator-webapi-owin-jwt-aspnet-identity', function () {
  it('the generator should create all the files', function () {
    var expectedProjectFiles = [
      'MyApplication.sln',
      'packages/repositories.conig',
      'MyApplication.API/AppStart/WebApiConfig.cs',
      'MyApplication.API/Authentication/EmailTemplates/ConfirmEmailAddressEmail.html',
      'MyApplication.API/Authentication/EmailTemplates/ResetPasswordEmail.html',
      'MyApplication.API/Authentication/ApplicationJWTFormat.cs',
      'MyApplication.API/Authentication/ApplicationUser.cs',
      'MyApplication.API/Authentication/AuthenticationContext.cs',
      'MyApplication.API/Authentication/AuthenticationEmailService.cs',
      'MyApplication.API/Authentication/AuthenticationUserManager.cs',
      'MyApplication.API/Authentication/OAuthProvider.cs',
      'MyApplication.API/AutoMapping/AutoMappingExtensions.cs',
      'MyApplication.API/AutoMapping/NewUserProfile.cs',
      'MyApplication.API/AutoMapping/UserProfile.cs',
      'MyApplication.API/Controllers/BaseController.cs',
      'MyApplication.API/Controllers/UsersController.cs',
      'MyApplication.API/Exceptions/APIException.cs',
      'MyApplication.API/Exceptions/APIGlobalExceptionHandler.cs',
      'MyApplication.API/Exceptions/APIResponseExceptionHandler.cs',
      'MyApplication.API/Extensions/ExceptionExtensions.cs',
      'MyApplication.API/Filters/APIExceptionFilterAttribute.cs',
      'MyApplication.API/Filters/ModelValidationFilterAttribute.cs',
      'MyApplication.API/Migrations/Configuration.cs',
      'MyApplication.API/Models/Request/ConfirmEmailAddressRequest.cs',
      'MyApplication.API/Models/Request/CreateUserRequest.cs',
      'MyApplication.API/Models/Request/ResetPasswordRequest.cs',
      'MyApplication.API/Models/Request/SendPasswordResetRequest.cs',
      'MyApplication.API/Models/Request/UserRequest.cs',
      'MyApplication.API/Models/Response/DefaultResponse.cs',
      'MyApplication.API/Models/Response/UserResponse.cs',
      'MyApplication.API/Models/NewUserModel.cs',
      'MyApplication.API/Models/UserModel.cs',
      'MyApplication.API/Properties/AssemblyInfo.cs',
      'MyApplication.API.csproj',
      'MyApplication.API/packages.config',
      'MyApplication.API/Startup.cs',
      'MyApplication.API/Web.config',
      'MyApplication.API/Web.Debug.config',
      'MyApplication.API/Web.Release.config'
    ];
    helpers.testDirectory(path.join(__dirname, './tmp'), function () {
      assert.file(expectedProjectFiles);
    });
  });
});


