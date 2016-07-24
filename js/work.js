var projects = {
    "projects": [
        {
            "name": "This Website!",
            "description": "The newest verion of zahiersmith.com",
            "image": "img/item3.png",
            "link": "http://zahiersmith.com"
        },
        {
            "name": "Old Website",
            "description": "A previous version of this site",
            "image": "img/item1.png",
            "link": "http://www.zahiersmith.com/old-website-2"
        },
        {
            "name": "Old Website",
            "description": "A previous version of this site",
            "image": "img/item2.png",
            "link": "http://www.zahiersmith.com/old-website-1"
        }
    ]
};

$(document).ready(function () {
    projects.display = function () {
        projects.projects.forEach(function (project) {
            $(".work-row").append('<div class="four columns"><a href="' + project.link + '" target="_blank"><div class="imgWrap"><img src="' + project.image + '" /><div class="imgDescription"><h4>' + project.name + '</h4><p>' + project.description + '</p></p></div></div></div></a>');
        });
    };
    projects.display();
});