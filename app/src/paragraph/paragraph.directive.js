angular.module('evtviewer.paragraph')

.directive('evtParagraph', function(evtParagraph){
	return {
		restrict: 'E',
		scope: {
			parId: '@'
		},
		transclude: true,
		templateUrl: 'src/paragraph/paragraph.directive.tmpl.html',
		link: function(scope){
			scope.vm = {
				parId: scope.parId
			};
			var currentPar = evtParagraph.build(scope.parId, scope);
		}
	};
});