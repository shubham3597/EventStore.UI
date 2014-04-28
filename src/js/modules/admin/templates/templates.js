define(['angular'], function (angular) {'use strict'; (function(module) {
try {
  module = angular.module('es-ui.admin.templates');
} catch (e) {
  module = angular.module('es-ui.admin.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin.tpl.html',
    '<header class=page-header><h2 class=page-title>Admin</h2><ul class=page-nav><li class=page-nav__item><a href=# ng-click=halt($event)>Halt Server</a></li><li class=page-nav__item><a href=# ng-click=shutdown($event)>Shutdown Server</a></li><li class=page-nav__item><a href=# ng-click=scavenge($event)>Scavenge</a></li></ul></header><p>Nothing here... ????</p><p>Orginal code contains ajax call to get <code>/sys/subsystems</code> but this is not used anywhere on the web page. Moreover, code is used only to set <code>linkToChat.style.display</code> to <code>inline</code> or write message to console <code>"Not expected subsystem " + item + " has been found in list."</code>.</p>');
}]);
})();
 });