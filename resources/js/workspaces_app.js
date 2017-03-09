(function() {
    var app = angular.module('workspace', []);
    app.controller('EntityController', entityController);
    app.controller('PanelController', panelController);
    app.controller('FormsController', formsController);

    function formsController()
    {
    	
    }

function panelController() {
	this.tab = 1;
	
	this.getClass = function(tabParam)
	{
		return this.IsSelected(tabParam) ? 'btn-warning':'btn-primary';
	}
	this.selectTab = function(tabParam)
	{
		this.tab = tabParam;
	}
	this.Show = function(tabParam)
	{
		return this.IsSelected(tabParam);
	}


	this.IsSelected = function (tabParam)
	{

		var isSelected = tabParam === this.tab;
		return isSelected;
	}
}
    function entityController() {
        this.Entities = [entity_1, entity_2, entity_3]

    }

    var entity_1 = {
        title: 'Comittee',
        numberOfPeople: 5,
        description: 'Assisting the change',
        canExecute: true,
        budget: 300000,
        Available: true,
        Icon: "comittee.png"
    }

    var entity_2 = {
        title: 'Secretary',
        numberOfPeople: 10,
        description: 'Coordinating members',
        canExecute: false,
        budget: 125000,
        Available: true,
        Icon: "secretary.png"
    }

    var entity_3 = {
        title: 'Task Force',
        numberOfPeople: 3,
        description: 'Executing orders',
        canExecute: true,
        budget: 50000,
        Available: false,
        Icon: "task_force.png"
    }

})();
