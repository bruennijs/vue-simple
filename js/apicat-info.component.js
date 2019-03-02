//
Vue.component('info', {
    props: ['message'],
    data: function () {
        return {
            message: 'initial value'
        };
    },
    template: '<div><p>{{ message }}</p></div>'
});