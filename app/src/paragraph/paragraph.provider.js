angular.module('evtviewer.paragraph')

.provider('evtParagraph', function(){
	this.$get = function (parsedData){
		var paragraphs = {};

		paragraph.build = function(id, scope){
			var paragraph = parsedData.getParById(id);
			return paragraph;
		};

		return paragraphs;
	};
});