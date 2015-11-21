angular.module('evtviewer.popover')

.constant('POPOVERDEFAULTS', {

    /**
     * @module evtviewerPopover
     * @ngdoc property
     * @name expanded
     * @description
     * `property`
     *
     * Some info
     *
     * Default:
     * <pre>
     * expanded: false
     * </pre>
     */
    expanded: false,

    /**
     * @module evtviewerPopover
     * @ngdoc property
     * @name tooltipOver
     * @description
     * `property`
     *
     * Some info
     *
     * Default:
     * <pre>
     * tooltipOver: false
     * </pre>
     */
    tooltipOver: false,
    
    /**
     * @module evtviewerPopover
     * @ngdoc property
     * @name tooltipMaxHeight
     * @description
     * `property`
     *
     * Some info
     *
     * Default:
     * <pre>
     * tooltipMaxHeight: 170
     * </pre>
     */
    tooltipMaxHeight: 170,

    /**
     * @module evtviewerPopover
     * @ngdoc property
     * @name tooltipMaxWidth
     * @description
     * `property`
     *
     * Some info
     *
     * Default:
     * <pre>
     * tooltipMaxWidth: 200
     * </pre>
     */
    tooltipMaxWidth: 200,

    /**
     * @module evtviewerPopover
     * @ngdoc property
     * @name openTriggerEvent
     * @description
     * `property`
     *
     * Some info
     *
     * Default:
     * <pre>
     * openTriggerEvent: 'click'
     * </pre>
     */
    openTriggerEvent: 'click'
})

.config(function(evtPopoverProvider, configProvider, POPOVERDEFAULTS) {
    var defaults = configProvider.makeDefaults('popover', POPOVERDEFAULTS);
    evtPopoverProvider.setDefaults(defaults);
});