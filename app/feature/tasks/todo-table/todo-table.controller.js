(function() {
    'use strict';

    angular.module('tasks')
        .controller('TodoTable', TodoTable);

    function TodoTable(todoTableService, stateRouter) {
        let $ctrl = this;

        Object.assign($ctrl, todoTableService);

        $ctrl.showComplete = true;
        $ctrl.navigate = stateRouter.navigate;

        $ctrl.searchText = function(item) {
            let search = $ctrl.getSearch();
            if (!search) {
                return true;
            }

            let iAction = !item.action ? '' : item.action.toLowerCase();
            let iResponsible = !item.responsible ? '' : item.responsible.toLowerCase();
            search = ('' + search).toLowerCase();

            return iAction.indexOf(search) > -1 || iResponsible.indexOf(search) > -1;
        }
    }

})();