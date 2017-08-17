import angular from 'angular';

export class CreateUserController {
  /*@ngInject*/
  constructor($uibModalInstance, $location ,User, user) {
    this.User = User;
    this.$uibModalInstance = $uibModalInstance;
    this.user = user;
    this.location = $location;
  }

  cancel() {
	this.$uibModalInstance.dismiss('cancel');
          //console.log(main); 
    
	 
  }

  submitForm() {
    this.User.createUser(this.user)
      .then(result => {
        this.formInfo = 'User successfully created!';
        window.location = "#!/";
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
