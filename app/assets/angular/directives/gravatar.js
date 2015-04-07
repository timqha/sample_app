
angular
    .module('app')
    .directive('gravatar', function() {
    return {
        restrict: 'AE',
        replace: true,
        scope: {
            name: '@',
            height: '@',
            width: '@',
            emailHash: '@'
        },

        template: '<img alt="{{ name }}" height="{{ height }}"  width="{{ width }}" src="https://secure.gravatar.com/avatar/{{ emailHash }}.jpg">'
    };


})
;