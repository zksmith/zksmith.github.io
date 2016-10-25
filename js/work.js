var projects = {
    "projects": [{
        "name": "Coffee Shop Locator",
        "description": "Built a website that uses a mix of the skills I have learned so far, including AngularJS, Responsive Design, Accessibility, and Offline Functionality.",
        "image": "img/coffee.png",
        "github": "https://github.com/itsBosco/coffee-locator",
        "link": "https://itsbosco.github.io/coffee-locator/",
        "alt": "Coffee Shop Locator"
    }, {
        "name": "Corporate Dashboard",
        "description": "Built a corporate dashboard application including multiple views using the Angular JavaScript framework",
        "image": "img/corporate.png",
        "github": "https://github.com/itsBosco/corporate-dashboard",
        "link": "https://itsbosco.github.io/corporate-dashboard/",
        "alt": "Corporate Dashboard"
    }, {
        "name": "Transportation App",
        "description": "Website that uses the Caltrain API to get departure and arrival times of train stations. Implemented a service worker to practice offline first functionality.",
        "image": "img/caltrain.png",
        "github": "https://github.com/itsBosco/transportation-app",
        "link": "https://itsbosco.github.io/transportation-app/",
        "alt": "Transportation App"
    }],
    "projects2": [{
        "name": "Neighborhood Map",
        "description": "Project built using knockoutjs, Google Maps API and flickr API. The listview and markers on the map update as the user filters the locations.",
        "image": "img/map.png",
        "github": "https://github.com/itsBosco/neighborhood-map",
        "link": "http://itsbosco.github.io/neighborhood-map",
        "alt": "Neighborhood map project"
    }, {
        "name": "Restaurant Reviews",
        "description": "Restaurant reviewer app built using angularjs. Purpose of this project was to learn how to make a fully accessable site.",
        "image": "img/review.png",
        "github": "https://github.com/itsBosco/restaurant-reviews",
        "link": "#",
        "alt": "Restaurant Review Website"
    }, {
        "name": "Event Planner",
        "description": "Project built to practice front-end form validation and learn Angular.",
        "image": "img/event.png",
        "github": "https://github.com/itsBosco/event-planner",
        "link": "#",
        "alt": "Event Planner"
    }],
    "projects3": [{
        "name": "Twitch Featured Streams",
        "description": "Simple project build to learn more about the Twitch API.",
        "image": "img/twitch.png",
        "github": "https://github.com/itsBosco/twitch-featured",
        "link": "http://itsbosco.github.io/twitch-featured/",
        "alt": "Featured Twitch Streams"

    }, {
        "name": "This Website!",
        "description": "The newest verion of zahiersmith.com",
        "image": "img/item3.png",
        "github": "https://github.com/itsBosco/itsBosco.github.io",
        "link": "http://zahiersmith.com",
        "alt": "Fully responsive portfolio site"
    }, {
        "name": "Old Website",
        "description": "A previous version of this site",
        "image": "img/item1.png",
        "github": "https://github.com/itsBosco/old-website-2",
        "link": "http://itsbosco.github.io/old-website-2",
        "alt": "Portfolio site"
    }],
    "projects4": [{
        "name": "Tic-Tac-Toe",
        "description": "The classic game built using JavaScript/jQuery",
        "image": "img/tictac.png",
        "github": "https://github.com/itsBosco/tictactoe",
        "link": "http://itsbosco.github.io/tictactoe",
        "alt": "tic-tac-toe game"
    }, {
        "name": "Old Website",
        "description": "A previous version of this site",
        "image": "img/item2.png",
        "github": "https://github.com/itsBosco/old-website-1",
        "link": "http://itsbosco.github.io/old-website-1",
        "alt": "Portfolio site"
    }]
};

$(document).ready(function() {
    projects.display = function() {
        projects.projects.forEach(function(project) {
            $(".work-row").append('<div class="four columns"><div tabindex="0" class="imgWrap"><img src="' +
                project.image + '" alt="' + project.alt + '" /><div class="imgDescription"><a href="' + project.github +
                '" target="_blank"><i class="fa fa-github fa-2x"></i></a>' +
                '<h4>' + project.name + '</h4><p>' + project.description +
                '</p><a class="button" href="' +
                project.link + '"">Live Demo</a></div></div></div>');
        });
        projects.projects2.forEach(function(project2) {
            $(".work-row2").append('<div class="four columns"><a href="' +
                project2.link + '" target="_blank"><div tabindex="0" class="imgWrap"><img src="' +
                project2.image + '" alt="' + project2.alt + '" /><div class="imgDescription"><a href="' + project2.github +
                '" target="_blank"><i class="fa fa-github fa-2x"></i></a>' +
                '<h4>' + project2.name + '</h4><p>' + project2.description +
                '</p><a class="button" href="' +
                project2.link + '">Live Demo</a></div></div></div></a>');
        });
        projects.projects3.forEach(function(project3) {
            $(".work-row3").append('<div class="four columns"><a href="' +
                project3.link + '" target="_blank"><div tabindex="0" class="imgWrap"><img src="' +
                project3.image + '" alt="' + project3.alt + '" /><div class="imgDescription"><a href="' + project3.github +
                '" target="_blank"><i class="fa fa-github fa-2x"></i></a>' +
                '<h4>' + project3.name + '</h4><p>' + project3.description +
                '</p><a class="button" href="' +
                project3.link + '">Live Demo</a></div></div></div></a>');
        });
        projects.projects4.forEach(function(project4) {
            $(".work-row4").append('<div class="four columns"><a href="' +
                project4.link + '" target="_blank"><div tabindex="0" class="imgWrap"><img src="' +
                project4.image + '" alt="' + project4.alt + '" /><div class="imgDescription"><a href="' + project4.github +
                '" target="_blank"><i class="fa fa-github fa-2x"></i></a>' +
                '<h4>' + project4.name + '</h4><p>' + project4.description +
                '</p><a class="button" href="' +
                project4.link + '">Live Demo</a></div></div></div></a>');
        });
    };
    projects.display();
});
