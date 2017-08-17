import angular from 'angular';

export class CreateUserController {
  /*@ngInject*/
  constructor($uibModalInstance, User, user,users) {
    this.User = User;
    this.$uibModalInstance = $uibModalInstance;
    this.user = user;
    this.users = users;
  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel');
  }

  submitForm() {
    this.User.createUser(this.user)
      .then(result => {
        this.formInfo = 'User successfully created!';
        this.User.getAllUsers()
          .then( result=> {
            this.users = result;
            console.log(this.users);
          })
          .catch(error => {
            console.error(error);
          });
          //console.log(main);
      })
      .catch(err => {
        console.error(err);
        this.formError = err.toString();
      });
  }
}

export default angular.module('comp3705App.createUserModal', [])
  .controller('createUserController', CreateUserController)
  .config(['$qProvider', function($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
  }])
  .name;
