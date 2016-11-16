(function() {
    "use strict";

    angular.module("todoTable", [])
        .value("tableColumns", [{
                "name": "number",
                "visible": true
            },{
                "name": "id",
                "visible": false
            },{
                "name": "action",
                "visible": true
            },{
                "name": "done",
                "visible": true
            },{
                "name": "deadline",
                "visible": true
            },{
                "name": "responsible",
                "visible": true
            },{
                "name": "estimate",
                "visible": true
            },{
                "name": "commands",
                "visible": true
            }]);

})();
