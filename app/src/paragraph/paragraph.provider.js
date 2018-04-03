angular.module('evtviewer.paragraph')

.provider('evtParagraph', function(){
	this.$get = function (parsedData){
		var paragraphs = {},
			collection = {},
            list       = [],
            idx        = 0;

        var loadMoreElements = function() {
            var vm = this,
                last = vm.visibleElements.length,
                i = 0; 

            while (i < 10 && i < vm.parsedElements.length) {
                var newElement = vm.parsedElements[indexes[last+i]];
                vm.visibleElements.push(newElement);                    
                i++;
            }
        };
        //prende il parsedXml per ogni paragrafo nella collezione

        /*var getAllPar = function (pCollection){
        	var AllPar = [];
        	var index = [];
        	for (var i=0; i<pCollection._indexes.length; i++){
        		index[i] = pCollection._indexes[i];
        	}
        	for (var j=0; j<index.length; j++){
        		AllPar[j] = pCollection[index[j]].parsedXml;
        	}

        	return AllPar;
        };*/
        //restituisce gli indici
       var getIndex = function (parsedElements){
        	var indexes = [];
        	for (var i=0; i<parsedElements._indexes.length; i++){
        		indexes[i] = parsedElements._indexes[i];
        	}
        	return indexes;
        }

		paragraphs.build = function(id, scope){
			var currentId  = idx++;

			if (typeof(collection[currentId]) !== 'undefined') {
                return;
            }

            var parsedElements = parsedData.getPar(),  //restituisce la collezione
            	indexes = getIndex(parsedElements),
            	visibleElements = parsedElements.slice(0, 5);

			var scopeHelper = {
                // expansion
				paragraph : parsedData.getParById(id),
				//elements : parsedElements,
				visibleElements : parsedElements,

				//functions
				loadMoreElements : loadMoreElements
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