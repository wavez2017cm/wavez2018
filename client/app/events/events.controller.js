'use strict';

(function(){

class EventsComponent {
  constructor() {
    this.events = [{
    	'name': 'RoboRevolution',
    	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1487735143/Wavez2017/events/roboceana.png'
    },
    {
    	'name': 'R C Boats',
    	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1487735141/Wavez2017/events/rcboats.png'
    },
    {
    	'name': 'Investigation Case',
    	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1487735144/Wavez2017/events/treasure.png'
    },
    {
    	'name': 'Kryptx',
    	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1487735144/Wavez2017/events/kryptx.png'
    },
    {
    	'name': 'Quizathon',
    	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1487735141/Wavez2017/events/quiz.png'
    },
    {
        'name': 'Splash',
        'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1488220721/Wavez2017/events/splash.png'
    },
    {
        'name': 'Daily Events',
        'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1488287164/Wavez2017/events/dailyevents.png'
    }, {
        'name': 'Game Drome',
        'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1488287166/Wavez2017/events/gamedrome.png'
    }
  ];
  }
}

angular.module('wavez2017App')
  .component('events', {
    templateUrl: 'app/events/events.html',
    controller: EventsComponent,
    controllerAs: 'eventsCtrl'
  });

})();
