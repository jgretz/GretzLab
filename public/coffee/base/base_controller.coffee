class @BaseController extends AngularController
	@inject '$scope'

	setMoneyImage: (imageClass) =>
		@$scope.$parent.moneyClass = imageClass