angular.module('evtviewer.paragraph')

.provider('evtParagraph', function(){
	this.$get = function (parsedData){
		var paragraphs = {},
			collection = {},
            list       = [],
            idx        = 0;

		paragraphs.build = function(id, scope){
			var currentId  = idx++;

			if (typeof(collection[currentId]) !== 'undefined') {
                return;
            }

			var scopeHelper = {
                // expansion
				paragraph : parsedData.getParById(id)
            };
            collection[currentId] = angular.extend(scope.vm, scopeHelper);
            list.push({
                id: currentId
            });

            return collection[currentId];
		};

		return paragraphs;
	};
});