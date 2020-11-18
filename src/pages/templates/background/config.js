let config = {
    "template": {
        "name": "background",
        
        "navbar": [null, "uk-navbar-left", "uk-navbar-right"], // Choice one
        "mode": [null, "uk-light", "uk-dark"], // Choice one
        "background": [  // Choice one
            {
                "type": "class",
                "class": [null, "uk-background-default", "uk-background-muted", "uk-background-primary", "uk-background-secondary"] // Choice one
            },
            {
                "type": "image",
                "attributes": {
                    "data-src": "assets/images/**/*.*",
                    "data-srcset": [null, "assets/images/**/*.* 640w, assets/images/**/*.* 960w, assets/images/**/*.* 1200w, assets/images/**/*.* 1600w"],
                    "data-sizes": [null, "(min-width: 650px) 650px, 100vw"],
                    "class": "uk-background-cover uk-background-norepeat uk-background-fixed",
                }
            },
            {
                "type": "video",
                "attributes": { // All <video> attributes possible
                    "src": "assets/videos/**/*.*",
                    "autoplay": true,
                    "loop": true,
                    "muted": true,
                    "playsinline": true,
                    "poster": "assets/images/**/*.*"
                }
            }
        ]
    },

    "content": {
        "icon": [ // Choice one - All FW component possible
            {
                "type": "uk-icon",
                "attributes": { // All <span> attributes possible
                    "uk-icon": "icon: uikit; ratio: 2;",
                    "class": null
                }
            },
            {
                "type": ["uk-img", "uk-svg"],
                "attributes": { // All <img/> attributes possible
                    "data-src": "assets/images/**/*.*",
                    "width": 0,
                    "height": 0,
                    "alt": "Website logo",
                    "class": null
                }
            }
        ],
        "title": "This is a <h1 class=\"uk-heading-medium\">title</h1>",
        "subtitle": "This is a <h2 class=\"uk-h4\">subtitle</h2>",
        "description": "This is a little text use for <p>description</p>",
        "footer": [ // All FW component possible
            {
                "type": "uk-button",
                "tag": "a",
                "content": "Get started",
                "attributes": { // All <a> attributes possible
                    "href": "**/*.html",
                    "class": "uk-button"
                }
            }
        ]
    }
};