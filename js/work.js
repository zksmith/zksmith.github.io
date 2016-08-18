var projects = {
    "projects": [{
        "name": "Neighborhood Map",
        "description": "Project built using knockoutjs, Google Maps API and flickr API. The listview and markers on the map update as the user filters the locations.",
        "image": "img/map.png",
        "github": "https://github.com/itsBosco/neighborhood-map",
        "link": "http://www.zahiersmith.com/neighborhood-map",
        "alt": "Neighborhood map project"
    }, {
        "name": "This Website!",
        "description": "The newest verion of zahiersmith.com",
        "image": "img/item3.png",
        "github": "https://github.com/itsBosco/itsBosco.github.io",
        "link": "http://zahiersmith.com",
        "alt": "Fully responsive portfolio site"
    }, {
        "name": "Event Planner",
        "description": "Project built to practice front-end form validation and learn Angular.",
        "image": "img/event.png",
        "github": "https://github.com/itsBosco/event-planner",
        "link": "#",
        "alt": "Event Planner"
    }],
    "projects2": [{
        "name": "Tic-Tac-Toe",
        "description": "The classic game built using JavaScript/jQuery",
        "image": "img/tictac.png",
        "github": "https://github.com/itsBosco/tictactoe",
        "link": "http://www.zahiersmith.com/tictactoe",
        "alt": "tic-tac-toe game"
    }, {
        "name": "Old Website",
        "description": "A previous version of this site",
        "image": "img/item2.png",
        "github": "https://github.com/itsBosco/old-website-1",
        "link": "http://www.zahiersmith.com/old-website-1",
        "alt": "Portfolio site"
    }, {
        "name": "Old Website",
        "description": "A previous version of this site",
        "image": "img/item1.png",
        "github": "https://github.com/itsBosco/old-website-2",
        "link": "http://www.zahiersmith.com/old-website-2",
        "alt": "Portfolio site"
    }]
};

$(document).ready(function() {
    projects.display = function() {
        projects.projects.forEach(function(project) {
            $(".work-row").append('<div class="four columns"><div class="imgWrap"><img src="' +
                project.image + '" alt="' + project.alt + '" /><div class="imgDescription"><a href="' + project.github +
                '" target="_blank"><i class="fa fa-github fa-2x"></i></a>' +
                '<h4>' + project.name + '</h4><p>' + project.description +
                '</p><a class="button" href="' +
                project.link + '"">Live Demo</a></div></div></div>');
        });
        projects.projects2.forEach(function(project2) {
            $(".work-row2").append('<div class="four columns"><a href="' +
                project2.link + '" target="_blank"><div class="imgWrap"><img src="' +
                project2.image + '" alt="' + project2.alt + '" /><div class="imgDescription"><a href="' + project2.github +
                '" target="_blank"><i class="fa fa-github fa-2x"></i></a>' +
                '<h4>' + project2.name + '</h4><p>' + project2.description +
                '</p><a class="button" href="' +
                project2.link + '">Live Demo</a></div></div></div></a>');
        });
    };
    projects.display();
});
